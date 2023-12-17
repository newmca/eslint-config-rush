/**
 * File: packages/eslint-config/rules/eslint-config-prettier.js
 *
 * Description:
 *   These rules represent a subset of ESLint formatting rules that never need to be enabled when
 *   used in conjunction with Prettier. Disableling these rules delegates code formatting
 *   responsibility to Prettier and prevents the occurrence of false negative linting errors that
 *   stem from conflicting formatting rules between the two.
 *
 *   This ruleset is based mostly on the "eslint-config-prettier" repository to avoid the need of
 *   adding this package as a devDependency to each project.
 *
 * Documentation:
 *   https://github.com/prettier/eslint-config-prettier/blob/main/index.js
 *
 */

//------------------------------------------------------------- Module Export --
module.exports = {
  // The following rules can be used in some cases (marked with `0` instead of `off` so that a script can distinguish them)
  curly: 0,
  'lines-around-comment': 0,
  'max-len': 0,
  'no-confusing-arrow': 0,
  'no-mixed-operators': 0,
  'no-tabs': 0,
  'no-unexpected-multiline': 0,
  quotes: 0, // specify whether double or single quotes should be used
  '@typescript-eslint/quotes': 0,
  'babel/quotes': 0,

  // Prettier as long as "prettier-eslint-config" is not used
  'arrow-body-style': 0,
  'prefer-arrow-callback': 0,

  //******************************************************************************
  // The rest are rules that you never need to enable when using Prettier.
  'array-bracket-newline': 'off', // enforce line breaks after opening and before closing array brackets
  'array-bracket-spacing': 'off', // enforce spacing inside array brackets
  'array-element-newline': 'off', // enforce line breaks between array elements
  'arrow-parens': 'off',
  'arrow-spacing': 'off',
  'block-spacing': 'off', // spacing inside single-line blocks
  'brace-style': 'off', // enforce a specific brace style (e.g one true brace)
  'comma-dangle': 'off', // trailing commas in multiline object literals
  'comma-spacing': 'off', // spacing before and after comma
  'comma-style': 'off', // enforce comma style (e.g one true comma)
  'computed-property-spacing': 'off', // padding inside computed properties
  'dot-location': 'off',
  'eol-last': 'off', // enforce newline at the end of file, with no multiple empty lines
  'func-call-spacing': 'off', // spacing between functions and their invocations
  'function-call-argument-newline': 'off', // function argument spacing (single or newline)
  'function-paren-newline': 'off', // consistent line breaks inside function parentheses
  'generator-star': 'off',
  'generator-star-spacing': 'off',
  'implicit-arrow-linebreak': 'off', // enforce the location of arrow function bodies with implicit returns
  indent: 'off', // sets a specific tab width for your code
  'jsx-quotes': 'off', // specify whether double or single quotes should be used in JSX attributes
  'key-spacing': 'off', // enforces spacing between keys and values in object literal properties
  'keyword-spacing': 'off', // require a space before & after certain keywords
  'linebreak-style': 'off', // disallow mixed 'LF' and 'CRLF' as linebreaks
  'multiline-ternary': 'off', // require multiline ternary
  'newline-per-chained-call': 'off', // new line after each method call in the chain to make it more readable and easy to maintain
  'new-parens': 'off', // disallow the omission of parentheses when invoking a constructor with no arguments
  'no-arrow-condition': 'off',
  'no-comma-dangle': 'off',
  'no-extra-parens': 'off',
  'no-extra-semi': 'off',
  'no-floating-decimal': 'off',
  'no-mixed-spaces-and-tabs': 'off', // disallow mixed spaces and tabs for indentation
  'no-multi-spaces': 'off',
  'no-multiple-empty-lines': 'off', // disallow multiple empty lines, only one newline at the end, and no new lines at the beginning
  'no-reserved-keys': 'off',
  'no-space-before-semi': 'off',
  'no-trailing-spaces': 'off', // disallow trailing whitespace at the end of lines
  'no-whitespace-before-property': 'off', // disallow whitespace before properties
  'no-wrap-func': 'off',
  'nonblock-statement-body-position': 'off', // enforce the location of single-line statements
  'object-curly-newline': 'off', // enforce line breaks between braces
  'object-curly-spacing': 'off', // require padding inside curly braces
  'object-property-newline': 'off', // enforce "same line" or "multiple line" on object properties.
  'one-var-declaration-per-line': 'off', // require a newline around variable declaration
  'operator-linebreak': 'off', // requires operator at the beginning of the line in multiline statements
  'padded-blocks': 'off', // disallow padding within blocks
  'quote-props': 'off', // require quotes around object literal property names
  'rest-spread-spacing': 'off',
  semi: 'error', // require or disallow use of semicolons instead of ASI
  'semi-spacing': 'off', // enforce spacing before and after semicolons
  'semi-style': 'off', // enforce location of semicolons
  'space-after-function-name': 'off',
  'space-after-keywords': 'off',
  'space-before-blocks': 'off', // require or disallow space before blocks
  'space-before-function-paren': 'off', // require or disallow space before function opening parenthesis
  'space-before-function-parentheses': 'off',
  'space-before-keywords': 'off',
  'space-in-brackets': 'off',
  'space-in-parens': 'off', // require or disallow spaces inside parentheses
  'space-infix-ops': 'off', // require spaces around operators
  'space-return-throw-case': 'off',
  'space-unary-ops': 'off', // Require or disallow spaces before/after unary operators
  'space-unary-word-ops': 'off',
  'switch-colon-spacing': 'off', // enforce spacing around colons of switch statements
  'template-curly-spacing': 'off',
  'template-tag-spacing': 'off', // require or disallow spacing between template tags and their literals
  'unicode-bom': 'off', // require or disallow the Unicode Byte Order Mark
  'wrap-iife': 'off',
  'wrap-regex': 'off', // require regex literals to be wrapped in parentheses
  'yield-star-spacing': 'off',

  // Babel
  '@babel/object-curly-spacing': 'off',
  '@babel/semi': 'off',
  'babel/object-curly-spacing': 'off',
  'babel/semi': 'off',

  // TypeScript
  '@typescript-eslint/brace-style': 'off',
  '@typescript-eslint/comma-dangle': 'off',
  '@typescript-eslint/comma-spacing': 'off',
  '@typescript-eslint/func-call-spacing': 'off',
  '@typescript-eslint/indent': 'off',
  '@typescript-eslint/keyword-spacing': 'off',
  '@typescript-eslint/member-delimiter-style': 'off',
  '@typescript-eslint/no-extra-parens': 'off',
  '@typescript-eslint/no-extra-semi': 'off',
  '@typescript-eslint/object-curly-spacing': 'off',
  '@typescript-eslint/semi': 'off',
  '@typescript-eslint/space-before-function-paren': 'off',
  '@typescript-eslint/space-infix-ops': 'off',
  '@typescript-eslint/type-annotation-spacing': 'off',

  // React
  'react/jsx-child-element-spacing': 'off',
  'react/jsx-closing-bracket-location': 'off',
  'react/jsx-closing-tag-location': 'off',
  'react/jsx-curly-newline': 'off',
  'react/jsx-curly-spacing': 'off',
  'react/jsx-equals-spacing': 'off',
  'react/jsx-first-prop-new-line': 'off',
  'react/jsx-indent': 'off',
  'react/jsx-indent-props': 'off',
  'react/jsx-max-props-per-line': 'off',
  'react/jsx-newline': 'off',
  'react/jsx-no-bind': 'off',
  'react/jsx-one-expression-per-line': 'off',
  'react/jsx-props-no-multi-spaces': 'off',
  'react/jsx-tag-spacing': 'off',
  'react/jsx-wrap-multilines': 'off',
}
