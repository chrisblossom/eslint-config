'use strict';

const path = require('path');
const { readDirDeepSync } = require('read-dir-deep');
const Eslint = require('eslint').CLIEngine;

const sandbox = path.resolve(__dirname, '__sandbox__/flow/');

const files = readDirDeepSync(sandbox, {
	absolute: true,
	patterns: ['**/*.{js,jsx}'],
});

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

describe('flow', () => {
	test('lints flow files', () => {
		const result = eslint.executeOnFiles(files).results;

		expect(result).toMatchSnapshot();
	});
});
