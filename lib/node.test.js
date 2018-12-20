'use strict';

const path = require('path');
const readDirDeep = require('read-dir-deep');
const Eslint = require('eslint').CLIEngine;

const sandbox = path.resolve(__dirname, '__sandbox__/node/');

const files = readDirDeep
    .sync(sandbox)
    .map((file) => path.resolve(sandbox, file))
    .filter((file) => path.parse(file).ext === '.js');

let eslint;

const cwd = process.cwd();
beforeEach(() => {
    process.chdir(sandbox);

    eslint = new Eslint({
        baseConfig: require('./node'),
        useEslintrc: false,
        ignore: false,
    });
});

afterEach(() => {
    process.chdir(cwd);
});

describe('node', () => {
    test('lints javascript files', () => {
        const result = eslint.executeOnFiles(files).results;

        expect(result).toMatchSnapshot();
    });
});
