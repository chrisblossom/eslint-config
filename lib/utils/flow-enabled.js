'use strict';

const fs = require('fs');
const path = require('path');

let flowEnabled = null;

function checkForFlow() {
    const flowconfigFile = path.resolve(process.cwd(), '.flowconfig');
    const flowExists = fs.existsSync(flowconfigFile);

    flowEnabled = flowExists;
}

if (flowEnabled === null) {
    checkForFlow();
}

module.exports = flowEnabled;
