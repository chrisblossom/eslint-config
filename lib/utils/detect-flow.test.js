'use strict';

const TempSandbox = require('temp-sandbox');

const detectFlow = () => require('./detect-flow')();

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

describe('detectFlow', () => {
    test('detects flow with .flowconfig', () => {
        sandbox.createFileSync('.flowconfig');

        const result = detectFlow();

        expect(result).toEqual(true);
    });

    test('no .flowconfig found', () => {
        const result = detectFlow();

        expect(result).toEqual(false);
    });
});
