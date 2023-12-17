module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  parser: '@babel/eslint-parser',
  extends: ['plugin:import/errors', 'plugin:import/warnings'],
  ignorePatterns: ['dist/*', 'cdk.out/*'],
  settings: {
    'import/resolver': {
      node: {extensions: ['.js', '.json', '.ts']},
    },
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    requireConfigFile: false,
  },
  rules: {
    /**
     * Eslint Prettier
     */
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
    semi: 'off', // require or disallow use of semicolons instead of ASI
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
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-multi-spaces': 'off',
    'react/jsx-tag-spacing': 'off',
    'react/jsx-wrap-multilines': 'off',
    /**
     * Best Practices
     */
    'accessor-pairs': 'off', // enforces getter/setter pairs in objects
    'array-callback-return': ['error', {allowImplicit: true}], // enforces return statements in callbacks of array's methods
    'block-scoped-var': 'error', // treat var statements as if they were block scoped
    complexity: ['off', 20], // specify the maximum cyclomatic complexity allowed in a program
    'class-methods-use-this': ['error', {exceptMethods: []}], // enforce that class methods use "this"
    'consistent-return': 'error', // require return statements to either always or never specify values
    'default-case': ['error', {commentPattern: '^no default$'}], // require default case in switch statements
    'default-case-last': 'off', // Enforce default clauses in switch statements to be last TODO: enable, semver-minor, when eslint v7 is required (which is a major)
    'default-param-last': 'off', // TODO: enable, semver-minor, when eslint v6.4 is required (which is a major)
    'dot-notation': ['error', {allowKeywords: true}], // encourages use of dot notation whenever possible
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
    'no-global-assign': ['error', {exceptions: []}], // disallow reassignments of native objects or read-only globals (https://eslint.org/docs/rules/no-global-assign)
    'no-native-reassign': 'off', // deprecated in favor of no-global-assign
    // disallow implicit type conversions
    'no-implicit-coercion': ['error', {boolean: false, number: true, string: true, allow: []}],
    'no-implicit-globals': 'off', // disallow var and named functions in global scope (https://eslint.org/docs/rules/no-implicit-globals)
    'no-implied-eval': 'error', // disallow use of eval()-like methods
    'no-invalid-this': 'off', // disallow this keywords outside of classes or class-like objects
    'no-iterator': 'error', // disallow usage of __iterator__ property
    'no-labels': ['error', {allowLoop: false, allowSwitch: false}], // disallow use of labels for anything other than loops and switches
    'no-lone-blocks': 'error', // disallow unnecessary nested blocks
    'no-loop-func': 'error', // disallow creation of functions within loops
    // disallow magic numbers (https://eslint.org/docs/rules/no-magic-numbers)
    'no-magic-numbers': ['off', {ignore: [], ignoreArrayIndexes: true, enforceConst: true, detectObjects: false}],
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
      {object: 'arguments', property: 'callee', message: 'arguments.callee is deprecated'},
      {object: 'global', property: 'isFinite', message: 'Please use Number.isFinite instead'},
      {object: 'self', property: 'isFinite', message: 'Please use Number.isFinite instead'},
      {object: 'window', property: 'isFinite', message: 'Please use Number.isFinite instead'},
      {object: 'global', property: 'isNaN', message: 'Please use Number.isNaN instead'},
      {object: 'self', property: 'isNaN', message: 'Please use Number.isNaN instead'},
      {object: 'window', property: 'isNaN', message: 'Please use Number.isNaN instead'},
      {property: '__defineGetter__', message: 'Please use Object.defineProperty instead.'},
      {property: '__defineSetter__', message: 'Please use Object.defineProperty instead.'},
      {object: 'Math', property: 'pow', message: 'Use the exponentiation operator (**) instead.'},
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
    'no-unused-expressions': ['error', {allowShortCircuit: false, allowTernary: false, allowTaggedTemplates: false}],
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

    /**
     * Errors
     */
    'for-direction': 'error', // enforce “for” loop update clause moving the counter in the right direction
    'getter-return': ['error', {allowImplicit: true}], // Enforces that a return statement is present in property getters
    'no-async-promise-executor': 'error', // disallow using an async function as a Promise executor
    'no-await-in-loop': 'error', // Disallow await inside of loops
    'no-compare-neg-zero': 'error', // Disallow comparisons to negative zero
    'no-cond-assign': ['error', 'always'], // disallow assignment in conditional expressions
    'no-console': 'warn', // disallow use of console
    'no-constant-condition': 'warn', // disallow use of constant expressions in conditions
    'no-control-regex': 'error', // disallow control characters in regular expressions
    'no-debugger': 'error', // disallow use of debugger
    'no-dupe-args': 'error', // disallow duplicate arguments in functions
    'no-dupe-else-if': 'error', // Disallow duplicate conditions in if-else-if chains
    'no-dupe-keys': 'error', // disallow duplicate keys when creating object literals
    'no-duplicate-case': 'error', // disallow a duplicate case label.
    'no-empty': 'error', // disallow empty statements
    'no-empty-character-class': 'error', // disallow the use of empty character classes in regular expressions
    'no-ex-assign': 'error', // disallow assigning to the exception in a catch block
    'no-extra-boolean-cast': 'error', // disallow double-negation boolean casts in a boolean context
    'no-func-assign': 'error', // disallow overwriting functions written as function declarations
    'no-import-assign': 'error', // disallow assignments to "import" namespace
    'no-inner-declarations': 'error', // disallow function or variable declarations in nested blocks
    'no-invalid-regexp': 'error', // disallow invalid regular expression strings in the RegExp constructor
    'no-irregular-whitespace': 'error', // disallow irregular whitespace outside of strings and comments
    'no-loss-of-precision': 'error', // Disallow Number Literals That Lose Precision
    'no-misleading-character-class': 'error', // Disallow characters which are made with multiple code points in character class syntax
    'no-obj-calls': 'error', // disallow the use of object properties of the global object (Math and JSON) as functions
    'no-promise-executor-return': 'error', // disallow returning values from Promise executor functions
    'no-prototype-builtins': 'error', // disallow use of Object.prototypes builtins directly
    'no-regex-spaces': 'error', // disallow multiple spaces in a regular expression literal
    'no-setter-return': 'error', // disallow returning values from setters
    'no-sparse-arrays': 'error', // disallow sparse arrays
    'no-template-curly-in-string': 'error', // Disallow template literal placeholder syntax in regular strings
    'no-unreachable': 'error', // disallow unreachable statements after a return, throw, continue, or break statement
    // Disallow loops with a body that allows only one iteration
    'no-unreachable-loop': [
      'error',
      {
        ignore: [], // WhileStatement, DoWhileStatement, ForStatement, ForInStatement, ForOfStatement
      },
    ],
    'no-unsafe-finally': 'error', // disallow return/throw/break/continue inside finally blocks
    'no-unsafe-negation': 'error', // disallow negating the left operand of relational operators
    // disallow use of optional chaining in contexts where the undefined value is not allowed
    'no-unsafe-optional-chaining': ['off', {disallowArithmeticOperators: true}],
    'no-useless-backreference': 'error', // disallow useless backreferences in regular expressions
    'no-negated-in-lhs': 'off', // disallow negation of the left operand of an in expression (deprecated in favor of no-unsafe-negation)
    // Disallow assignments that can lead to race conditions due to usage of await or yield
    // note: not enabled because it is very buggy
    'require-atomic-updates': 'off',
    'use-isnan': 'error', // disallow comparisons with the value NaN
    'valid-jsdoc': 'off', // ensure JSDoc comments are valid
    // ensure that the results of typeof are compared against a valid string
    'valid-typeof': ['error', {requireStringLiterals: true}],

    /**
     * Variables
     */
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

    /**
     * ES6
     */
    'constructor-super': 'error', // verify super() callings in constructors
    'no-class-assign': 'error', // disallow modifying variables of class declarations
    'no-const-assign': 'error', // disallow modifying variables that are declared using const
    'no-dupe-class-members': 'error', // disallow duplicate class members
    // disallow importing from the same path more than once replaced by https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
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
    'no-restricted-imports': ['off', {paths: [], patterns: []}],
    'no-this-before-super': 'error', // disallow to use this/super before super() calling in constructors.
    'no-useless-computed-key': 'error', // disallow useless computed property keys
    'no-useless-constructor': 'error', // disallow unnecessary constructor
    // disallow renaming import, export, and destructured assignments to the same name
    'no-useless-rename': ['error', {ignoreDestructuring: false, ignoreImport: false, ignoreExport: false}],
    'no-var': 'error', // require let or const instead of var
    // require method and property shorthand syntax for object literals
    'object-shorthand': ['error', 'always', {ignoreConstructors: false, avoidQuotes: true}],
    // suggest using arrow functions as callbacks
    // suggest using of const declaration for variables that are never modified after declared
    'prefer-const': ['error', {destructuring: 'any', ignoreReadBeforeAssign: true}],
    // Prefer destructuring from arrays and objects
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {array: false, object: true},
        AssignmentExpression: {array: true, object: false},
      },
      {enforceForRenamedProperties: false},
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

    /**
     * Node
     */
    'callback-return': 'off', // enforce return after a callback
    'global-require': 'error', // require all requires be top-level
    'handle-callback-err': 'off', // enforces error handling in callbacks (node environment)
    'no-buffer-constructor': 'error', // disallow use of the Buffer() constructor
    'no-mixed-requires': ['off', false], // disallow mixing regular variable and require declarations
    'no-new-require': 'error', // disallow use of new operator with the require function
    'no-path-concat': 'error', // disallow string concatenation with __dirname and __filename
    'no-process-env': 'off', // disallow use of process.env
    'no-process-exit': 'off', // disallow process.exit()
    'no-restricted-modules': 'off', // restrict usage of specified node modules
    'no-sync': 'off', // disallow use of synchronous methods (off by default)

    /**
     * Custom
     */
    camelcase: ['error', {properties: 'never', ignoreDestructuring: false}], // require camel case names
    'capitalized-comments': 'off', // enforce or disallow capitalization of the first letter of a comment
    'consistent-this': 'off', // enforces consistent naming when capturing the current execution context
    //'class-methods-use-this': 'off',
    // specify the maximum length of a line in your program
    'func-name-matching': 'off', // requires function names to match variable name or property to which they are assigned
    'func-names': ['error', 'as-needed'], // require function expressions to have a name
    'func-style': ['error', 'declaration', {allowArrowFunctions: true}], // enforces use of function declarations or expressions
    'id-blacklist': 'off', // blacklist certain identifiers to prevent them being used (eslint v7.4+)
    'id-denylist': 'off', // disallow specified identifiers
    'id-length': 'off', // this option enforces minimum and maximum identifier lengths (variable names, property names etc.)
    'id-match': 'off', // require identifiers to match the provided regular expression
    'lines-between-class-members': ['error', 'always', {exceptAfterSingleLine: true}], // require or disallow an empty line between class members
    'lines-around-directive': ['error', {before: 'always', after: 'always'}], // require or disallow newlines around directives
    'max-depth': 'off', // specify the maximum depth that blocks can be nested
    'max-lines': 'off', // specify the max number of lines in a file
    'max-lines-per-function': 'off', // enforce a maximum function length
    'max-nested-callbacks': 'off', // specify the maximum depth callbacks can be nested
    'max-params': 'off', // limits the number of parameters that can be used in the function declaration.
    'max-statements': 'off', // specify the maximum number of statement allowed in a function
    'max-statements-per-line': 'off', // restrict the number of statements per line
    'multiline-comment-style': 'off', // enforce a particular style for multiline comments
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
    'no-continue': 'error', // disallow use of the continue statement
    'no-inline-comments': 'off', // disallow comments inline after code
    'no-lonely-if': 'error', // disallow if as the only statement in an else block
    // disallow un-paren'd mixes of different operators
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
    'no-ternary': 'off', // disallow the use of ternary operators
    // disallow dangling underscores in identifiers
    'no-underscore-dangle': [
      'error',
      {allow: [], allowAfterThis: false, allowAfterSuper: false, enforceInMethodNames: true},
    ],
    // disallow Boolean literals in conditional expressions also, prefer `a || b` over `a ? a : b`
    'no-unneeded-ternary': ['error', {defaultAssignment: false}],
    'one-var': ['error', 'never'], // allow just one var statement per function
    'operator-assignment': ['error', 'always'], // require assignment operator shorthand where possible or prohibit it entirely
    'padding-line-between-statements': 'off', // Require or disallow padding lines between statements
    'prefer-exponentiation-operator': 'off', // disallow the use of Math.pow in favor of the ** operator
    'prefer-object-spread': 'error', // prefer use of an object spread over Object.assign
    'require-jsdoc': 'off', // do not require jsdoc
    'sort-keys': ['off', 'asc', {caseSensitive: false, natural: true}], // requires object keys to be sorted
    'sort-vars': 'off', // sort variables within the same declaration block
    'spaced-comment': 'off', // require or disallow a space immediately following the // or /* in a comment
    'import/extensions': 'off',
  },
}
