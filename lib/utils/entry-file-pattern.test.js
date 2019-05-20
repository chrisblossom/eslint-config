'use strict';

const { TempSandbox } = require('temp-sandbox');

const sandbox = new TempSandbox();
const cwd = process.cwd();

beforeEach(() => {
    process.chdir(sandbox.dir);
    // Remove all files/directories inside sandbox
    sandbox.cleanSync();
});

afterAll(() => {
    // delete sandbox and sandbox instance
    sandbox.destroySandboxSync();
    process.chdir(cwd);
});

describe('entryFilePattern', () => {
    test('converts ./dist to src', () => {
        sandbox.createFileSync('package.json', {
            main: './dist/entry-file.js',
        });

        const entryFilePattern = require('./entry-file-pattern');

        expect(entryFilePattern).toEqual('src/entry-file.{js,ts}');
    });

    test('converts dist to src', () => {
        sandbox.createFileSync('package.json', { main: 'dist/entry-file.js' });

        const entryFilePattern = require('./entry-file-pattern');

        expect(entryFilePattern).toEqual('src/entry-file.{js,ts}');
    });

    test('converts nested dist to src', () => {
        sandbox.createFileSync('package.json', {
            main: 'dist/nested/entry-file.js',
        });

        const entryFilePattern = require('./entry-file-pattern');

        expect(entryFilePattern).toEqual('src/nested/entry-file.{js,ts}');
    });

    test('converts deep nested dist to src', () => {
        sandbox.createFileSync('package.json', {
            main: 'dist/nested/really/deep/entry-file.js',
        });

        const entryFilePattern = require('./entry-file-pattern');

        expect(entryFilePattern).toEqual(
            'src/nested/really/deep/entry-file.{js,ts}',
        );
    });

    test('does not convert with lib', () => {
        sandbox.createFileSync('package.json', { main: 'lib/entry-file.js' });

        const entryFilePattern = require('./entry-file-pattern');

        expect(entryFilePattern).toEqual('lib/entry-file.js');
    });

    test('does not convert with app', () => {
        sandbox.createFileSync('package.json', { main: 'app/entry-file.js' });

        const entryFilePattern = require('./entry-file-pattern');

        expect(entryFilePattern).toEqual('app/entry-file.js');
    });

    test('does not convert with app deep', () => {
        sandbox.createFileSync('package.json', {
            main: 'app/nested/inside/entry-file.js',
        });

        const entryFilePattern = require('./entry-file-pattern');

        expect(entryFilePattern).toEqual('app/nested/inside/entry-file.js');
    });

    test('changes file name', () => {
        sandbox.createFileSync('package.json', {
            main: 'app/entry-file-other.js',
        });

        const entryFilePattern = require('./entry-file-pattern');

        expect(entryFilePattern).toEqual('app/entry-file-other.js');
    });

    test('changes file name in src', () => {
        sandbox.createFileSync('package.json', {
            main: 'dist/entry-file-other.js',
        });

        const entryFilePattern = require('./entry-file-pattern');

        expect(entryFilePattern).toEqual('src/entry-file-other.{js,ts}');
    });

    test('changes build', () => {
        sandbox.createFileSync('package.json', {
            main: 'build/entry-file-other.js',
        });

        const entryFilePattern = require('./entry-file-pattern');

        expect(entryFilePattern).toEqual('src/entry-file-other.{js,ts}');
    });

    test('handles no main', () => {
        sandbox.createFileSync('package.json', {});

        const entryFilePattern = require('./entry-file-pattern');

        expect(entryFilePattern).toEqual('');
    });

    test('handles root entry file', () => {
        sandbox.createFileSync('package.json', { main: 'index.js' });

        const entryFilePattern = require('./entry-file-pattern');

        expect(entryFilePattern).toEqual('index.js');
    });
});
