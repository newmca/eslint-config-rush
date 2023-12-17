/**
 * File: packages/eslint-config/rules/e6.js
 *
 * Description:
 *   This file is based on the Airbnb JavaScript Style Guide.
 *
 * Documentation:
 *   https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/es6.js
 *
 */

//------------------------------------------------------------- Module Export --
module.exports = {
  'constructor-super': 'error', // verify super() callings in constructors

  'no-class-assign': 'error', // disallow modifying variables of class declarations
  'no-confusing-arrow': ['error', {allowParens: true}], // disallow arrow functions where they could be confused with comparisons
  'no-const-assign': 'error', // disallow modifying variables that are declared using const
  'no-dupe-class-members': 'error', // disallow duplicate class members

  // disallow importing from the same path more than once
  // replaced by https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
  'no-duplicate-imports': 'off',
  'no-new-symbol': 'error', // disallow symbol constructor

  // Disallow specified names in exports
  'no-restricted-exports': [
    'off',
    {
      restrictedNamedExports: [
        'default', // use `export default` to provide a default export
        'then', // this will cause tons of confusion when your module is dynamically `import()`ed
      ],
    },
  ],

  // disallow specific imports
  'no-restricted-imports': [
    'off',
    {
      paths: [],
      patterns: [],
    },
  ],

  'no-this-before-super': 'error', // disallow to use this/super before super() calling in constructors.
  'no-useless-computed-key': 'error', // disallow useless computed property keys
  'no-useless-constructor': 'error', // disallow unnecessary constructor

  // disallow renaming import, export, and destructured assignments to the same name
  'no-useless-rename': [
    'error',
    {
      ignoreDestructuring: false,
      ignoreImport: false,
      ignoreExport: false,
    },
  ],

  'no-var': 'error', // require let or const instead of var

  // require method and property shorthand syntax for object literals
  'object-shorthand': [
    'error',
    'always',
    {
      ignoreConstructors: false,
      avoidQuotes: true,
    },
  ],

  // suggest using arrow functions as callbacks
  'prefer-arrow-callback': [
    'error',
    {
      allowNamedFunctions: false,
      allowUnboundThis: true,
    },
  ],

  // suggest using of const declaration for variables that are never modified after declared
  'prefer-const': [
    'error',
    {
      destructuring: 'any',
      ignoreReadBeforeAssign: true,
    },
  ],

  // Prefer destructuring from arrays and objects
  'prefer-destructuring': [
    'error',
    {
      VariableDeclarator: {
        array: false,
        object: true,
      },
      AssignmentExpression: {
        array: true,
        object: false,
      },
    },
    {
      enforceForRenamedProperties: false,
    },
  ],

  'prefer-numeric-literals': 'error', // disallow parseInt() in favor of binary, octal, and hexadecimal literals
  'prefer-reflect': 'off', // suggest using Reflect methods where applicable
  'prefer-rest-params': 'error', // use rest parameters instead of arguments
  'prefer-spread': 'error', // suggest using the spread operator instead of .apply()
  'prefer-template': 'error', // suggest using template literals instead of string concatenation
  'require-yield': 'error', // disallow generator functions that do not have yield

  // import sorting
  'sort-imports': [
    'off',
    {
      ignoreCase: false,
      ignoreDeclarationSort: false,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
    },
  ],

  'symbol-description': 'error', // require a Symbol description
};
