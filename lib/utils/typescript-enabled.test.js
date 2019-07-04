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

describe('detectTypescript', () => {
    test('detects typescript with tsconfig.json', () => {
        sandbox.createFileSync('tsconfig.json');

        const typescriptEnabled = require('./typescript-enabled');

        expect(typescriptEnabled).toEqual(true);
    });

    test('no tsconfig.json found', () => {
        const typescriptEnabled = require('./typescript-enabled');

        expect(typescriptEnabled).toEqual(false);
    });
});
