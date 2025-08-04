#!/usr/bin/env node

/**
 * PrimeVue Performance Optimization Implementation Script
 * 
 * This script demonstrates how to integrate all performance optimizations
 * into a PrimeVue application for maximum performance gains.
 */

import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import { themeManager } from './packages/themes/src/optimized-theme-system.js';
import { initPerformanceMonitoring } from './packages/primevue/src/performance/index.js';

// Performance-optimized PrimeVue setup
export async function setupOptimizedPrimeVue(app, options = {}) {
    const {
        theme = 'aura',
        colorScheme = 'light',
        preloadComponents = ['button', 'input', 'dropdown', 'dialog'],
        enablePerformanceMonitoring = true,
        enableCriticalCSS = true,
        performanceOptions = {}
    } = options;

    console.log('🚀 Initializing Optimized PrimeVue...');

    // 1. Configure PrimeVue with performance optimizations
    app.use(PrimeVue, {
        theme: 'none', // We'll use our optimized theme system
        ripple: true,
        inputStyle: 'outlined',
        locale: {
            // Add locale configuration if needed
        }
    });

    // 2. Initialize optimized theme system
    console.log('🎨 Setting up optimized theme system...');
    try {
        await themeManager.init({
            theme,
            colorScheme,
            preloadComponents,
            enableCriticalCSS
        });
        console.log('✅ Theme system initialized successfully');
    } catch (error) {
        console.error('❌ Failed to initialize theme system:', error);
    }

    // 3. Setup performance monitoring
    if (enablePerformanceMonitoring) {
        console.log('📊 Initializing performance monitoring...');
        
        const performanceCleanup = initPerformanceMonitoring({
            enableVitals: true,
            enableMemoryMonitoring: true,
            enableBundleAnalysis: true,
            memoryInterval: 5000,
            ...performanceOptions
        });

        // Store cleanup function for later use
        app.config.globalProperties.$performanceCleanup = performanceCleanup;
    }

    // 4. Register optimized global components
    await registerOptimizedComponents(app, preloadComponents);

    // 5. Setup performance directives
    setupPerformanceDirectives(app);

    console.log('🎉 PrimeVue optimization setup complete!');
    
    return {
        themeManager,
        performanceCleanup: app.config.globalProperties.$performanceCleanup
    };
}

// Register commonly used components with optimizations
async function registerOptimizedComponents(app, components) {
    console.log('📦 Registering optimized components...');
    
    const componentMap = {
        button: () => import('primevue/button'),
        input: () => import('primevue/inputtext'),
        dropdown: () => import('primevue/dropdown'),
        dialog: () => import('primevue/dialog'),
        datatable: () => import('primevue/datatable'),
        calendar: () => import('primevue/calendar'),
        multiselect: () => import('primevue/multiselect'),
        toast: () => import('primevue/toast')
    };

    // Preload and register components
    for (const componentName of components) {
        try {
            const componentLoader = componentMap[componentName.toLowerCase()];
            if (componentLoader) {
                const component = await componentLoader();
                const pascalName = componentName.charAt(0).toUpperCase() + componentName.slice(1);
                app.component(pascalName, component.default || component);
                console.log(`✅ Registered ${pascalName}`);
            }
        } catch (error) {
            console.warn(`⚠️ Failed to register ${componentName}:`, error);
        }
    }
}

// Setup performance-related directives
function setupPerformanceDirectives(app) {
    // Theme loading directive
    app.directive('theme', {
        mounted(el, binding) {
            const componentName = binding.value || el.getAttribute('data-pc-name');
            if (componentName) {
                themeManager.loadComponentTheme(componentName);
            }
        }
    });

    // Performance monitoring directive
    app.directive('perf', {
        mounted(el, binding) {
            if (binding.value && typeof binding.value === 'object') {
                const { component, track = true } = binding.value;
                
                if (track && component) {
                    // Setup component performance tracking
                    const observer = new PerformanceObserver((list) => {
                        const entries = list.getEntries();
                        entries.forEach(entry => {
                            if (entry.name.includes(component)) {
                                console.log(`Performance: ${component} - ${entry.duration.toFixed(2)}ms`);
                            }
                        });
                    });
                    
                    observer.observe({ entryTypes: ['measure'] });
                    
                    // Store observer for cleanup
                    el._perfObserver = observer;
                }
            }
        },
        
        unmounted(el) {
            if (el._perfObserver) {
                el._perfObserver.disconnect();
            }
        }
    });
}

// Example Vue app with optimizations
export function createOptimizedApp() {
    const app = createApp({
        name: 'OptimizedPrimeVueApp',
        
        setup() {
            // Use optimized theme composable
            const { currentTheme, setTheme, getToken } = useOptimizedTheme();
            
            // Performance monitoring
            const { metrics, recommendations } = createPerformanceDashboard();
            
            // Component performance tracking
            const { recordRender, performanceScore } = usePerformanceMonitoring('App');
            
            return {
                currentTheme,
                setTheme,
                getToken,
                metrics,
                recommendations,
                performanceScore
            };
        },
        
        template: `
            <div class="app">
                <header>
                    <h1>Optimized PrimeVue App</h1>
                    <p>Performance Score: {{ performanceScore }}</p>
                </header>
                
                <main>
                    <!-- Components with performance directives -->
                    <Button 
                        v-theme="'button'"
                        v-perf="{ component: 'Button', track: true }"
                        label="Optimized Button"
                        @click="handleClick"
                    />
                    
                    <DataTable 
                        v-theme="'datatable'"
                        :value="data"
                        :lazy="true"
                        :loading="loading"
                    />
                </main>
                
                <!-- Performance dashboard (development only) -->
                <div v-if="isDevelopment" class="performance-dashboard">
                    <h3>Performance Metrics</h3>
                    <pre>{{ JSON.stringify(metrics, null, 2) }}</pre>
                    
                    <h3>Recommendations</h3>
                    <ul>
                        <li v-for="rec in recommendations" :key="rec.type">
                            {{ rec.message }}
                        </li>
                    </ul>
                </div>
            </div>
        `
    });

    return app;
}

// Utility functions for performance optimization
export const PerformanceUtils = {
    // Lazy load components with performance tracking
    async lazyLoadComponent(componentName, loader) {
        const startTime = performance.now();
        
        try {
            const component = await loader();
            const loadTime = performance.now() - startTime;
            
            console.log(`📦 Loaded ${componentName} in ${loadTime.toFixed(2)}ms`);
            
            // Record bundle performance
            if (window.bundleAnalyzer) {
                window.bundleAnalyzer.recordBundleLoad(
                    componentName,
                    component.size || 0,
                    loadTime
                );
            }
            
            return component;
        } catch (error) {
            console.error(`❌ Failed to load ${componentName}:`, error);
            throw error;
        }
    },

    // Preload critical components
    async preloadCriticalComponents(components) {
        console.log('⚡ Preloading critical components...');
        
        const preloadPromises = components.map(async (name) => {
            try {
                await import(`primevue/${name.toLowerCase()}`);
                console.log(`✅ Preloaded ${name}`);
            } catch (error) {
                console.warn(`⚠️ Failed to preload ${name}:`, error);
            }
        });
        
        await Promise.allSettled(preloadPromises);
        console.log('🎉 Critical components preloaded');
    },

    // Optimize component props for performance
    optimizeProps(props) {
        // Remove undefined values to reduce reactivity overhead
        const optimized = {};
        
        for (const [key, value] of Object.entries(props)) {
            if (value !== undefined && value !== null) {
                optimized[key] = value;
            }
        }
        
        return optimized;
    },

    // Batch DOM updates for better performance
    batchDOMUpdates(updates) {
        return new Promise((resolve) => {
            requestAnimationFrame(() => {
                updates.forEach(update => update());
                resolve();
            });
        });
    }
};

// Development tools for performance analysis
export const DevTools = {
    // Performance profiler
    startProfiling(name) {
        if (process.env.NODE_ENV === 'development') {
            performance.mark(`${name}-start`);
        }
    },

    endProfiling(name) {
        if (process.env.NODE_ENV === 'development') {
            performance.mark(`${name}-end`);
            performance.measure(name, `${name}-start`, `${name}-end`);
            
            const measure = performance.getEntriesByName(name)[0];
            console.log(`⏱️ ${name}: ${measure.duration.toFixed(2)}ms`);
        }
    },

    // Bundle size analyzer
    analyzeBundleSize() {
        if (typeof window !== 'undefined' && window.performance) {
            const navigation = performance.getEntriesByType('navigation')[0];
            const resources = performance.getEntriesByType('resource');
            
            console.group('📊 Bundle Analysis');
            console.log('Navigation timing:', {
                domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
                loadComplete: navigation.loadEventEnd - navigation.loadEventStart
            });
            
            console.log('Resource loading:');
            resources.forEach(resource => {
                if (resource.name.includes('primevue') || resource.name.includes('.js')) {
                    console.log(`${resource.name}: ${resource.transferSize} bytes`);
                }
            });
            console.groupEnd();
        }
    },

    // Memory usage tracker
    trackMemoryUsage() {
        if (typeof window !== 'undefined' && performance.memory) {
            const memory = performance.memory;
            console.log('💾 Memory Usage:', {
                used: `${(memory.usedJSHeapSize / 1024 / 1024).toFixed(2)} MB`,
                total: `${(memory.totalJSHeapSize / 1024 / 1024).toFixed(2)} MB`,
                limit: `${(memory.jsHeapSizeLimit / 1024 / 1024).toFixed(2)} MB`
            });
        }
    }
};

// Main initialization function
export async function initOptimizedPrimeVue(appOptions = {}) {
    console.log('🚀 Starting PrimeVue Performance Optimization...');
    
    // Create optimized Vue app
    const app = createOptimizedApp();
    
    // Setup PrimeVue with optimizations
    const { themeManager, performanceCleanup } = await setupOptimizedPrimeVue(app, appOptions);
    
    // Development tools
    if (process.env.NODE_ENV === 'development') {
        // Make dev tools available globally
        window.PrimeVueDevTools = DevTools;
        window.PerformanceUtils = PerformanceUtils;
        window.themeManager = themeManager;
        
        // Auto-analyze bundle on load
        window.addEventListener('load', () => {
            setTimeout(() => {
                DevTools.analyzeBundleSize();
                DevTools.trackMemoryUsage();
            }, 1000);
        });
    }
    
    // Cleanup function
    const cleanup = () => {
        if (performanceCleanup) {
            performanceCleanup();
        }
        
        if (themeManager) {
            themeManager.clearCache();
        }
        
        console.log('🧹 PrimeVue optimization cleanup completed');
    };
    
    return {
        app,
        themeManager,
        cleanup,
        DevTools,
        PerformanceUtils
    };
}

// Export for use in applications
export default {
    setupOptimizedPrimeVue,
    createOptimizedApp,
    initOptimizedPrimeVue,
    PerformanceUtils,
    DevTools
};

// Example usage:
/*
import { initOptimizedPrimeVue } from './optimize-primevue.js';

// Initialize optimized PrimeVue
const { app, cleanup } = await initOptimizedPrimeVue({
    theme: 'aura',
    colorScheme: 'light',
    preloadComponents: ['button', 'datatable', 'dialog'],
    enablePerformanceMonitoring: true,
    enableCriticalCSS: true
});

// Mount the app
app.mount('#app');

// Cleanup on app unmount
window.addEventListener('beforeunload', cleanup);
*/