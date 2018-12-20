'use strict';

module.exports = {
    overrides: [
        {
            files: '*.{ts,tsx}',
            parser: 'typescript-eslint-parser',
            plugins: ['typescript'],
            rules: {
                'typescript/no-unused-vars': 'error',
                'typescript/no-namespace': 'error',
                'typescript/class-name-casing': 'error',
                'typescript/adjacent-overload-signatures': 'error',
                'typescript/no-angle-bracket-type-assertion': 'error',

                /**
                 * eslint-plugin-node
                 */
                'node/no-unsupported-features/es-builtins': 'off',
                'node/no-unsupported-features/es-syntax': 'off',
                'node/no-unsupported-features/node-builtins': 'off',
            },
        },
    ],

    settings: {
        'import/resolver': {
            node: {
                extensions: ['.ts', '.tsx', '.mjs', '.js', '.json'],
            },
        },
        'import/extensions': ['.ts', '.tsx', '.js', '.mjs', '.jsx'],
    },
};
