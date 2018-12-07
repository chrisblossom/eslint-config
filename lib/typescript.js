'use strict';

const path = require('path');

module.exports = {
    extends: [path.resolve(__dirname, 'eslint-config.js')],
    parser: 'typescript-eslint-parser',
    plugins: ['typescript'],
    rules: {
        'typescript/no-unused-vars': 'error',
        'typescript/no-namespace': 'error',
        'typescript/class-name-casing': 'error',
        'typescript/adjacent-overload-signatures': 'error',
        'typescript/no-angle-bracket-type-assertion': 'error',
    },
    settings: {
        'import/resolver': {
            typescript: {},
        },
    },
};
