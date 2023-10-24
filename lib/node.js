'use strict';

const path = require('path');

module.exports = {
	overrides: [
		{
			files: [
				'*.{js,cjs}',
				'.*.{js,cjs}',
			],
			extends: [path.resolve(__dirname, 'base-config.js')],
			parserOptions: {
				sourceType: 'script',
			},
			rules: {
				strict: [
					'error',
					'safe',
				],

				/**
				 * node
				 */
				'n/no-unsupported-features/es-builtins': 'error',
				'n/no-unsupported-features/es-syntax': 'error',
				'n/no-unsupported-features/node-builtins': 'error',
				'n/no-callback-literal': 'error',

				// eslint 7 note: add deprecated rules https://github.com/mysticatea/eslint-plugin-node/releases/tag/v11.1.0
			},
		},
	],
};
