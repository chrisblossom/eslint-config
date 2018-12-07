'use strict';

module.exports = {
    presets: ['@backtrack/preset'],

    files: {
        skip: [
            'lib/files',
            'lib/eslint-config.test.js',
            '.circleci/config.yml',
            'appveyor.yml',
            'jest.config.js',
            'wallaby.config.js',
        ],
    },

    test: false,
    'test.ci': false,
    'test.ci-pretest': false,
    'test.update': false,
    'test.watch': false,
    prepublishOnly: [false, 'backtrack lint'],
    prepush: [false, 'backtrack lint'],

    packageJson: {
        scripts: {
            'test.update': null,
            'test.watch': null,
        },
        lib: ['lib/', 'flow.js', 'typescript.js'],
    },
};
