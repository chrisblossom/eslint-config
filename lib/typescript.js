'use strict';

module.exports = {
    overrides: [
        {
            files: ['*.{ts,tsx}', '.*.{ts,tsx}'],
            parser: '@typescript-eslint/parser',
            plugins: ['@typescript-eslint'],
            rules: {
                '@typescript-eslint/no-unused-vars': 'error',
                '@typescript-eslint/no-namespace': 'error',
                '@typescript-eslint/class-name-casing': 'error',
                '@typescript-eslint/adjacent-overload-signatures': 'error',
                '@typescript-eslint/no-angle-bracket-type-assertion': 'error',

                /**
                 * eslint-plugin-node
                 */
                'node/no-unsupported-features/es-builtins': 'off',
                'node/no-unsupported-features/es-syntax': 'off',
                'node/no-unsupported-features/node-builtins': 'off',
            },
        },
    ],
};
