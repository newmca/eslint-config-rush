/**
 * File: packages/eslint-config/rules/errors.js
 *
 * Description:
 *   This file is based on the Airbnb JavaScript Style Guide.
 *
 * Documentation:
 *   https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/errors.js
 *
 */

//------------------------------------------------------------- Module Export --
module.exports = {
  'for-direction': 'error', // enforce “for” loop update clause moving the counter in the right direction
  'getter-return': ['error', {allowImplicit: true}], // Enforces that a return statement is present in property getters

  'no-async-promise-executor': 'error',  // disallow using an async function as a Promise executor
  'no-await-in-loop': 'error',           // Disallow await inside of loops
  'no-compare-neg-zero': 'error',        // Disallow comparisons to negative zero
  'no-cond-assign': ['error', 'always'], // disallow assignment in conditional expressions
  'no-console': 'warn',                  // disallow use of console
  'no-constant-condition': 'warn',       // disallow use of constant expressions in conditions
  'no-control-regex': 'error',           // disallow control characters in regular expressions
  'no-debugger': 'error',                // disallow use of debugger
  'no-dupe-args': 'error',               // disallow duplicate arguments in functions
  'no-dupe-else-if': 'error',            // Disallow duplicate conditions in if-else-if chains
  'no-dupe-keys': 'error',               // disallow duplicate keys when creating object literals
  'no-duplicate-case': 'error',          // disallow a duplicate case label.
  'no-empty': 'error',                   // disallow empty statements
  'no-empty-character-class': 'error',   // disallow the use of empty character classes in regular expressions
  'no-ex-assign': 'error',               // disallow assigning to the exception in a catch block
  'no-extra-boolean-cast': 'error',      // disallow double-negation boolean casts in a boolean context

  // disallow unnecessary parentheses
  'no-extra-parens': [
    'off',
    'all',
    {
      conditionalAssign: true,
      nestedBinaryExpressions: false,
      returnAssign: false,
      ignoreJSX: 'all', // delegate to eslint-plugin-react
      enforceForArrowConditionals: false,
    },
  ],

  'no-extra-semi': 'error',                 // disallow unnecessary semicolons
  'no-func-assign': 'error',                // disallow overwriting functions written as function declarations
  'no-import-assign': 'error',              // disallow assignments to "import" namespace
  'no-inner-declarations': 'error',         // disallow function or variable declarations in nested blocks
  'no-invalid-regexp': 'error',             // disallow invalid regular expression strings in the RegExp constructor
  'no-irregular-whitespace': 'error',       // disallow irregular whitespace outside of strings and comments
  'no-loss-of-precision': 'error',          // Disallow Number Literals That Lose Precision
  'no-misleading-character-class': 'error', // Disallow characters which are made with multiple code points in character class syntax
  'no-obj-calls': 'error',                  // disallow the use of object properties of the global object (Math and JSON) as functions
  'no-promise-executor-return': 'error',    // disallow returning values from Promise executor functions
  'no-prototype-builtins': 'error',         // disallow use of Object.prototypes builtins directly
  'no-regex-spaces': 'error',               // disallow multiple spaces in a regular expression literal
  'no-setter-return': 'error',              // disallow returning values from setters
  'no-sparse-arrays': 'error',              // disallow sparse arrays
  'no-template-curly-in-string': 'error',   // Disallow template literal placeholder syntax in regular strings
  'no-unexpected-multiline': 'error',       // Avoid code that looks like two expressions but is actually one
  'no-unreachable': 'error',                // disallow unreachable statements after a return, throw, continue, or break statement

  // Disallow loops with a body that allows only one iteration
  'no-unreachable-loop': [
    'error',
    {
      ignore: [], // WhileStatement, DoWhileStatement, ForStatement, ForInStatement, ForOfStatement
    },
  ],

  'no-unsafe-finally': 'error',  // disallow return/throw/break/continue inside finally blocks
  'no-unsafe-negation': 'error', // disallow negating the left operand of relational operators

  // disallow use of optional chaining in contexts where the undefined value is not allowed
  'no-unsafe-optional-chaining': ['off', {disallowArithmeticOperators: true}],

  'no-useless-backreference': 'error', // disallow useless backreferences in regular expressions
  'no-negated-in-lhs': 'off',          // disallow negation of the left operand of an in expression (deprecated in favor of no-unsafe-negation)

  // Disallow assignments that can lead to race conditions due to usage of await or yield
  // note: not enabled because it is very buggy
  'require-atomic-updates': 'off',

  'use-isnan': 'error', // disallow comparisons with the value NaN
  'valid-jsdoc': 'off', // ensure JSDoc comments are valid

  // ensure that the results of typeof are compared against a valid string
  'valid-typeof': ['error', {requireStringLiterals: true}],
};
