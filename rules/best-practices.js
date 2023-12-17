/**
 * File: packages/eslint-config/rules/best-practices.js
 *
 * Description:
 *   This file is based on the Airbnb JavaScript Style Guide.
 *
 * Documentation:
 *   https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/best-practices.js
 *
 */

//------------------------------------------------------------- Module Export --
module.exports = {
  'accessor-pairs': 'off', // enforces getter/setter pairs in objects
  'array-callback-return': ['error', {allowImplicit: true}], // enforces return statements in callbacks of array's methods
  'block-scoped-var': 'error', // treat var statements as if they were block scoped
  complexity: ['off', 20], // specify the maximum cyclomatic complexity allowed in a program
  'class-methods-use-this': ['error', {exceptMethods: []}], // enforce that class methods use "this"
  'consistent-return': 'error', // require return statements to either always or never specify values
  curly: ['error', 'multi-line'], // specify curly brace conventions for all control statements (multiline)
  'default-case': ['error', {commentPattern: '^no default$'}], // require default case in switch statements
  'default-case-last': 'off', // Enforce default clauses in switch statements to be last TODO: enable, semver-minor, when eslint v7 is required (which is a major)
  'default-param-last': 'off', // TODO: enable, semver-minor, when eslint v6.4 is required (which is a major)
  'dot-notation': ['error', {allowKeywords: true}], // encourages use of dot notation whenever possible
  'dot-location': ['error', 'property'], // enforces consistent newlines before or after dots
  eqeqeq: ['error', 'always', {null: 'ignore'}], // require the use of === and !==
  'grouped-accessor-pairs': 'off', // Require grouped accessor pairs in object literals and classes TODO: enable in next major, altho the guide forbids getters/setters anyways
  'guard-for-in': 'error', // make sure for-in loops have an if statement
  'max-classes-per-file': ['error', 1], // enforce a maximum number of classes per file
  'no-alert': 'warn', // disallow the use of alert, confirm, and prompt
  'no-caller': 'error', // disallow use of arguments.caller or arguments.callee
  'no-case-declarations': 'error', // disallow lexical declarations in case/default clauses
  'no-constructor-return': 'off', // Disallow returning value in constructor TODO: enable, semver-major
  'no-div-regex': 'off', // disallow division operators explicitly at beginning of regular expression
  'no-else-return': ['error', {allowElseIf: false}], // disallow else after a return in an if

  // disallow empty functions, except for standalone funcs/arrows
  'no-empty-function': ['error', {allow: ['arrowFunctions', 'functions', 'methods']}],
  'no-empty-pattern': 'error', // disallow empty destructuring patterns
  'no-eq-null': 'off', // disallow comparisons to null without a type-checking operator
  'no-eval': 'error', // disallow use of eval()
  'no-extend-native': 'error', // disallow adding to native types
  'no-extra-bind': 'error', // disallow unnecessary function binding
  'no-extra-label': 'error', // disallow Unnecessary Labels
  'no-fallthrough': 'error', // disallow fallthrough of case statements
  'no-floating-decimal': 'error', // disallow the use of leading or trailing decimal points in numeric literals
  'no-global-assign': ['error', {exceptions: []}], // disallow reassignments of native objects or read-only globals (https://eslint.org/docs/rules/no-global-assign)
  'no-native-reassign': 'off', // deprecated in favor of no-global-assign

  // disallow implicit type conversions
  'no-implicit-coercion': [
    'error',
    {
      boolean: false,
      number: true,
      string: true,
      allow: [],
    },
  ],
  'no-implicit-globals': 'off', // disallow var and named functions in global scope (https://eslint.org/docs/rules/no-implicit-globals)
  'no-implied-eval': 'error', // disallow use of eval()-like methods
  'no-invalid-this': 'off', // disallow this keywords outside of classes or class-like objects
  'no-iterator': 'error', // disallow usage of __iterator__ property
  'no-labels': ['error', {allowLoop: false, allowSwitch: false}], // disallow use of labels for anything other than loops and switches
  'no-lone-blocks': 'error', // disallow unnecessary nested blocks
  'no-loop-func': 'error', // disallow creation of functions within loops

  // disallow magic numbers (https://eslint.org/docs/rules/no-magic-numbers)
  'no-magic-numbers': [
    'off',
    {
      ignore: [],
      ignoreArrayIndexes: true,
      enforceConst: true,
      detectObjects: false,
    },
  ],

  'no-multi-spaces': ['error', {ignoreEOLComments: false}], // disallow use of multiple spaces
  'no-multi-str': 'error', // disallow use of multiline strings
  'no-new': 'error', // disallow use of new operator when not part of the assignment or comparison
  'no-new-func': 'error', // disallow use of new operator for Function object
  'no-new-wrappers': 'error', // disallows creating new instances of String, Number, and Boolean
  'no-nonoctal-decimal-escape': 'off', // Disallow \8 and \9 escape sequences in string literals
  'no-octal': 'error', // disallow use of (old style) octal literals
  'no-octal-escape': 'error', // disallow use of octal escape sequences in string literals, such as "var foo = 'Copyright \251';"

  // disallow reassignment of function parameters and parameter object manipulation except for specific exclusions
  'no-param-reassign': [
    'error',
    {
      props: true,
      ignorePropertyModificationsFor: [
        'acc', // for reduce accumulators
        'accumulator', // for reduce accumulators
        'e', // for e.returnvalue
        'ctx', // for Koa routing
        'context', // for Koa routing
        'req', // for Express requests
        'request', // for Express requests
        'res', // for Express responses
        'response', // for Express responses
        '$scope', // for Angular 1 scopes
        'staticContext', // for ReactRouter context
      ],
    },
  ],

  'no-proto': 'error', // disallow usage of __proto__ property
  'no-redeclare': 'error', // disallow declaring the same variable more than once

  // disallow certain object properties
  'no-restricted-properties': [
    'error',
    {
      object: 'arguments',
      property: 'callee',
      message: 'arguments.callee is deprecated',
    },
    {
      object: 'global',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    },
    {
      object: 'self',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    },
    {
      object: 'window',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    },
    {
      object: 'global',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    },
    {
      object: 'self',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    },
    {
      object: 'window',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    },
    {
      property: '__defineGetter__',
      message: 'Please use Object.defineProperty instead.',
    },
    {
      property: '__defineSetter__',
      message: 'Please use Object.defineProperty instead.',
    },
    {
      object: 'Math',
      property: 'pow',
      message: 'Use the exponentiation operator (**) instead.',
    },
  ],

  'no-return-assign': ['error', 'always'], // disallow use of assignment in return statement
  'no-return-await': 'error', // disallow redundant `return await`
  'no-script-url': 'error', // disallow use of `javascript:` urls.
  'no-self-assign': ['error', {props: true}], // disallow self assignment
  'no-self-compare': 'error', // disallow comparisons where both sides are exactly the same
  'no-sequences': 'error', // disallow use of comma operator
  'no-throw-literal': 'error', // restrict what can be thrown as an exception
  'no-unmodified-loop-condition': 'off', // disallow unmodified conditions of loops

  // disallow usage of expressions in statement position
  'no-unused-expressions': [
    'error',
    {
      allowShortCircuit: false,
      allowTernary: false,
      allowTaggedTemplates: false,
    },
  ],

  'no-unused-labels': 'error', // disallow unused labels
  'no-useless-call': 'off', // disallow unnecessary .call() and .apply()
  'no-useless-catch': 'error', // Disallow unnecessary catch clauses
  'no-useless-concat': 'error', // disallow useless string concatenation
  'no-useless-escape': 'error', // disallow unnecessary string escaping
  'no-useless-return': 'error', // disallow redundant return; keywords
  'no-void': 'error', // disallow use of void operator

  // disallow usage of configurable warning terms in comments: e.g. todo
  'no-warning-comments': ['off', {terms: ['todo', 'fixme', 'xxx'], location: 'start'}],

  'no-with': 'error', // disallow use of the with statement

  // require using Error objects as Promise rejection reasons
  'prefer-promise-reject-errors': ['error', {allowEmptyReject: true}],

  'prefer-named-capture-group': 'off', // Suggest using named capture group in regular expression
  'prefer-regex-literals': 'error', // Prefer regular expression literals over RegExp constructor function
  radix: 'error', // require use of the second argument for parseInt()
  'require-await': 'off', // require `await` in `async function` (note: this is a horrible rule that should never be used)
  'require-unicode-regexp': 'off', // Enforce the use of u flag on RegExp
  'vars-on-top': 'error', // requires to declare all vars on top of their containing scope
  yoda: 'error', // require or disallow Yoda conditions
};
