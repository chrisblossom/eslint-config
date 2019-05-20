# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased]

## [5.0.0] - 2019-05-20

-   Breaking: No longer allow default export on package entry file
-   Breaking: Drop node 6 support
-   Typescript: Add `extends: ['plugin:import/typescript']`
-   Typescript: Re-enable `import/named` [benmosher/eslint-plugin-import/pull/1304](https://github.com/benmosher/eslint-plugin-import/pull/1304)

## [4.0.9] - 2019-01-31

-   Fix: Include dot files in override patterns
-   Update packages
-   Enable `import/no-named-export`

## [4.0.7] - 2019-01-25

-   Fix wrong wrong @typescript-eslint/parser import package

## [4.0.6] - 2019-01-25

-   Update packages

## [4.0.2] - 2018-12-28

### Changed

-   Disable promise/always-return on test files

## [4.0.1] - 2018-12-27

### Changed

-   Disable node/shebang [eslint-plugin-node/issues/96](https://github.com/mysticatea/eslint-plugin-node/issues/96)

## [4.0.0] - 2018-12-19

### Added

-   @chrisblossom/eslint-config/node for vanilla node projects

### Changed

-   Removed /typescript and /flow in favor of feature detection
-   Removed eslint-plugin-no-async-without-await plugin

## [3.0.3] - 2018-12-10

### Added

-   Tests

### Changed

-   eslint-plugin-import rule updates
-   Only use typescript-eslint-parser on .ts and .tsx files
-   Move all flow settings to flow.js

### Fixed

-   Fix AirBnB preset to work with Typescript files
-   Support node 6

## [3.0.2] - 2018-12-07

### Fixed

-   arrow-body-style test file type fix

## [3.0.1] - 2018-12-07

### Fixed

-   Missing typescript and flow from npm package

## [3.0.0] - 2018-12-07

### Changed

-   Separated typescript and flow support
