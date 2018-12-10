'use strict';

const path = require('path');
const readDirDeep = require('read-dir-deep');
const Eslint = require('eslint').CLIEngine;

const files = readDirDeep
    .sync(path.resolve(__dirname, '__sandbox__/flow/'))
    .map((file) => path.resolve(__dirname, '__sandbox__/flow/', file));

const eslint = new Eslint({
    baseConfig: require('./flow'),
    useEslintrc: false,
    ignore: false,
});

test('lints flow files', () => {
    const result = eslint.executeOnFiles(files).results;

    expect(result).toMatchSnapshot();
});
