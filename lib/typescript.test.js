'use strict';

const path = require('path');
const { readDirDeepSync } = require('read-dir-deep');
const { ESLint } = require('eslint');

const sandbox = path.resolve(__dirname, '__sandbox__/typescript/');

const files = readDirDeepSync(sandbox, {
	absolute: true,
	patterns: ['**/*.{js,jsx,ts,tsx}'],
});

let eslint;

const cwd = process.cwd();

beforeEach(() => {
	process.chdir(sandbox);

	eslint = new ESLint({
		baseConfig: require('./eslint-config'),
		useEslintrc: false,
		ignore: false,
	});
});

afterEach(() => {
	process.chdir(cwd);
});

describe('typescript', () => {
	test('lints typescript files', async () => {
		const result = await eslint.lintFiles(files);

		expect(result).toMatchSnapshot();
	});
});
