'use strict';

module.exports = {
    parser: 'babel-eslint',
    extends: [
        'airbnb-base',
        'plugin:promise/recommended',
        'plugin:flowtype/recommended',
        'plugin:jest/recommended',
        'prettier',
        'prettier/flowtype',
    ],
    plugins: ['promise', 'no-async-without-await', 'flowtype', 'jest'],
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

        /**
         * Too strict
         */
        'import/prefer-default-export': 'off',
        'import/extensions': 'off',
        'import/no-dynamic-require': 'off',

        /**
         * Promise
         */
        'promise/no-promise-in-callback': 'warn',
        'promise/no-callback-in-promise': 'off',
        'promise/avoid-new': 'off',
        'promise/no-return-in-finally': 'error',

        /**
         * no async without await
         */
        'no-async-without-await/no-async-without-await': 'error',
    },

    settings: {
        flowtype: {
            onlyFilesWithFlowAnnotation: true,
        },
    },

    overrides: [
        {
            files: '*.test.js',
            rules: {
                'arrow-body-style': 'off',
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
        },
    ],
};
