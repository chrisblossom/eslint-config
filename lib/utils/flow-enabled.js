'use strict';

const fs = require('fs');
const path = require('path');

const flowEnabled = (function checkForFlow() {
    const flowconfigFile = path.resolve(process.cwd(), '.flowconfig');
    const flowExists = fs.existsSync(flowconfigFile);

    return flowExists;
})();

module.exports = flowEnabled;
