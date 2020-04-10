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

if (featuresEnabled.flow === true) {
	const flowConfig = require('./flow');
	eslintConfig.overrides = [
		...eslintConfig.overrides,
		...flowConfig.overrides,
	];
}

module.exports = eslintConfig;
