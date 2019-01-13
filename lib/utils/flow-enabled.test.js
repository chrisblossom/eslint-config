'use strict';

const TempSandbox = require('temp-sandbox');

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

        const flowEnabled = require('./flow-enabled');

        expect(flowEnabled).toEqual(true);
    });

    test('no .flowconfig found', () => {
        const flowEnabled = require('./flow-enabled');

        expect(flowEnabled).toEqual(false);
    });
});
