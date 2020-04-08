'use strict';

// extend: plugin:@typescript-eslint/recommended does not only target typescript files.
const {
	rules: typescriptPluginRecommendedRules,
} = require('@typescript-eslint/eslint-plugin/dist/configs/recommended.json');
// override prettier rules we get from typescriptPluginRecommendedRules
const {
	rules: typescriptPluginPrettierOverride,
} = require('eslint-config-prettier/@typescript-eslint');

module.exports = {
	extends: [
		'plugin:import/typescript',
		'plugin:@typescript-eslint/eslint-recommended',
	],
	overrides: [
		{
			files: ['*.{ts,tsx}', '.*.{ts,tsx}'],
			parser: '@typescript-eslint/parser',
			parserOptions: {
				sourceType: 'module',
				project: 'tsconfig.json',
			},
			plugins: ['@typescript-eslint'],
			rules: {
				...typescriptPluginRecommendedRules,
				...typescriptPluginPrettierOverride,

				'@typescript-eslint/camelcase': [
					'error',
					{ properties: 'never' },
				],

				// https://github.com/typescript-eslint/typescript-eslint/issues/600
				'spaced-comment': [
					'error',
					'always',
					{ markers: ['/ <reference'] },
				],

				'@typescript-eslint/await-thenable': 'error',
				'@typescript-eslint/ban-ts-ignore': 'off',
				'@typescript-eslint/explicit-function-return-type': [
					'error',
					{
						allowTypedFunctionExpressions: true,
					},
				],
				'@typescript-eslint/func-call-spacing': 'off',
				'@typescript-eslint/generic-type-naming': 'off',
				'@typescript-eslint/member-naming': 'off',
				'@typescript-eslint/member-ordering': [
					'error',
					// Maybe change to:
					// { default: ['field', 'constructor', 'method'] },
				],
				'@typescript-eslint/no-empty-function': 'off',
				'@typescript-eslint/no-extra-parens': 'error',
				'@typescript-eslint/no-extraneous-class': 'error',
				'@typescript-eslint/no-for-in-array': 'error',
				'@typescript-eslint/no-require-imports': 'error',
				'@typescript-eslint/no-magic-numbers': 'off',
				'@typescript-eslint/no-this-alias': 'error',
				'@typescript-eslint/no-type-alias': 'off',
				'@typescript-eslint/no-unnecessary-qualifier': 'error',
				'@typescript-eslint/no-unnecessary-type-assertion': 'error',
				'no-useless-constructor': 'off',
				'@typescript-eslint/no-useless-constructor': 'error',
				'@typescript-eslint/prefer-for-of': 'error',
				'@typescript-eslint/prefer-function-type': 'error',
				'@typescript-eslint/prefer-includes': 'error',
				'@typescript-eslint/prefer-regexp-exec': 'error',
				'@typescript-eslint/prefer-string-starts-ends-with': 'error',

				'@typescript-eslint/no-floating-promises': 'error',
				'@typescript-eslint/promise-function-async': [
					'error',
					{ allowAny: true },
				],
				'require-await': 'off',
				'@typescript-eslint/require-await': 'error',
				'@typescript-eslint/no-misused-promises': 'error',

				'@typescript-eslint/require-array-sort-compare': 'error',
				'@typescript-eslint/restrict-plus-operands': 'error',
				'@typescript-eslint/semi': 'off',
				// re-enable after:
				// https://github.com/typescript-eslint/typescript-eslint/issues/636
				'@typescript-eslint/unbound-method': 'off',
				'@typescript-eslint/unified-signatures': 'error',

				'@typescript-eslint/prefer-readonly': 'error',
				'@typescript-eslint/strict-boolean-expressions': 'error',
				'@typescript-eslint/triple-slash-reference': 'error',

				'@typescript-eslint/ban-types': [
					'error',
					{
						types: {
							Object: {
								message:
									'Use { [key: string]: unknown } instead',
								fixWith: '{ [key: string]: unknown }',
							},
						},
					},
				],

				'@typescript-eslint/consistent-type-definitions': [
					'error',
					'interface',
				],

				'@typescript-eslint/restrict-template-expressions': [
					'error',
					{},
				],

				'@typescript-eslint/no-dynamic-delete': 'error',
				'@typescript-eslint/explicit-module-boundary-types': [
					'error',
					{},
				],
				'@typescript-eslint/no-extra-non-null-assertion': 'error',
				'@typescript-eslint/prefer-nullish-coalescing': 'error',
				'@typescript-eslint/return-await': 'error',
				'@typescript-eslint/prefer-optional-chain': 'error',

				'@typescript-eslint/no-extra-semi': 'off',
				'@typescript-eslint/no-throw-literal': 'error',
				'@typescript-eslint/no-implied-eval': 'error',
				'@typescript-eslint/default-param-last': 'error',
				'@typescript-eslint/no-non-null-asserted-optional-chain':
					'error',
				'@typescript-eslint/prefer-as-const': 'error',

				'no-dupe-class-members': 'off',
				'@typescript-eslint/no-dupe-class-members': 'error',
				'@typescript-eslint/no-unnecessary-boolean-literal-compare':
					'off',
				'@typescript-eslint/switch-exhaustiveness-check': 'error',
				'@typescript-eslint/no-base-to-string': 'error',
				'@typescript-eslint/prefer-readonly-parameter-types': 'error',
				'@typescript-eslint/no-unsafe-call': 'error',
				'@typescript-eslint/no-unsafe-member-access': 'error',
				'@typescript-eslint/no-unsafe-return': 'error',
				// '@typescript-eslint/class-literal-property-style': 'error',
				'@typescript-eslint/method-signature-style': 'error',

				/**
				 * eslint-plugin-node
				 */
				'node/no-unsupported-features/es-builtins': 'off',
				'node/no-unsupported-features/es-syntax': 'off',
				'node/no-unsupported-features/node-builtins': 'off',

				/**
				 * eslint-plugin-imports
				 */
				'import/exports-last': 'off', // doesn't work well with types
				'import/group-exports': 'off', // doesn't work well with types
				'import/no-cycle': 'off', // doesn't work well with types
			},
		},
		{
			files: ['*.test.{ts,tsx}', '.*.test.{ts,tsx}'],
			rules: {
				'@typescript-eslint/ban-ts-ignore': 'off',
				'@typescript-eslint/no-var-requires': 'off',
				'@typescript-eslint/no-require-imports': 'off',
				'@typescript-eslint/explicit-function-return-type': 'off',
				'@typescript-eslint/no-explicit-any': 'off',
			},
		},
	],
};
