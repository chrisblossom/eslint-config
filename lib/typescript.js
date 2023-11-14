'use strict';

const fs = require('fs');
const path = require('path');

function checkForTypescriptEslintConfigFile() {
	const typescriptEslintConfigFile = path.resolve(
		process.cwd(),
		'tsconfig.eslint.json',
	);

	const typescriptEslintConfigFileExists = fs.existsSync(
		typescriptEslintConfigFile,
	);

	return typescriptEslintConfigFileExists === true
		? 'tsconfig.eslint.json'
		: 'tsconfig.json';
}

const tsConfigFilename = checkForTypescriptEslintConfigFile();

module.exports = {
	overrides: [
		{
			files: [
				'*.{ts,tsx,cts,mts}',
				'.*.{ts,tsx,cts,mts}',
			],

			// https://typescript-eslint.io/linting/configs/
			extends: [
				'plugin:import/typescript',
				'plugin:@typescript-eslint/strict-type-checked',
				'plugin:@typescript-eslint/stylistic-type-checked',
			],
			parser: '@typescript-eslint/parser',
			parserOptions: {
				sourceType: 'module',
				project: tsConfigFilename,
			},
			plugins: ['@typescript-eslint'],
			rules: {
				'@typescript-eslint/no-unnecessary-boolean-literal-compare':
					'off',
				'@typescript-eslint/strict-boolean-expressions': 'off',
				'@typescript-eslint/promise-function-async': 'error',
				'require-await': 'off',
				'@typescript-eslint/require-await': 'error',

				'@typescript-eslint/naming-convention': [
					'error',
					{
						selector: 'variable',
						format: [
							'camelCase',
							'PascalCase',
							'UPPER_CASE',
						],
					},
					{
						selector: 'function',
						format: [
							'camelCase',
							'PascalCase',
						],
					},
					{
						selector: 'typeLike',
						format: ['PascalCase'],
					},
				],

				// https://typescript-eslint.io/rules/explicit-module-boundary-types/
				'@typescript-eslint/explicit-module-boundary-types': 'error',

				// https://typescript-eslint.io/rules/explicit-function-return-type/
				'@typescript-eslint/explicit-function-return-type': 'error',

				// https://github.com/typescript-eslint/typescript-eslint/issues/600
				'spaced-comment': [
					'error',
					'always',
					{ markers: ['/ <reference'] },
				],

				/**
				 * eslint-plugin-node
				 */
				'n/no-unsupported-features/es-builtins': 'off',
				'n/no-unsupported-features/es-syntax': 'off',
				'n/no-unsupported-features/node-builtins': 'off',

				/**
				 * eslint-plugin-imports
				 */
				'import/exports-last': 'off', // doesn't work well with types
				'import/group-exports': 'off', // doesn't work well with types
				'import/no-cycle': 'off', // doesn't work well with types
			},
		},
		{
			files: [
				'*.test.{ts,tsx,cts,mts}',
				'.*.test.{ts,tsx,cts,mts}',
			],
			rules: {
				'@typescript-eslint/require-await': 'off',
				'@typescript-eslint/ban-ts-comment': 'off',
				'@typescript-eslint/no-var-requires': 'off',
				'@typescript-eslint/no-require-imports': 'off',
				'@typescript-eslint/explicit-function-return-type': 'off',
				'@typescript-eslint/no-explicit-any': 'off',
				'@typescript-eslint/no-unsafe-member-access': 'off',
				'@typescript-eslint/no-unsafe-call': 'off',
				'@typescript-eslint/no-unsafe-return': 'off',
			},
		},
	],
};
