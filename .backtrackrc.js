'use strict';

module.exports = {
	presets: [
		[
			'@backtrack/node',
			{ mode: 'module', syntax: 'node' },
		],
	],

	packageJson: {
		engines: {
			node: '>=18.12.0',
		},
		files: [
			'lib/',
			'node.js',
		],
	},

	config: {
		eslint: () => {
			return {
				extends: './node.js',
				rules: {
					'jest/prefer-inline-snapshots': 'off',
				},
			};
		},
	},
};
