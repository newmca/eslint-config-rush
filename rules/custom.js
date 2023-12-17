/**
 * File: packages/eslint-config/rules/custom.js
 *
 * Description:
 *   This ruleset is based on and closely follows the Airbnb JavaScript Style Guide. Rules related to
 *   code formatting were removed to account for Prettier and certain rules were modified to better
 *   fit with your preferences.
 *
 * Documentation:
 *   https://github.com/airbnb/javascript
 *
 */

//------------------------------------------------------------- Module Export --
module.exports = {
  semi: ['error', 'never'],
  camelcase: ['error', {properties: 'never', ignoreDestructuring: false}], // require camel case names
  'capitalized-comments': 'off', // enforce or disallow capitalization of the first letter of a comment
  'consistent-this': 'off', // enforces consistent naming when capturing the current execution context
  'class-methods-use-this': 'off',
  // specify the maximum length of a line in your program
  //'max-len': [ 'error', 120, 2, { ignoreUrls: true, ignoreComments: true, ignoreRegExpLiterals: true, ignoreStrings: true, ignoreTemplateLiterals: true, }, ],
  'max-len': 'off',
  'func-name-matching': 'off', // requires function names to match variable name or property to which they are assigned
  'func-names': ['error', 'as-needed'], // require function expressions to have a name
  'func-style': ['error', 'declaration', {allowArrowFunctions: true}], // enforces use of function declarations or expressions

  'id-blacklist': 'off', // blacklist certain identifiers to prevent them being used (eslint v7.4+)
  'id-denylist': 'off', // disallow specified identifiers
  'id-length': 'off', // this option enforces minimum and maximum identifier lengths (variable names, property names etc.)
  'id-match': 'off', // require identifiers to match the provided regular expression

  'lines-between-class-members': ['error', 'always', {exceptAfterSingleLine: true}], // require or disallow an empty line between class members
  'lines-around-comment': 'off', // enforces empty lines around comments
  'lines-around-directive': ['error', {before: 'always', after: 'always'}], // require or disallow newlines around directives

  'max-depth': 'off', // specify the maximum depth that blocks can be nested
  'max-lines': 'off', // specify the max number of lines in a file
  'max-lines-per-function': 'off', // enforce a maximum function length
  'max-nested-callbacks': 'off', // specify the maximum depth callbacks can be nested
  'max-params': 'off', // limits the number of parameters that can be used in the function declaration.
  'max-statements': 'off', // specify the maximum number of statement allowed in a function
  'max-statements-per-line': 'off', // restrict the number of statements per line
  'multiline-comment-style': 'off', // enforce a particular style for multiline comments
  'max-classes-per-file': 'off',

  // require a capital letter for constructors
  'new-cap': [
    'error',
    {
      newIsCap: true,
      newIsCapExceptions: [],
      capIsNew: false,
      capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
    },
  ],

  'newline-after-var': 'off', // allow/disallow an empty newline after var statement
  'newline-before-return': 'off',
  'no-array-constructor': 'error', // disallow use of the Array constructor
  'no-bitwise': 'error', // disallow use of bitwise operators
  'no-console': 'off', // disallow console.log
  'no-continue': 'error', // disallow use of the continue statement
  'no-inline-comments': 'off', // disallow comments inline after code
  'no-lonely-if': 'error', // disallow if as the only statement in an else block

  // disallow un-paren'd mixes of different operators
  'no-mixed-operators': [
    'error',
    {
      // the list of arithmetic groups disallows mixing `%` and `**` with other arithmetic operators.
      groups: [
        ['%', '**'],
        ['%', '+'],
        ['%', '-'],
        ['%', '*'],
        ['%', '/'],
        ['/', '*'],
        ['&', '|', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!=='],
        ['&&', '||'],
      ],
      allowSamePrecedence: false,
    },
  ],

  'no-multi-assign': 'error', // disallow use of chained assignment expressions
  'no-negated-condition': 'off', // disallow negated conditions
  'no-nested-ternary': 'error', // disallow nested ternary expressions
  'no-new-object': 'error', // disallow use of the Object constructor
  'no-plusplus': 'error', // disallow use of unary operators, ++ and --

  // disallow certain syntax forms
  'no-restricted-syntax': [
    'error',
    {
      selector: 'ForInStatement',
      message:
        'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
    },
    {
      selector: 'LabeledStatement',
      message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
    },
    {
      selector: 'WithStatement',
      message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
    },
    //{
    //selector: 'ForOfStatement',
    //message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
    //},
  ],

  'no-spaced-func': 'error', // disallow space between function identifier and application
  'no-tabs': 'error', // disallow tab characters entirely
  'no-ternary': 'off', // disallow the use of ternary operators

  // disallow dangling underscores in identifiers
  'no-underscore-dangle': [
    'error',
    {
      allow: [],
      allowAfterThis: false,
      allowAfterSuper: false,
      enforceInMethodNames: true,
    },
  ],

  // disallow Boolean literals in conditional expressions also, prefer `a || b` over `a ? a : b`
  'no-unneeded-ternary': ['error', {defaultAssignment: false}],
  'no-var': 'error', // disallow use of var variables

  'one-var': ['error', 'never'], // allow just one var statement per function
  'operator-assignment': ['error', 'always'], // require assignment operator shorthand where possible or prohibit it entirely

  'padding-line-between-statements': 'off', // Require or disallow padding lines between statements
  'prefer-exponentiation-operator': 'off', // disallow the use of Math.pow in favor of the ** operator
  'prefer-object-spread': 'error', // prefer use of an object spread over Object.assign

  quotes: ['error', 'single', {avoidEscape: true}], // double or single quotes should be used
  'require-jsdoc': 'off', // do not require jsdoc

  'sort-keys': ['off', 'asc', {caseSensitive: false, natural: true}], // requires object keys to be sorted
  'sort-vars': 'off', // sort variables within the same declaration block

  // require or disallow a space immediately following the // or /* in a comment
  'spaced-comment': 'off',

  'import/extensions': 'off',
}
