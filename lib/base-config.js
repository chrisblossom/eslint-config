'use strict';

const path = require('path');
const entryFilePattern = require('./utils/entry-file-pattern');

const baseConfig = {
    extends: [
        'airbnb-base',
        path.resolve(__dirname, 'typescript.js'),
        'plugin:node/recommended',
        'plugin:promise/recommended',
        'plugin:jest/recommended',
        'plugin:eslint-comments/recommended',
        'prettier',
    ],
    plugins: ['node', 'promise', 'jest', 'eslint-comments', 'filenames'],
    parserOptions: {
        ecmaVersion: 2019,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: false,
        },
    },
    env: {
        browser: false,
        node: true,
        jest: true,
        es6: true,
    },
    rules: {
        /**
         * Always require brackets because it is easier to extend, easier to console.log and
         * arrows are too easy to abuse
         */
        'arrow-body-style': ['error', 'always'],

        /**
         * Too restrictive
         */
        'global-require': 'off',
        'prefer-destructuring': 'off',
        'no-underscore-dangle': [
            'error',
            {
                allowAfterThis: false,
                allowAfterSuper: false,
                enforceInMethodNames: false,
                allow: ['__esModule'],
            },
        ],

        'no-restricted-syntax': [
            'error',
            {
                selector: 'ForInStatement',
                message:
                    'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
            },
            {
                selector: 'LabeledStatement',
                message:
                    'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
            },
            {
                selector: 'WithStatement',
                message:
                    '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
            },
        ],

        'lines-between-class-members': [
            'error',
            'always',
            { exceptAfterSingleLine: true },
        ],

        /**
         * node
         */
        'node/no-unsupported-features/es-builtins': 'off',
        'node/no-unsupported-features/es-syntax': 'off',
        'node/no-unsupported-features/node-builtins': 'off',
        'node/exports-style': [
            'error',
            'module.exports',
            { allowBatchAssign: false },
        ],
        'node/prefer-global/buffer': ['error', 'always'],
        'node/prefer-global/console': ['error', 'always'],
        'node/prefer-global/process': ['error', 'always'],

        // Redundant with import/no-extraneous-dependencies
        'node/no-extraneous-import': 'off',
        'node/no-extraneous-require': 'off',

        // Redundant with import/no-unresolved
        'node/no-missing-import': 'off',
        'node/no-missing-require': 'off',

        // https://github.com/mysticatea/eslint-plugin-node/issues/96
        'node/shebang': 'off',

        /**
         * Import
         */
        'import/prefer-default-export': 'off',
        'import/no-default-export': 'error',
        'import/no-dynamic-require': 'off',
        'import/no-useless-path-segments': 'error',
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                mjs: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],

        /**
         * Promise
         */
        'promise/no-promise-in-callback': 'warn',
        'promise/no-callback-in-promise': 'off',
        'promise/avoid-new': 'off',
        'promise/no-return-in-finally': 'error',

        /**
         * Jest
         */
        'jest/consistent-test-it': ['error', { fn: 'test' }],
        'jest/valid-expect-in-promise': 'error',

        /**
         * eslint comments
         */
        'eslint-comments/disable-enable-pair': [
            'error',
            { allowWholeFile: true },
        ],

        /**
         * filenames
         */
        // TODO: create .test. & .config. pattern matches
        'filenames/match-regex': [2, '^[a-z0-9-.]+$', true],
        'filenames/match-exported': ['error', 'kebab', '\\.[a-z0-9-]+$'],
        'filenames/no-index': 'error',
    },

    settings: {
        node: {
            convertPath: {
                'src/**/*.{js,jsx,ts,tsx}': [
                    '^src/(.+?)\\.(jsx?|tsx?)$',
                    'dist/$1.js',
                ],
            },
            tryExtensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.node'],
        },
    },

    overrides: [
        {
            files: '*.test.{js,ts}',
            rules: {
                'arrow-body-style': 'off',
                'promise/always-return': 'off',
                'node/no-unpublished-require': 'off',
            },
        },

        /**
         * Eslint rules for base files not compiled
         */
        {
            files: '*.js',
            excludedFiles: '*/**',
            parserOptions: {
                sourceType: 'script',
            },
            rules: {
                strict: ['error', 'safe'],
                'import/no-extraneous-dependencies': 'off',
                'node/no-unpublished-require': 'off',

                'node/no-unsupported-features/es-builtins': 'error',
                'node/no-unsupported-features/es-syntax': 'error',
                'node/no-unsupported-features/node-builtins': 'error',
            },
        },

        /**
         * Lerna overrides
         */
        {
            files: 'packages/*/*.js',
            parserOptions: {
                sourceType: 'script',
            },
            rules: {
                strict: ['error', 'safe'],
                'import/no-extraneous-dependencies': 'off',
                'node/no-unpublished-require': 'off',

                'node/no-unsupported-features/es-builtins': 'error',
                'node/no-unsupported-features/es-syntax': 'error',
                'node/no-unsupported-features/node-builtins': 'error',
            },
        },
    ],
};

if (entryFilePattern) {
    baseConfig.overrides.push({
        files: entryFilePattern,
        rules: {
            'import/prefer-default-export': 'error',
            'import/no-default-export': 'off',

            // enable when eslint-plugin-import rule is released to npm
            // 'import/no-named-export': 'error',
        },
    });
}

module.exports = baseConfig;
