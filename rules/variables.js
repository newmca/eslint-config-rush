/**
 * File: packages/eslint-config/rules/variables.js
 *
 * Description:
 *   This file is based on the Airbnb JavaScript Style Guide.
 *
 * Documentation:
 *   https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/variables.js
 *
 */

//------------------------------------------------------------- Module Export --
module.exports = {
  'init-declarations': 'off', // enforce or disallow variable initializations at definition
  'no-catch-shadow': 'off', // disallow the catch clause parameter name being the same as a variable in the outer scope
  'no-delete-var': 'error', // disallow deletion of variables
  'no-label-var': 'error', // disallow labels that share a name with a variable

  // disallow specific globals
  'no-restricted-globals': [
    'error',
    {
      name: 'isFinite',
      message: 'Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite',
    },
    {
      name: 'isNaN',
      message: 'Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan',
    },
  ],

  'no-shadow': 'error', // disallow declaration of variables already declared in the outer scope
  'no-shadow-restricted-names': 'error', // disallow shadowing of names such as arguments
  'no-undef': 'error', // disallow use of undeclared variables unless mentioned in a /*global */ block
  'no-undef-init': 'error', // disallow use of undefined when initializing variables
  'no-undefined': 'off', // disallow use of undefined variable

  // disallow declaration of variables that are not used in the code
  'no-unused-vars': ['error', {vars: 'all', args: 'after-used', ignoreRestSiblings: true}],

  // disallow use of variables before they are defined
  'no-use-before-define': ['error', {functions: false, classes: false, variables: true}],
}
