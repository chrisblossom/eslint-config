'use strict';

const path = require('path');

module.exports = {
    extends: [
        path.resolve(__dirname, 'eslint-config.js'),
        'plugin:flowtype/recommended',
        'prettier/flowtype',
    ],
    plugins: ['flowtype'],
    rules: {
        'flowtype/newline-after-flow-annotation': ['error', 'always'],
        'flowtype/require-valid-file-annotation': [
            'error',
            'always',
            {
                annotationStyle: 'block',
            },
        ],
        'flowtype/no-dupe-keys': 'error',
        // Use $ReadOnlyArray<> instead of Array<>
        'flowtype/no-mutable-array': 'error',

        // maybe too restrictive / issue-prone
        'flowtype/require-exact-type': [2, 'always'],
    },

    settings: {
        flowtype: {
            onlyFilesWithFlowAnnotation: true,
        },
    },

    overrides: [
        {
            files: '*.test.js',
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
            settings: {
                flowtype: {
                    onlyFilesWithFlowAnnotation: true,
                },
            },
        },
    ],
};
