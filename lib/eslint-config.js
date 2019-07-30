'use strict';

const path = require('path');
const featuresEnabled = require('./utils/features-enabled');
const eslintConfig = require('./base-config');

function addPresetToExtends(pathname) {
	const currentExtends = eslintConfig.extends;
	const prettierLocation = currentExtends.indexOf('prettier');

	currentExtends.splice(prettierLocation, 0, pathname);
}

if (featuresEnabled.typescript === true) {
	addPresetToExtends(path.resolve(__dirname, 'typescript.js'));
}

if (featuresEnabled.flow === true) {
	addPresetToExtends(path.resolve(__dirname, 'flow.js'));
}

module.exports = eslintConfig;
