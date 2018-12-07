'use strict';

module.exports = {
    parser: 'babel-eslint',
    extends: [
        'airbnb-base',
        'plugin:promise/recommended',
        'plugin:jest/recommended',
        'plugin:eslint-comments/recommended',
        'prettier',
    ],
    plugins: [
        'promise',
        'no-async-without-await',
        'jest',
        'eslint-comments',
        'filenames',
    ],
    env: {
        browser: false,
        node: true,
        jest: true,
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
         * Import
         */
        'import/prefer-default-export': 'off',
        'import/no-default-export': 'error',
        'import/extensions': 'off',
        'import/no-dynamic-require': 'off',
        'import/no-useless-path-segments': 'error',
        'import/no-self-import': 'error',

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
         * no async without await
         */
        'no-async-without-await/no-async-without-await': 'error',

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
        flowtype: {
            onlyFilesWithFlowAnnotation: true,
        },
    },

    overrides: [
        {
            files: '*.test.{js|ts}',
            rules: {
                'arrow-body-style': 'off',
            },
            settings: {
                flowtype: {
                    onlyFilesWithFlowAnnotation: true,
                },
            },
        },

        /**
         * Eslint rules for base files not compiled via babel.
         */
        {
            files: '*.js',
            excludedFiles: '*/**',
            parserOptions: {
                sourceType: 'script',
            },
            rules: {
                strict: ['error', 'safe'],
            },
            settings: {
                flowtype: {
                    onlyFilesWithFlowAnnotation: true,
                },
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
            },
            settings: {
                flowtype: {
                    onlyFilesWithFlowAnnotation: true,
                },
            },
        },
    ],
};
