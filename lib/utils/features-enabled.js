'use strict';

const flowEnabled = require('./flow-enabled');
const typescriptEnabled = require('./typescript-enabled');

const featuresEnabled = {
	flow: flowEnabled,
	typescript: typescriptEnabled,
};

module.exports = featuresEnabled;
