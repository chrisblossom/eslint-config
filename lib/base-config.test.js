'use strict';

const path = require('path');
const { readDirDeepSync } = require('read-dir-deep');
const { ESLint } = require('eslint');

const sandbox = path.resolve(__dirname, '__sandbox__/base/');

const files = readDirDeepSync(sandbox, {
	absolute: true,
	patterns: ['**/*.{js,jsx}'],
});

let eslint;

const cwd = process.cwd();

beforeEach(() => {
	process.chdir(sandbox);

	eslint = new ESLint({
		baseConfig: require('./base-config'),
		useEslintrc: false,
		ignore: false,
	});
});

afterEach(() => {
	process.chdir(cwd);
});

describe('baseConfig', () => {
	test('lints javascript files', async () => {
		const result = await eslint.lintFiles(files);

		expect(result).toMatchSnapshot();
	});
});
