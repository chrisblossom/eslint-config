'use strict';

const path = require('path');
const readPkg = require('read-pkg');
const slash = require('slash');

const outDirs = ['dist', 'build'];

function normalize(pathname) {
    return slash(path.normalize(pathname));
}

let entryFilePattern = null;
function getEntryFilePattern() {
    const packageJson = readPkg.sync({ normalize: false });

    if (!packageJson.main) {
        entryFilePattern = '';

        return;
    }

    const main = normalize(packageJson.main);

    const { dir, name } = path.parse(main);

    const [base, ...subDirs] = dir.split('/');

    if (outDirs.includes(base) === false) {
        entryFilePattern = main;

        return;
    }

    entryFilePattern = normalize(
        path.join('src', ...subDirs, `${name}.{js,ts}`),
    );
}

if (entryFilePattern === null) {
    getEntryFilePattern();
}

module.exports = entryFilePattern;
