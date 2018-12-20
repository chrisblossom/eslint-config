'use strict';

module.exports = {
    extends: ['plugin:flowtype/recommended', 'prettier/flowtype'],
    plugins: ['flowtype'],

    overrides: [
        {
            files: '*.{js,jsx}',
            parser: 'babel-eslint',
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

                /**
                 * eslint-plugin-node
                 */
                'node/no-unsupported-features/es-builtins': 'off',
                'node/no-unsupported-features/es-syntax': 'off',
                'node/no-unsupported-features/node-builtins': 'off',
            },

            settings: {
                flowtype: {
                    onlyFilesWithFlowAnnotation: true,
                },
            },
        },
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
