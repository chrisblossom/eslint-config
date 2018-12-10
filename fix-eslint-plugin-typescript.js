/**
 * eslint-plugin-typescript is not using a version of 'requireindex'
 * that is compatible with jest.
 *
 * Temporarily fix. Remove when eslint-plugin-typescript updates
 */

'use strict';

const path = require('path');
const fs = require('fs');
const del = require('del');

const eslintPluginTypescriptPath = require.resolve('eslint-plugin-typescript');

const base = path.resolve(
    eslintPluginTypescriptPath,
    '../../node_modules/requireindex'
);

const exists = fs.existsSync(base);

if (exists === true) {
    del.sync(base);
}
