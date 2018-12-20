'use strict';

require('./fix-eslint-plugin-typescript');

module.exports = {
    presets: ['@backtrack/preset'],

    files: {
        skip: ['lib/files', 'lib/eslint-config.test.js'],
    },

    packageJson: {
        files: ['lib/', 'node.js'],
    },

    config: {
        jest: {
            coveragePathIgnorePatterns: [
                '__sandbox__',
                'fix-eslint-plugin-typescript.js',
            ],
        },
    },
};
