'use strict';

require('../fix-eslint-plugin-typescript');

const path = require('path');
const readDirDeep = require('read-dir-deep');
const Eslint = require('eslint').CLIEngine;

const files = readDirDeep
    .sync(path.resolve(__dirname, '__sandbox__/typescript/'))
    .map((file) => path.resolve(__dirname, '__sandbox__/typescript/', file))
    // Filter out .js files to fix wallaby
    .filter((file) => path.parse(file).ext !== '.js');

const eslint = new Eslint({
    baseConfig: require('./typescript'),
    useEslintrc: false,
    ignore: false,
});

test('lints typescript files', () => {
    const result = eslint.executeOnFiles(files).results;

    expect(result).toMatchSnapshot();
});
