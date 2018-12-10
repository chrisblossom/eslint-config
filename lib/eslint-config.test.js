'use strict';

const path = require('path');
const readDirDeep = require('read-dir-deep');
const Eslint = require('eslint').CLIEngine;

const files = readDirDeep
    .sync(path.resolve(__dirname, '__sandbox__/base/'))
    .map((file) => path.resolve(__dirname, '__sandbox__/base/', file));

const eslint = new Eslint({
    baseConfig: require('./eslint-config'),
    useEslintrc: false,
    ignore: false,
});

test('lints vanilla javascript files', () => {
    const result = eslint.executeOnFiles(files).results;

    expect(result).toMatchSnapshot();
});
