'use strict';

const path = require('path');

module.exports = {
	extends: [path.resolve(__dirname, 'base-config.js')],

	overrides: [
		{
			files: ['*.js', '.*.js'],
			parserOptions: {
				sourceType: 'script',
			},
			rules: {
				strict: ['error', 'safe'],

				/**
				 * node
				 */
				'node/no-unsupported-features/es-builtins': 'error',
				'node/no-unsupported-features/es-syntax': 'error',
				'node/no-unsupported-features/node-builtins': 'error',
				'node/no-callback-literal': 'error',

				// eslint 7 note: add deprecated rules https://github.com/mysticatea/eslint-plugin-node/releases/tag/v11.1.0
			},
		},
	],
};
