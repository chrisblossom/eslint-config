'use strict';

const flowEnabled = require('./flow-enabled');

let featuresEnabled = null;

function detectFeatures() {
    featuresEnabled = {
        flow: flowEnabled,
    };
}

if (featuresEnabled === null) {
    detectFeatures();
}

module.exports = featuresEnabled;
