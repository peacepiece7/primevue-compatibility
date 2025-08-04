/**
 * PrimeVue Performance Monitoring & Analysis System
 * 
 * Features:
 * - Component render time tracking
 * - Bundle size analysis
 * - Memory usage monitoring
 * - Performance recommendations
 * - Core Web Vitals tracking
 * - Development performance insights
 */

import { ref, reactive, computed, onMounted, onUnmounted, nextTick } from 'vue';

// Performance metrics store
const performanceMetrics = reactive({
    components: new Map(),
    bundles: new Map(),
    themes: new Map(),
    vitals: {
        lcp: 0,
        fid: 0,
        cls: 0,
        fcp: 0,
        ttfb: 0
    },
    memory: {
        used: 0,
        total: 0,
        limit: 0
    },
    renderStats: {
        totalComponents: 0,
        averageRenderTime: 0,
        slowestComponent: null,
        fastestComponent: null
    }
});

// Performance observer instances
let performanceObserver = null;
let memoryObserver = null;
let resizeObserver = null;

/**
 * Component Performance Tracker
 * Tracks individual component rendering performance
 */
export class ComponentPerformanceTracker {
    constructor(componentName) {
        this.componentName = componentName;
        this.renderTimes = [];
        this.mountTime = 0;
        this.updateCount = 0;
        this.memoryLeaks = [];
        this.isTracking = false;
    }

    startTracking() {
        if (this.isTracking) return;
        
        this.isTracking = true;
        this.mountTime = performance.now();
        
        // Track component in global metrics
        performanceMetrics.components.set(this.componentName, {
            tracker: this,
            renderTimes: this.renderTimes,
            mountTime: this.mountTime,
            updateCount: this.updateCount,
            status: 'mounted'
        });
    }

    recordRender(duration) {
        if (!this.isTracking) return;
        
        this.renderTimes.push({
            duration,
            timestamp: performance.now(),
            updateCount: this.updateCount
        });
        
        this.updateCount++;
        
        // Keep only last 100 render times for memory efficiency
        if (this.renderTimes.length > 100) {
            this.renderTimes.shift();
        }
        
        this.updateGlobalStats();
    }

    recordMemoryLeak(size, description) {
        this.memoryLeaks.push({
            size,
            description,
            timestamp: performance.now()
        });
    }

    updateGlobalStats() {
        const avgRenderTime = this.getAverageRenderTime();
        const componentData = performanceMetrics.components.get(this.componentName);
        
        if (componentData) {
            componentData.averageRenderTime = avgRenderTime;
            componentData.lastRenderTime = this.renderTimes[this.renderTimes.length - 1]?.duration || 0;
        }
        
        // Update global render stats
        this.updateRenderStats();
    }

    updateRenderStats() {
        const components = Array.from(performanceMetrics.components.values());
        const renderTimes = components
            .map(c => c.averageRenderTime || 0)
            .filter(time => time > 0);
        
        if (renderTimes.length === 0) return;
        
        performanceMetrics.renderStats.totalComponents = components.length;
        performanceMetrics.renderStats.averageRenderTime = 
            renderTimes.reduce((sum, time) => sum + time, 0) / renderTimes.length;
        
        // Find slowest and fastest components
        let slowest = { name: null, time: 0 };
        let fastest = { name: null, time: Infinity };
        
        components.forEach(component => {
            const avgTime = component.averageRenderTime || 0;
            if (avgTime > slowest.time) {
                slowest = { name: component.tracker.componentName, time: avgTime };
            }
            if (avgTime < fastest.time && avgTime > 0) {
                fastest = { name: component.tracker.componentName, time: avgTime };
            }
        });
        
        performanceMetrics.renderStats.slowestComponent = slowest;
        performanceMetrics.renderStats.fastestComponent = fastest;
    }

    getAverageRenderTime() {
        if (this.renderTimes.length === 0) return 0;
        
        const total = this.renderTimes.reduce((sum, render) => sum + render.duration, 0);
        return total / this.renderTimes.length;
    }

    getPerformanceScore() {
        const avgTime = this.getAverageRenderTime();
        
        if (avgTime < 1) return 'excellent';
        if (avgTime < 5) return 'good';
        if (avgTime < 10) return 'fair';
        return 'poor';
    }

    stopTracking() {
        this.isTracking = false;
        
        const componentData = performanceMetrics.components.get(this.componentName);
        if (componentData) {
            componentData.status = 'unmounted';
            componentData.totalLifetime = performance.now() - this.mountTime;
        }
    }

    getMetrics() {
        return {
            componentName: this.componentName,
            averageRenderTime: this.getAverageRenderTime(),
            totalRenders: this.renderTimes.length,
            mountTime: this.mountTime,
            updateCount: this.updateCount,
            performanceScore: this.getPerformanceScore(),
            memoryLeaks: this.memoryLeaks.length,
            isTracking: this.isTracking
        };
    }
}

/**
 * Bundle Performance Analyzer
 * Analyzes bundle sizes and loading performance
 */
export class BundlePerformanceAnalyzer {
    constructor() {
        this.bundleMetrics = new Map();
        this.loadingTimes = new Map();
    }

    recordBundleLoad(bundleName, size, loadTime) {
        this.bundleMetrics.set(bundleName, {
            size,
            loadTime,
            timestamp: performance.now(),
            compressionRatio: this.calculateCompressionRatio(size),
            performanceImpact: this.calculatePerformanceImpact(size, loadTime)
        });
        
        performanceMetrics.bundles.set(bundleName, this.bundleMetrics.get(bundleName));
    }

    calculateCompressionRatio(size) {
        // Estimate compression ratio based on bundle size
        // Typical gzip compression is around 70-80% for JS/CSS
        return size * 0.25; // Estimated compressed size
    }

    calculatePerformanceImpact(size, loadTime) {
        // Calculate performance impact score
        const sizeScore = Math.min(size / 50000, 1); // 50KB baseline
        const timeScore = Math.min(loadTime / 100, 1); // 100ms baseline
        
        return (sizeScore + timeScore) / 2;
    }

    getBundleRecommendations() {
        const recommendations = [];
        
        for (const [bundleName, metrics] of this.bundleMetrics) {
            if (metrics.size > 100000) { // 100KB
                recommendations.push({
                    type: 'size',
                    bundle: bundleName,
                    message: `Bundle ${bundleName} is large (${(metrics.size / 1024).toFixed(1)}KB). Consider code splitting.`,
                    severity: 'warning'
                });
            }
            
            if (metrics.loadTime > 200) { // 200ms
                recommendations.push({
                    type: 'loading',
                    bundle: bundleName,
                    message: `Bundle ${bundleName} loads slowly (${metrics.loadTime}ms). Consider preloading or lazy loading.`,
                    severity: 'warning'
                });
            }
            
            if (metrics.performanceImpact > 0.7) {
                recommendations.push({
                    type: 'impact',
                    bundle: bundleName,
                    message: `Bundle ${bundleName} has high performance impact. Review dependencies.`,
                    severity: 'error'
                });
            }
        }
        
        return recommendations;
    }
}

/**
 * Core Web Vitals Tracker
 * Tracks Core Web Vitals metrics
 */
export class CoreWebVitalsTracker {
    constructor() {
        this.vitals = performanceMetrics.vitals;
        this.observers = [];
    }

    init() {
        if (typeof window === 'undefined') return;
        
        // Track Largest Contentful Paint (LCP)
        this.trackLCP();
        
        // Track First Input Delay (FID)
        this.trackFID();
        
        // Track Cumulative Layout Shift (CLS)
        this.trackCLS();
        
        // Track First Contentful Paint (FCP)
        this.trackFCP();
        
        // Track Time to First Byte (TTFB)
        this.trackTTFB();
    }

    trackLCP() {
        if (!('PerformanceObserver' in window)) return;
        
        const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            this.vitals.lcp = lastEntry.startTime;
        });
        
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
        this.observers.push(observer);
    }

    trackFID() {
        if (!('PerformanceObserver' in window)) return;
        
        const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach(entry => {
                if (entry.name === 'first-input') {
                    this.vitals.fid = entry.processingStart - entry.startTime;
                }
            });
        });
        
        observer.observe({ entryTypes: ['first-input'] });
        this.observers.push(observer);
    }

    trackCLS() {
        if (!('PerformanceObserver' in window)) return;
        
        let clsValue = 0;
        
        const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach(entry => {
                if (!entry.hadRecentInput) {
                    clsValue += entry.value;
                    this.vitals.cls = clsValue;
                }
            });
        });
        
        observer.observe({ entryTypes: ['layout-shift'] });
        this.observers.push(observer);
    }

    trackFCP() {
        if (!('PerformanceObserver' in window)) return;
        
        const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach(entry => {
                if (entry.name === 'first-contentful-paint') {
                    this.vitals.fcp = entry.startTime;
                }
            });
        });
        
        observer.observe({ entryTypes: ['paint'] });
        this.observers.push(observer);
    }

    trackTTFB() {
        if (typeof window === 'undefined') return;
        
        const navigationEntry = performance.getEntriesByType('navigation')[0];
        if (navigationEntry) {
            this.vitals.ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
        }
    }

    getVitalsScore() {
        const scores = {
            lcp: this.vitals.lcp < 2500 ? 'good' : this.vitals.lcp < 4000 ? 'needs-improvement' : 'poor',
            fid: this.vitals.fid < 100 ? 'good' : this.vitals.fid < 300 ? 'needs-improvement' : 'poor',
            cls: this.vitals.cls < 0.1 ? 'good' : this.vitals.cls < 0.25 ? 'needs-improvement' : 'poor',
            fcp: this.vitals.fcp < 1800 ? 'good' : this.vitals.fcp < 3000 ? 'needs-improvement' : 'poor',
            ttfb: this.vitals.ttfb < 800 ? 'good' : this.vitals.ttfb < 1800 ? 'needs-improvement' : 'poor'
        };
        
        return scores;
    }

    destroy() {
        this.observers.forEach(observer => observer.disconnect());
        this.observers = [];
    }
}

/**
 * Memory Performance Monitor
 * Tracks memory usage and potential leaks
 */
export class MemoryPerformanceMonitor {
    constructor() {
        this.memoryMetrics = [];
        this.isMonitoring = false;
        this.monitoringInterval = null;
    }

    startMonitoring(interval = 5000) {
        if (this.isMonitoring) return;
        
        this.isMonitoring = true;
        
        this.monitoringInterval = setInterval(() => {
            this.recordMemoryUsage();
        }, interval);
    }

    recordMemoryUsage() {
        if (typeof window === 'undefined' || !performance.memory) return;
        
        const memory = performance.memory;
        const timestamp = performance.now();
        
        const memoryData = {
            used: memory.usedJSHeapSize,
            total: memory.totalJSHeapSize,
            limit: memory.jsHeapSizeLimit,
            timestamp
        };
        
        this.memoryMetrics.push(memoryData);
        
        // Keep only last 100 measurements
        if (this.memoryMetrics.length > 100) {
            this.memoryMetrics.shift();
        }
        
        // Update global memory metrics
        performanceMetrics.memory = {
            used: memoryData.used,
            total: memoryData.total,
            limit: memoryData.limit
        };
    }

    detectMemoryLeaks() {
        if (this.memoryMetrics.length < 10) return [];
        
        const leaks = [];
        const recentMetrics = this.memoryMetrics.slice(-10);
        const trend = this.calculateMemoryTrend(recentMetrics);
        
        if (trend > 1000000) { // 1MB increase trend
            leaks.push({
                type: 'memory-leak',
                severity: 'warning',
                message: `Potential memory leak detected. Memory usage increased by ${(trend / 1024 / 1024).toFixed(2)}MB`,
                trend
            });
        }
        
        return leaks;
    }

    calculateMemoryTrend(metrics) {
        if (metrics.length < 2) return 0;
        
        const first = metrics[0].used;
        const last = metrics[metrics.length - 1].used;
        
        return last - first;
    }

    getMemoryRecommendations() {
        const recommendations = [];
        const currentUsage = performanceMetrics.memory.used;
        const limit = performanceMetrics.memory.limit;
        
        const usagePercentage = (currentUsage / limit) * 100;
        
        if (usagePercentage > 80) {
            recommendations.push({
                type: 'memory',
                severity: 'error',
                message: `High memory usage (${usagePercentage.toFixed(1)}%). Consider optimizing component lifecycle.`
            });
        } else if (usagePercentage > 60) {
            recommendations.push({
                type: 'memory',
                severity: 'warning',
                message: `Moderate memory usage (${usagePercentage.toFixed(1)}%). Monitor for potential leaks.`
            });
        }
        
        return recommendations;
    }

    stopMonitoring() {
        this.isMonitoring = false;
        
        if (this.monitoringInterval) {
            clearInterval(this.monitoringInterval);
            this.monitoringInterval = null;
        }
    }
}

// Global performance system instances
const bundleAnalyzer = new BundlePerformanceAnalyzer();
const vitalsTracker = new CoreWebVitalsTracker();
const memoryMonitor = new MemoryPerformanceMonitor();

/**
 * Vue Composable for Performance Monitoring
 */
export function usePerformanceMonitoring(componentName) {
    const tracker = new ComponentPerformanceTracker(componentName);
    const isTracking = ref(false);
    
    onMounted(() => {
        tracker.startTracking();
        isTracking.value = true;
        
        // Track mount performance
        nextTick(() => {
            const mountDuration = performance.now() - tracker.mountTime;
            tracker.recordRender(mountDuration);
        });
    });
    
    onUnmounted(() => {
        tracker.stopTracking();
        isTracking.value = false;
    });
    
    const recordRender = (duration) => {
        tracker.recordRender(duration);
    };
    
    const getMetrics = () => tracker.getMetrics();
    
    const performanceScore = computed(() => tracker.getPerformanceScore());
    
    return {
        isTracking,
        recordRender,
        getMetrics,
        performanceScore,
        tracker
    };
}

/**
 * Performance Analysis Dashboard
 */
export function createPerformanceDashboard() {
    const metrics = computed(() => performanceMetrics);
    
    const recommendations = computed(() => {
        const allRecommendations = [
            ...bundleAnalyzer.getBundleRecommendations(),
            ...memoryMonitor.getMemoryRecommendations(),
            ...memoryMonitor.detectMemoryLeaks()
        ];
        
        return allRecommendations.sort((a, b) => {
            const severityOrder = { error: 3, warning: 2, info: 1 };
            return severityOrder[b.severity] - severityOrder[a.severity];
        });
    });
    
    const overallScore = computed(() => {
        const vitalsScores = vitalsTracker.getVitalsScore();
        const goodScores = Object.values(vitalsScores).filter(score => score === 'good').length;
        const totalScores = Object.keys(vitalsScores).length;
        
        return (goodScores / totalScores) * 100;
    });
    
    return {
        metrics,
        recommendations,
        overallScore,
        vitalsScores: computed(() => vitalsTracker.getVitalsScore())
    };
}

/**
 * Initialize Performance Monitoring System
 */
export function initPerformanceMonitoring(options = {}) {
    const {
        enableVitals = true,
        enableMemoryMonitoring = true,
        memoryInterval = 5000,
        enableBundleAnalysis = true
    } = options;
    
    if (enableVitals) {
        vitalsTracker.init();
    }
    
    if (enableMemoryMonitoring) {
        memoryMonitor.startMonitoring(memoryInterval);
    }
    
    // Cleanup function
    return () => {
        vitalsTracker.destroy();
        memoryMonitor.stopMonitoring();
    };
}

// Export performance monitoring tools
export {
    performanceMetrics,
    bundleAnalyzer,
    vitalsTracker,
    memoryMonitor,
    ComponentPerformanceTracker,
    BundlePerformanceAnalyzer,
    CoreWebVitalsTracker,
    MemoryPerformanceMonitor
};