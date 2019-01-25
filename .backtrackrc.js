'use strict';

module.exports = {
    presets: ['@backtrack/node-module'],

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

        eslint: () => {
            return {
                extends: './node.js',
            };
        },
    },
};
