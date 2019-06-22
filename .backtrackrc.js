'use strict';

module.exports = {
    presets: [['@backtrack/node', { mode: 'module', syntax: 'node' }]],

    packageJson: {
        files: ['lib/', 'node.js'],
    },

    config: {
        eslint: () => {
            return {
                extends: './node.js',
                rules: {
                    'jest/prefer-inline-snapshots': 'off',
                },
            };
        },
    },
};
