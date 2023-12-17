/**
 * File: packages/eslint-config/rules/node.js
 *
 * Description:
 *  This file defines additional NodeJS specific ESLint rules and is a direct reference to the
 *  Airbnb JavaScript Style Guide.
 *
 * Documentation:
 *  https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/node.js
 *
 */

//------------------------------------------------------------- Module Export --
module.exports = {
  'callback-return': 'off',            // enforce return after a callback
  'global-require': 'error',           // require all requires be top-level
  'handle-callback-err': 'off',        // enforces error handling in callbacks (node environment)
  'no-buffer-constructor': 'error',    // disallow use of the Buffer() constructor
  'no-mixed-requires': ['off', false], // disallow mixing regular variable and require declarations
  'no-new-require': 'error',           // disallow use of new operator with the require function
  'no-path-concat': 'error',           // disallow string concatenation with __dirname and __filename
  'no-process-env': 'off',             // disallow use of process.env
  'no-process-exit': 'off',            // disallow process.exit()
  'no-restricted-modules': 'off',      // restrict usage of specified node modules
  'no-sync': 'off',                    // disallow use of synchronous methods (off by default)
};
