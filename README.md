# @chrisblossom/eslint-config

[![npm](https://img.shields.io/npm/v/@chrisblossom/eslint-config.svg?label=npm%20version)](https://www.npmjs.com/package/@chrisblossom/eslint-config)
[![Linux Build Status](https://img.shields.io/circleci/project/github/chrisblossom/eslint-config/master.svg?label=linux%20build)](https://circleci.com/gh/chrisblossom/eslint-config/tree/master)
[![Windows Build Status](https://img.shields.io/appveyor/ci/chrisblossom/eslint-config/master.svg?label=windows%20build)](https://ci.appveyor.com/project/chrisblossom/eslint-config/branch/master)
[![Code Coverage](https://img.shields.io/codecov/c/github/chrisblossom/eslint-config/master.svg)](https://codecov.io/gh/chrisblossom/eslint-config/branch/master)

## About

This is my personal ESLint config I've extended from [Airbnb's](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base) among other plugins. This package is intended to be used in combination with [Prettier](https://github.com/prettier/prettier) and [Jest](https://github.com/facebook/jest). Optionally supports [Typescript](https://github.com/Microsoft/TypeScript) or [Flow](https://github.com/facebook/flow).

## Usage

`npm install --save @chrisblossom/eslint-config`

```js
'use strict';

module.exports = {
    extends: ['@chrisblossom/eslint-config'],

    // typescript support
    extends: ['@chrisblossom/eslint-config/typescript'],

    // flowtype  support
    extends: ['@chrisblossom/eslint-config/flow'],
};
```
