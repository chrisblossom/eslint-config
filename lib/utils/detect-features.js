'use strict';

const detectFlow = require('./detect-flow');

let features = null;

function detectFeatures() {
    if (features !== null) {
        return features;
    }

    const flow = detectFlow();

    features = {
        flow,
        // typescript,
        // babel: false,
        // react: false,
    };

    return features;
}

module.exports = detectFeatures;
