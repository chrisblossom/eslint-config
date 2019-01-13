'use strict';

const path = require('path');
const featuresEnabled = require('./utils/features-enabled');

let eslintConfig = null;

if (eslintConfig === null) {
    eslintConfig = {
        extends: [path.resolve(__dirname, 'base-config.js')],
    };

    if (featuresEnabled.flow === true) {
        eslintConfig.extends.push(path.resolve(__dirname, 'flow.js'));
    }
}

module.exports = eslintConfig;
