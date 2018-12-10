'use strict';

module.exports = {
    presets: ['@backtrack/preset'],

    files: {
        skip: ['lib/files'],
    },

    packageJson: {
        files: ['lib/', 'flow.js', 'typescript.js'],
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
