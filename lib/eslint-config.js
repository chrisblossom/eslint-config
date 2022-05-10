'use strict';

const featuresEnabled = require('./utils/features-enabled');
const eslintConfig = require('./base-config');

if (featuresEnabled.typescript === true) {
	const typescriptConfig = require('./typescript');
	eslintConfig.overrides = [
		...eslintConfig.overrides,
		...typescriptConfig.overrides,
	];
}

module.exports = eslintConfig;
