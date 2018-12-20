'use strict';

const fs = require('fs');
const path = require('path');

let flow = null;

function detectFlow() {
    if (flow !== null) {
        return flow;
    }

    const flowconfigFile = path.resolve(process.cwd(), '.flowconfig');
    const flowExists = fs.existsSync(flowconfigFile);

    flow = flowExists;

    return flow;
}

module.exports = detectFlow;
