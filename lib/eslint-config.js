'use strict';

const path = require('path');
const detectFeatures = require('./utils/detect-features');

let eslintConfig = null;

if (eslintConfig === null) {
    eslintConfig = {
        extends: [path.resolve(__dirname, 'base-config.js')],
    };

    const features = detectFeatures();

    if (features.flow === true) {
        eslintConfig.extends.push(path.resolve(__dirname, 'flow.js'));
    }
}

module.exports = eslintConfig;
