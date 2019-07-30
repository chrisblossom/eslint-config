'use strict';

const fs = require('fs');
const path = require('path');

const typescriptEnabled = (function checkForTypescript() {
	const typescriptConfigFile = path.resolve(process.cwd(), 'tsconfig.json');
	const typescriptExists = fs.existsSync(typescriptConfigFile);

	return typescriptExists;
})();

module.exports = typescriptEnabled;
