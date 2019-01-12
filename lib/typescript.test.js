'use strict';

const path = require('path');
const readDirDeep = require('read-dir-deep');
const Eslint = require('eslint').CLIEngine;

const sandbox = path.resolve(__dirname, '__sandbox__/typescript/');

const files = readDirDeep
    .sync(sandbox)
    .map((file) => path.resolve(sandbox, file))
    .filter((file) =>
        ['.ts', '.tsx', '.js', '.jsx'].includes(path.parse(file).ext)
    );

let eslint;

const cwd = process.cwd();
beforeEach(() => {
    process.chdir(sandbox);

    eslint = new Eslint({
        baseConfig: require('./eslint-config'),
        useEslintrc: false,
        ignore: false,
    });
});

afterEach(() => {
    process.chdir(cwd);
});

describe('typescript', () => {
    test('lints typescript files', () => {
        const result = eslint.executeOnFiles(files).results;

        expect(result).toMatchSnapshot();
    });
});
