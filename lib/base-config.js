'use strict';

const baseConfig = {
	extends: [
		'airbnb-base',
		'plugin:n/recommended',
		'plugin:promise/recommended',
		'plugin:jest/recommended',
		'plugin:jest-formatting/recommended',
		'plugin:@eslint-community/eslint-comments/recommended',
		'prettier',
	],
	plugins: [
		'n',
		'promise',
		'jest',
		'jest-formatting',
		'@eslint-community/eslint-comments',
		'filenames',
	],
	parserOptions: {
		ecmaVersion: 2019,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: false,
		},
	},
	env: {
		browser: false,
		node: true,
		jest: true,
		es6: true,
	},
	rules: {
		/**
		 * Always require brackets because it is easier to extend, easier to console.log and
		 * arrows are too easy to abuse
		 */
		'arrow-body-style': [
			'error',
			'always',
		],

		/**
		 * Too restrictive
		 */
		'global-require': 'off',
		'prefer-destructuring': 'off',
		'no-underscore-dangle': [
			'error',
			{
				allowAfterThis: false,
				allowAfterSuper: false,
				enforceInMethodNames: false,
				allow: ['__esModule'],
			},
		],

		'no-restricted-syntax': [
			'error',
			{
				selector: 'ForInStatement',
				message:
					'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
			},
			{
				selector: 'LabeledStatement',
				message:
					'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
			},
			{
				selector: 'WithStatement',
				message:
					'`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
			},
		],

		'lines-between-class-members': [
			'error',
			'always',
			{ exceptAfterSingleLine: true },
		],

		/**
		 * node
		 */
		// possible errors
		// Redundant with import/no-extraneous-dependencies
		'n/no-extraneous-import': 'off',
		'n/no-extraneous-require': 'off',

		// Redundant with import/no-unresolved
		'n/no-missing-import': 'off',
		'n/no-missing-require': 'off',

		// https://github.com/mysticatea/eslint-plugin-node/issues/96
		'n/shebang': 'off',

		'n/no-unsupported-features/es-builtins': 'off',
		'n/no-unsupported-features/es-syntax': 'off',
		'n/no-unsupported-features/node-builtins': 'off',

		// best practices

		// stylistic issues
		'n/exports-style': [
			'error',
			'module.exports',
			{ allowBatchAssign: false },
		],
		'n/file-extension-in-import': 'off',

		'n/prefer-global/buffer': [
			'error',
			'never',
		],
		'n/prefer-global/console': [
			'error',
			'always',
		],
		'n/prefer-global/process': [
			'error',
			'always',
		],
		'n/prefer-global/text-decoder': [
			'error',
			'never',
		],
		'n/prefer-global/text-encoder': [
			'error',
			'never',
		],
		'n/prefer-global/url-search-params': [
			'error',
			'never',
		],
		'n/prefer-global/url': [
			'error',
			'never',
		],

		'n/prefer-promises/dns': 2,
		'n/prefer-promises/fs': 2,

		/**
		 * Import
		 */
		// static analysis
		'import/no-unresolved': [
			'error',
			{ commonjs: true, caseSensitive: true },
		],
		'import/named': 'error',
		'import/namespace': 'off',
		'import/no-restricted-paths': 'off',
		'import/no-absolute-path': 'error',
		'import/no-dynamic-require': 'off',
		'import/no-internal-modules': 'off',
		'import/no-webpack-loader-syntax': 'error',
		'import/no-self-import': 'error',
		'import/no-cycle': [
			'error',
			{ maxDepth: Infinity },
		],
		'import/no-useless-path-segments': 'error',
		'import/no-relative-parent-imports': 'off',
		'import/no-unused-modules': [
			// doesn't work with common-js
			'off',
			{
				ignoreExports: [],
				missingExports: true,
				unusedExports: true,
			},
		],

		// helpful warnings
		'import/export': 'error',
		'import/no-named-as-default': 'error',
		'import/no-named-as-default-member': 'error',
		'import/no-deprecated': 'error',
		// Forbid the use of extraneous packages
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
		// paths are treated both as absolute paths, and relative to process.cwd()
		'import/no-extraneous-dependencies': [
			'error',
			{
				devDependencies: [
					'test/**', // tape, common npm pattern
					'tests/**', // also common npm pattern
					'spec/**', // mocha, rspec-like pattern
					'**/__tests__/**', // jest pattern
					'**/__mocks__/**', // jest pattern
					'test.{js,jsx,ts,tsx,mjs}', // repos with a single test file
					'test-*.{js,jsx,ts,tsx,mjs}', // repos with multiple top-level test files
					'**/*{.,_}{test,spec}.{js,jsx,ts,tsx,mjs}', // tests where the extension or filename suffix denotes that it is a test
					'**/jest.config.js', // jest config
					'**/vue.config.js', // vue-cli config
					'**/webpack.config.js', // webpack config
					'**/webpack.config.*.js', // webpack config
					'**/rollup.config.js', // rollup config
					'**/rollup.config.*.js', // rollup config
					'**/gulpfile.js', // gulp config
					'**/gulpfile.*.js', // gulp config
					'**/Gruntfile{,.js}', // grunt config
					'**/protractor.conf.js', // protractor config
					'**/protractor.conf.*.js', // protractor config
				],
				optionalDependencies: false,
			},
		],
		'import/no-mutable-exports': 'error',

		// module systems
		'import/unambiguous': 'off',
		'import/no-commonjs': 'off',
		'import/no-amd': 'error',
		'import/no-nodejs-modules': 'off',

		// style guide
		'import/first': 'error',
		'import/exports-last': 'error',
		'import/no-duplicates': 'error',
		'import/no-namespace': 'off',
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'never',
				jsx: 'never',
				ts: 'never',
				tsx: 'never',
				mjs: 'never',
				json: 'always',
			},
		],
		'import/order': [
			'error',
			{
				'newlines-between': 'never',
				// groups: [['builtin', 'external', 'internal']],
			},
		],
		'import/newline-after-import': 'error',
		'import/prefer-default-export': 'off',
		'import/max-dependencies': 'off',
		'import/no-unassigned-import': 'off',
		'import/no-named-default': 'error',
		'import/no-default-export': 'error',
		'import/no-named-export': 'off',
		'import/no-anonymous-default-export': [
			'error',
			// {
			//     allowArray: false,
			//     allowArrowFunction: false,
			//     allowAnonymousClass: false,
			//     allowAnonymousFunction: false,
			//     allowLiteral: false,
			//     allowObject: false,
			// }
		],
		'import/group-exports': 'error',
		'import/dynamic-import-chunkname': 'off',

		/**
		 * Promise
		 */
		'promise/no-native': 'off',
		'promise/no-promise-in-callback': 'warn',
		'promise/no-callback-in-promise': 'off',
		'promise/avoid-new': 'off',
		'promise/no-return-in-finally': 'error',
		'promise/prefer-await-to-then': 'error',
		'promise/prefer-await-to-callbacks': 'error',

		/**
		 * eslint comments
		 */
		'@eslint-community/eslint-comments/disable-enable-pair': [
			'error',
			{ allowWholeFile: true },
		],
		'@eslint-community/eslint-comments/no-unused-disable': 'error',

		/**
		 * filenames
		 */
		// TODO: create .test. & .config. pattern matches
		'filenames/match-regex': [
			2,
			'^[a-z0-9-.]+$',
			true,
		],
		'filenames/match-exported': [
			'error',
			'kebab',
			'\\.[a-z0-9-]+$',
		],
		'filenames/no-index': 'error',
	},

	settings: {
		node: {
			convertPath: {
				'src/**/*.{js,jsx,ts,tsx}': [
					'^src/(.+?)\\.(jsx?|tsx?)$',
					'dist/$1.js',
				],
				'src/**/.*.{js,jsx,ts,tsx}': [
					'^src/(.+?)\\.(jsx?|tsx?)$',
					'dist/$1.js',
				],
			},
			tryExtensions: [
				'.js',
				'.jsx',
				'.ts',
				'.tsx',
				'.mjs',
			],
		},
		'import/resolver': {
			node: {
				extensions: [
					'.js',
					'.jsx',
					'.ts',
					'.tsx',
					'.mjs',
					'.cjs,',
					'.json',
				],
			},
		},
		'import/extensions': [
			'.js',
			'.jsx',
			'.ts',
			'.tsx',
			'.mjs',
			'.cjs',
			'.json',
		],
	},

	overrides: [
		{
			files: [
				'*.test.{js,jsx,ts,tsx,mjs,cts}',
				'.*.test.{js,jsx,ts,tsx,mjs,cts}',
			],
			rules: {
				'arrow-body-style': 'off',
				'promise/always-return': 'off',
				'n/no-unpublished-require': 'off',
			},
		},

		/**
		 * Eslint rules for base files not compiled
		 */
		{
			files: [
				'*.{js,cjs}',
				'.*.{js,cjs}',
			],
			excludedFiles: [
				'*/**',
				'*/.**',
			],
			parserOptions: {
				sourceType: 'script',
			},
			rules: {
				strict: [
					'error',
					'safe',
				],
				'import/no-extraneous-dependencies': 'off',
				'n/no-unpublished-require': 'off',

				'n/no-unsupported-features/es-builtins': 'error',
				'n/no-unsupported-features/es-syntax': 'error',
				'n/no-unsupported-features/node-builtins': 'error',
			},
		},

		/**
		 * Lerna overrides
		 */
		{
			files: [
				'packages/*/*.{js,cjs}',
				'packages/*/.*.{js,cjs}',
			],
			parserOptions: {
				sourceType: 'script',
			},
			rules: {
				strict: [
					'error',
					'safe',
				],
				'import/no-extraneous-dependencies': 'off',
				'n/no-unpublished-require': 'off',

				'n/no-unsupported-features/es-builtins': 'error',
				'n/no-unsupported-features/es-syntax': 'error',
				'n/no-unsupported-features/node-builtins': 'error',
			},
		},
	],
};

module.exports = baseConfig;
