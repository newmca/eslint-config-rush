/**
 * File: packages/eslint-config/profile/node.js
 *
 * Description:
 *   This file defines a default ESLint configuration based on the Airbnb JavaScript Style Guide
 *   to help ensure consistency across the codebase. It includes upport for JavaScript promises, Lodash and module resolution.
 *
 *   The purpose of this configuration is to serve as a base set of rules and plugins which can
 *   be extented to provide additional functionality and/or environment specific linting rules
 *   (e.g NodeJS, React etc...) when necessary and should not be modified directly. Refer to the
 *   sibling "node.js" config file which illustrates one approach to extending ESLint configurations.
 *
 *   Don't forget to install the relevant ESLint plugins defined in the "extends" property of the
 *   configuration file below to your projects' devDependencies!
 *
 * Documentation:
 *  https://eslint.org/docs/user-guide/configuring/configuration-files#extending-configuration-files
 *
 * Notes:
 *  - ES2019 syntax is fully supported for node >= 12.10.0.
 *  - ES2020 syntax is almost fully supported for node >= 14.16.1 at the time of writing this with
 *    the exception of "spread parameters after optional chaining". The AWS Lambda runtime for
 *    nodejs14.x is also currently available which opens the possibility of an application-wide
 *    node version upgrade from 12 to 14.

 */

require('@rushstack/eslint-config/patch/modern-module-resolution')
//------------------------------------------------------------- Module Export --
module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    mocha: true,
  },
  //extends: ['../plugins/lodash', '../plugins/imports'].map(require.resolve),
  parser: '@babel/eslint-parser',
  extends: ['../plugins/imports'].map(require.resolve),
  ignorePatterns: ['build/*', 'dist/*'],
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 2020, // requires node >= 14.16.1 (see notes)
    ecmaFeatures: {objectLiteralDuplicateProperties: false},
    sourceType: 'module',
  },
  rules: {
    ...require('../rules/best-practices'),
    ...require('../rules/errors'),
    ...require('../rules/variables'),
    ...require('../rules/es6'),
    ...require('../rules/node'),

    // The order of these two objects is important to ensure proper rule order (left to right)
    ...require('../rules/eslint-config-prettier'),
    ...require('../rules/custom'),
  },
}
