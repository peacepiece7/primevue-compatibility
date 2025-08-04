/**
 * Optimized PrimeVue Theme System
 * 
 * Features:
 * - Lazy loading of theme tokens
 * - Efficient CSS custom property management
 * - Minimal runtime overhead
 * - Tree-shakable design tokens
 * - Critical CSS extraction
 */

import { reactive, computed, shallowRef, triggerRef } from 'vue';

// Theme cache for performance optimization
const themeCache = new Map();
const criticalTokens = new Set();
const loadedThemes = new Set();

// Performance-optimized theme state
const themeState = reactive({
    currentTheme: 'aura',
    colorScheme: 'light',
    tokens: new Map(),
    criticalLoaded: false,
    componentsLoaded: new Set()
});

/**
 * Optimized CSS Custom Property Manager
 * Reduces DOM manipulation and improves performance
 */
class CSSPropertyManager {
    constructor() {
        this.styleElement = null;
        this.propertyMap = new Map();
        this.pendingUpdates = new Map();
        this.updateScheduled = false;
    }

    init() {
        if (typeof document === 'undefined') return;
        
        this.styleElement = document.createElement('style');
        this.styleElement.id = 'primevue-theme-vars';
        this.styleElement.type = 'text/css';
        document.head.appendChild(this.styleElement);
    }

    setProperty(name, value, scope = ':root') {
        const key = `${scope}::${name}`;
        
        if (this.propertyMap.get(key) === value) return;
        
        this.propertyMap.set(key, value);
        this.pendingUpdates.set(key, { name, value, scope });
        
        this.scheduleUpdate();
    }

    setProperties(properties, scope = ':root') {
        let hasChanges = false;
        
        for (const [name, value] of Object.entries(properties)) {
            const key = `${scope}::${name}`;
            
            if (this.propertyMap.get(key) !== value) {
                this.propertyMap.set(key, value);
                this.pendingUpdates.set(key, { name, value, scope });
                hasChanges = true;
            }
        }
        
        if (hasChanges) {
            this.scheduleUpdate();
        }
    }

    scheduleUpdate() {
        if (this.updateScheduled) return;
        
        this.updateScheduled = true;
        
        // Use RAF for better performance
        requestAnimationFrame(() => {
            this.flushUpdates();
            this.updateScheduled = false;
        });
    }

    flushUpdates() {
        if (!this.styleElement || this.pendingUpdates.size === 0) return;
        
        const scopeGroups = new Map();
        
        // Group updates by scope for better CSS generation
        for (const { name, value, scope } of this.pendingUpdates.values()) {
            if (!scopeGroups.has(scope)) {
                scopeGroups.set(scope, []);
            }
            scopeGroups.get(scope).push(`${name}: ${value}`);
        }
        
        // Generate optimized CSS
        const cssRules = [];
        for (const [scope, properties] of scopeGroups) {
            cssRules.push(`${scope} { ${properties.join('; ')}; }`);
        }
        
        this.styleElement.textContent = cssRules.join('\n');
        this.pendingUpdates.clear();
    }

    removeProperty(name, scope = ':root') {
        const key = `${scope}::${name}`;
        this.propertyMap.delete(key);
        this.scheduleUpdate();
    }

    clear() {
        this.propertyMap.clear();
        this.pendingUpdates.clear();
        if (this.styleElement) {
            this.styleElement.textContent = '';
        }
    }
}

// Global CSS property manager instance
const cssManager = new CSSPropertyManager();

/**
 * Optimized Theme Token Loader
 * Implements lazy loading and caching strategies
 */
class ThemeTokenLoader {
    constructor() {
        this.loadingPromises = new Map();
        this.componentTokens = new Map();
    }

    async loadCriticalTokens(theme = 'aura') {
        const cacheKey = `critical-${theme}`;
        
        if (themeCache.has(cacheKey)) {
            return themeCache.get(cacheKey);
        }

        try {
            // Load only critical design tokens
            const criticalTokens = await this.loadTokens(theme, 'critical');
            themeCache.set(cacheKey, criticalTokens);
            return criticalTokens;
        } catch (error) {
            console.warn(`Failed to load critical tokens for theme ${theme}:`, error);
            return {};
        }
    }

    async loadComponentTokens(theme, componentName) {
        const cacheKey = `${theme}-${componentName}`;
        
        if (themeCache.has(cacheKey)) {
            return themeCache.get(cacheKey);
        }

        if (this.loadingPromises.has(cacheKey)) {
            return this.loadingPromises.get(cacheKey);
        }

        const loadingPromise = this.loadTokens(theme, componentName);
        this.loadingPromises.set(cacheKey, loadingPromise);

        try {
            const tokens = await loadingPromise;
            themeCache.set(cacheKey, tokens);
            this.loadingPromises.delete(cacheKey);
            return tokens;
        } catch (error) {
            this.loadingPromises.delete(cacheKey);
            console.warn(`Failed to load tokens for ${componentName} in theme ${theme}:`, error);
            return {};
        }
    }

    async loadTokens(theme, type) {
        // Dynamic import for better tree-shaking
        try {
            if (type === 'critical') {
                const module = await import(`./presets/${theme}/critical.js`);
                return module.default || module;
            } else {
                const module = await import(`./presets/${theme}/${type}/index.js`);
                return module.default || module;
            }
        } catch (error) {
            // Fallback to base tokens if specific tokens not found
            if (type !== 'critical') {
                const baseModule = await import(`./presets/${theme}/base.js`);
                return baseModule.default || baseModule;
            }
            throw error;
        }
    }

    preloadComponentTokens(theme, componentNames) {
        // Preload tokens for commonly used components
        const preloadPromises = componentNames.map(name => 
            this.loadComponentTokens(theme, name)
        );
        
        return Promise.allSettled(preloadPromises);
    }
}

const tokenLoader = new ThemeTokenLoader();

/**
 * Optimized Theme Manager
 * Main interface for theme operations
 */
export class OptimizedThemeManager {
    constructor() {
        this.initialized = false;
        this.observers = new Set();
    }

    async init(options = {}) {
        if (this.initialized) return;

        const {
            theme = 'aura',
            colorScheme = 'light',
            preloadComponents = ['button', 'input', 'dropdown'],
            enableCriticalCSS = true
        } = options;

        // Initialize CSS manager
        cssManager.init();

        // Load critical tokens first
        if (enableCriticalCSS) {
            await this.loadCriticalTokens(theme);
        }

        // Set initial theme
        await this.setTheme(theme, colorScheme);

        // Preload common component tokens
        if (preloadComponents.length > 0) {
            tokenLoader.preloadComponentTokens(theme, preloadComponents);
        }

        this.initialized = true;
    }

    async loadCriticalTokens(theme) {
        const tokens = await tokenLoader.loadCriticalTokens(theme);
        this.applyTokens(tokens, ':root');
        themeState.criticalLoaded = true;
    }

    async setTheme(theme, colorScheme = themeState.colorScheme) {
        if (themeState.currentTheme === theme && themeState.colorScheme === colorScheme) {
            return;
        }

        const previousTheme = themeState.currentTheme;
        
        try {
            // Load base theme tokens
            const baseTokens = await tokenLoader.loadTokens(theme, 'base');
            const schemeTokens = await tokenLoader.loadTokens(theme, colorScheme);
            
            // Merge tokens efficiently
            const mergedTokens = { ...baseTokens, ...schemeTokens };
            
            // Apply tokens with optimized CSS property updates
            this.applyTokens(mergedTokens);
            
            // Update state
            themeState.currentTheme = theme;
            themeState.colorScheme = colorScheme;
            themeState.tokens.set(theme, mergedTokens);
            
            // Notify observers
            this.notifyObservers({ theme, colorScheme, previousTheme });
            
        } catch (error) {
            console.error(`Failed to set theme ${theme}:`, error);
            throw error;
        }
    }

    async loadComponentTheme(componentName, theme = themeState.currentTheme) {
        if (themeState.componentsLoaded.has(`${theme}-${componentName}`)) {
            return;
        }

        try {
            const tokens = await tokenLoader.loadComponentTokens(theme, componentName);
            
            // Apply component-specific tokens with scoped CSS
            const scope = `[data-pc-name="${componentName}"]`;
            this.applyTokens(tokens, scope);
            
            themeState.componentsLoaded.add(`${theme}-${componentName}`);
            
        } catch (error) {
            console.warn(`Failed to load component theme for ${componentName}:`, error);
        }
    }

    applyTokens(tokens, scope = ':root') {
        const cssProperties = {};
        
        // Convert design tokens to CSS custom properties
        for (const [key, value] of Object.entries(tokens)) {
            const cssVarName = `--${key.replace(/\./g, '-')}`;
            cssProperties[cssVarName] = value;
        }
        
        // Batch update CSS properties
        cssManager.setProperties(cssProperties, scope);
    }

    getToken(path, fallback = null) {
        const currentTokens = themeState.tokens.get(themeState.currentTheme);
        if (!currentTokens) return fallback;
        
        return this.getNestedValue(currentTokens, path) || fallback;
    }

    getNestedValue(obj, path) {
        return path.split('.').reduce((current, key) => current?.[key], obj);
    }

    subscribe(callback) {
        this.observers.add(callback);
        return () => this.observers.delete(callback);
    }

    notifyObservers(data) {
        this.observers.forEach(callback => {
            try {
                callback(data);
            } catch (error) {
                console.error('Theme observer error:', error);
            }
        });
    }

    // Performance utilities
    preloadTheme(theme) {
        return tokenLoader.loadTokens(theme, 'base');
    }

    clearCache() {
        themeCache.clear();
        loadedThemes.clear();
        themeState.componentsLoaded.clear();
    }

    getPerformanceMetrics() {
        return {
            cacheSize: themeCache.size,
            loadedThemes: Array.from(loadedThemes),
            loadedComponents: Array.from(themeState.componentsLoaded),
            criticalLoaded: themeState.criticalLoaded
        };
    }
}

// Global theme manager instance
export const themeManager = new OptimizedThemeManager();

// Vue composable for theme management
export function useOptimizedTheme() {
    const currentTheme = computed(() => themeState.currentTheme);
    const colorScheme = computed(() => themeState.colorScheme);
    const isReady = computed(() => themeState.criticalLoaded);

    const setTheme = (theme, scheme) => themeManager.setTheme(theme, scheme);
    const getToken = (path, fallback) => themeManager.getToken(path, fallback);
    const loadComponentTheme = (component) => themeManager.loadComponentTheme(component);

    return {
        currentTheme,
        colorScheme,
        isReady,
        setTheme,
        getToken,
        loadComponentTheme
    };
}

// Vue directive for component-specific theme loading
export const vTheme = {
    mounted(el, binding) {
        const componentName = binding.value || el.getAttribute('data-pc-name');
        if (componentName) {
            themeManager.loadComponentTheme(componentName);
        }
    }
};

// Critical CSS extraction utility
export function extractCriticalCSS(components = []) {
    const criticalTokens = new Set();
    
    // Add base critical tokens
    criticalTokens.add('color.primary');
    criticalTokens.add('color.surface');
    criticalTokens.add('font.family');
    criticalTokens.add('font.size.base');
    
    // Add component-specific critical tokens
    components.forEach(component => {
        const componentCritical = getCriticalTokensForComponent(component);
        componentCritical.forEach(token => criticalTokens.add(token));
    });
    
    return Array.from(criticalTokens);
}

function getCriticalTokensForComponent(component) {
    const criticalMap = {
        button: ['color.primary', 'border.radius', 'spacing.sm'],
        input: ['color.surface', 'border.color', 'border.radius'],
        dropdown: ['color.surface', 'shadow.md', 'border.radius']
    };
    
    return criticalMap[component] || [];
}

// Performance monitoring
export function createPerformanceMonitor() {
    const metrics = shallowRef({
        themeLoadTime: 0,
        tokenCount: 0,
        cssUpdateCount: 0,
        cacheHitRate: 0
    });

    let startTime = 0;
    let totalRequests = 0;
    let cacheHits = 0;

    const startMeasurement = () => {
        startTime = performance.now();
    };

    const endMeasurement = (type) => {
        const duration = performance.now() - startTime;
        
        if (type === 'theme') {
            metrics.value.themeLoadTime = duration;
        }
        
        triggerRef(metrics);
    };

    const recordCacheAccess = (hit) => {
        totalRequests++;
        if (hit) cacheHits++;
        
        metrics.value.cacheHitRate = totalRequests > 0 ? (cacheHits / totalRequests) * 100 : 0;
        triggerRef(metrics);
    };

    return {
        metrics,
        startMeasurement,
        endMeasurement,
        recordCacheAccess
    };
}

// Export default theme manager
export default themeManager;