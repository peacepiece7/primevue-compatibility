import alias from '@rollup/plugin-alias';
import { babel } from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import postcss from 'rollup-plugin-postcss';
import vue from 'rollup-plugin-vue';
import { visualizer } from 'rollup-plugin-visualizer';
import { createRequire } from 'module';

import fs from 'fs-extra';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);

// Performance-optimized globals
const GLOBALS = {
    vue: 'Vue'
};

// Optimized externals for better tree-shaking
const GLOBAL_EXTERNALS = ['vue', 'chart.js/auto', 'quill'];
const INLINE_EXTERNALS = [
    /@primevue\/core\/.*/,
    /@primevue\/icons\/.*/,
    '@primeuix/styled',
    /@primeuix\/utils\/.*/
];
const EXTERNALS = [...GLOBAL_EXTERNALS, ...INLINE_EXTERNALS];

// Enhanced alias configuration for better module resolution
const ALIAS_ENTRIES = [
    {
        find: /^primevue\/(.*)$/,
        replacement: path.resolve(__dirname, './src/$1'),
        customResolver(source, importer) {
            const basedir = path.dirname(importer);
            const folderPath = path.resolve(basedir, source);
            const folderName = path.basename(folderPath);

            const fName = folderName === 'style' ? `${path.basename(path.dirname(folderPath))}Style` : folderName;
            const files = fs.readdirSync(folderPath);
            const targetFile = files.find((file) => {
                const ext = path.extname(file);
                return ['.vue', '.js'].includes(ext) && path.basename(file, ext).toLowerCase() === fName.toLowerCase();
            });

            return targetFile ? path.join(folderPath, targetFile) : null;
        }
    },
    // Core package aliases
    { find: '@primevue/core/api', replacement: path.resolve(__dirname, '../core/src/api/Api.js') },
    { find: '@primevue/core/base/style', replacement: path.resolve(__dirname, '../core/src/base/style/BaseStyle.js') },
    { find: '@primevue/core/base', replacement: path.resolve(__dirname, '../core/src/base/Base.js') },
    { find: '@primevue/core/basecomponent/style', replacement: path.resolve(__dirname, '../core/src/basecomponent/style/BaseComponentStyle.js') },
    { find: '@primevue/core/basecomponent', replacement: path.resolve(__dirname, '../core/src/basecomponent/BaseComponent.vue') }
];

// Performance-optimized Babel configuration
const BABEL_CONFIG = {
    babelHelpers: 'runtime',
    exclude: '**/node_modules/**',
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
    presets: [
        [
            '@babel/preset-env',
            {
                modules: false,
                targets: {
                    browsers: ['> 1%', 'last 2 versions', 'not dead']
                },
                useBuiltIns: 'usage',
                corejs: 3
            }
        ]
    ],
    plugins: [
        '@babel/plugin-transform-runtime',
        // Vue-specific optimizations
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        ['@babel/plugin-proposal-class-properties', { loose: true }]
    ]
};

// Enhanced PostCSS configuration for better CSS optimization
const POSTCSS_CONFIG = {
    plugins: [
        require('autoprefixer')({
            overrideBrowserslist: ['> 1%', 'last 2 versions', 'not dead']
        }),
        require('cssnano')({
            preset: ['advanced', {
                discardComments: { removeAll: true },
                reduceIdents: false,
                zindex: false
            }]
        })
    ],
    extract: true,
    minimize: true,
    sourceMap: false
};

// Optimized Vue plugin configuration
const VUE_CONFIG = {
    target: 'browser',
    preprocessStyles: true,
    optimizeSSR: false,
    template: {
        optimizeSSR: false,
        isProduction: true,
        compilerOptions: {
            // Vue 3 compiler optimizations
            hoistStatic: true,
            cacheHandlers: true,
            prefixIdentifiers: true
        }
    }
};

// Enhanced Terser configuration for better minification
const TERSER_CONFIG = {
    ecma: 2020,
    parse: {
        ecma: 2020
    },
    compress: {
        ecma: 2020,
        warnings: false,
        drop_console: true,
        drop_debugger: true,
        pure_getters: true,
        unsafe_comps: true,
        unsafe_Function: true,
        unsafe_math: true,
        unsafe_symbols: true,
        unsafe_methods: true,
        unsafe_proto: true,
        unsafe_regexp: true,
        unsafe_undefined: true,
        passes: 2
    },
    mangle: {
        safari10: true,
        properties: {
            regex: /^_/
        }
    },
    format: {
        ecma: 2020,
        safari10: true
    }
};

// Component-specific build optimization
function createComponentConfig(componentName) {
    return {
        input: `src/${componentName}/${componentName}.vue`,
        external: EXTERNALS,
        output: [
            {
                file: `dist/${componentName}/index.mjs`,
                format: 'es',
                sourcemap: false,
                exports: 'named'
            },
            {
                file: `dist/${componentName}/index.cjs`,
                format: 'cjs',
                sourcemap: false,
                exports: 'named'
            }
        ],
        plugins: [
            alias({ entries: ALIAS_ENTRIES }),
            resolve({
                extensions: ['.vue', '.js', '.ts'],
                preferBuiltins: false
            }),
            vue(VUE_CONFIG),
            babel(BABEL_CONFIG),
            postcss(POSTCSS_CONFIG),
            terser(TERSER_CONFIG)
        ]
    };
}

// Main library build configuration
const MAIN_CONFIG = {
    input: 'src/index.js',
    external: EXTERNALS,
    output: [
        {
            file: 'dist/index.mjs',
            format: 'es',
            sourcemap: false,
            exports: 'named'
        },
        {
            file: 'dist/index.cjs',
            format: 'cjs',
            sourcemap: false,
            exports: 'named'
        },
        {
            file: 'umd/primevue.min.js',
            format: 'umd',
            name: 'PrimeVue',
            globals: GLOBALS,
            sourcemap: false
        }
    ],
    plugins: [
        alias({ entries: ALIAS_ENTRIES }),
        resolve({
            extensions: ['.vue', '.js', '.ts'],
            preferBuiltins: false
        }),
        vue(VUE_CONFIG),
        babel(BABEL_CONFIG),
        postcss(POSTCSS_CONFIG),
        terser(TERSER_CONFIG),
        // Bundle analyzer for optimization insights
        visualizer({
            filename: 'dist/bundle-analysis.html',
            open: false,
            gzipSize: true,
            brotliSize: true
        })
    ]
};

// Performance monitoring configuration
const PERFORMANCE_CONFIG = {
    input: 'src/performance/index.js',
    output: {
        file: 'dist/performance.mjs',
        format: 'es'
    },
    plugins: [
        resolve(),
        babel(BABEL_CONFIG),
        terser(TERSER_CONFIG)
    ]
};

// Get all component directories for individual builds
function getComponentConfigs() {
    const srcDir = path.resolve(__dirname, 'src');
    const components = fs.readdirSync(srcDir)
        .filter(dir => {
            const dirPath = path.join(srcDir, dir);
            return fs.statSync(dirPath).isDirectory() && 
                   fs.existsSync(path.join(dirPath, `${dir}.vue`));
        });

    return components.map(createComponentConfig);
}

// Export optimized configurations
export default [
    MAIN_CONFIG,
    ...getComponentConfigs(),
    PERFORMANCE_CONFIG
];

// Development-specific optimizations
if (process.env.NODE_ENV === 'development') {
    // Add development-specific plugins
    MAIN_CONFIG.plugins.push(
        // Development bundle analyzer
        visualizer({
            filename: 'dist/dev-bundle-analysis.html',
            open: true
        })
    );
}

// Production-specific optimizations
if (process.env.NODE_ENV === 'production') {
    // Additional production optimizations
    MAIN_CONFIG.plugins.push(
        // Production-specific plugins can be added here
    );
}