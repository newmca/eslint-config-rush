/**
 * File: packages/eslint-config/plugins/imports-web.js
 *
 * Description:
 *  Provides ESLint support for ES2015+ (ES6+) import/export syntax, and prevent issues with
 *  misspelling of file paths and import names using the "eslint-plugin-import" plugin.
 *
 * Documentation:
 *  https://github.com/benmosher/eslint-plugin-import
 *  or
 *  https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/{RULE_NAME}.md
 *
 */

//------------------------------------------------------------- Module Export --
module.exports = {
  plugins: ['import'],
  settings: {
    'import/extensions': 'off',
    'import/core-modules': [],
    'import/ignore': ['node_modules', '\\.(coffee|scss|css|less|hbs|svg|json)$'],
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    //----------------------------------------------------------- Static analysis --
    'import/default': 'off', // ensure default import coupled with default export
    'import/named': 'error', // ensure named imports coupled with named exports
    'import/namespace': 'off', // enforces existing names at the time they are dereferenced when imported as a full namespace

    // Ensure imports point to files/modules that can be resolved
    'import/no-unresolved': ['error', {commonjs: true, caseSensitive: true, ignore: ['.ts$']}],

    //---------------------------------------------------------- Helpful warnings --
    'import/export': 'error', // disallow invalid exports, e.g. multiple defaults
    'import/no-named-as-default': 'error', // do not allow a default import name to match a named export
    'import/no-named-as-default-member': 'error', // warn on accessing default export property names that are also named exports
    'import/no-deprecated': 'off', // disallow use of jsdoc-marked-deprecated imports

    // Forbid the use of extraneous packages. Paths are treated both as absolute paths, and relative to process.cwd()
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    'import/no-extraneous-dependencies': ['error'],

    'import/no-mutable-exports': 'error', // forbid mutable exports with "var" or "let"

    //------------------------------------------------------------ Module systems --
    'import/no-commonjs': 'off', // disallow require()
    'import/no-amd': 'error', // disallow AMD require/define
    'import/no-nodejs-modules': 'off', // forbid the use of Node.js builtin modules e.g client-side web projects

    //--------------------------------------------------------------- Style guide --
    // Ensure consistent use of file extension within the import path
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],

    'import/first': 'error', // disallow non-import statements appearing before import statements
    'import/imports-first': 'off', // DEPRECATED: use `import/first`
    'import/max-dependencies': ['off', {max: 10}], // forbid modules to have too many dependencies
    'import/newline-after-import': 'error', // require a newline after the last import/require in a group
    'import/no-duplicates': 'error', // disallow duplicate imports
    'import/no-namespace': 'off', // enforce a convention of not using namespace (a.k.a. "wildcard" *) imports.
    'import/no-restricted-paths': 'off', // restrict which files can be imported in a given folder
    'import/no-absolute-path': 'error', // forbid import of modules using absolute paths
    'import/no-dynamic-require': 'error', // forbid require() calls with expressions
    'import/no-internal-modules': ['off', {allow: []}], // prevent importing the submodules of other modules
    'import/no-webpack-loader-syntax': 'error', // forbid Webpack loader syntax in imports
    'import/no-unassigned-import': 'off', // prevent unassigned imports (disabled to allow importing for side effects)
    'import/no-named-default': 'error', // prevent importing the default as if it were named

    // Ensure absolute imports are above relative imports and that unassigned imports are ignored
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
    'import/order': 'off',

    'import/prefer-default-export': 'off', // require modules with a single export to use a default export

    // Warn if a module could be mistakenly parsed as a script by a consumer leveraging Unambiguous
    // JavaScript Grammar. Should not be enabled until this proposal has been *presented* to TC39.
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/unambiguous.md
    'import/unambiguous': 'off',

    // Reports if a module's default export is unnamed
    'import/no-anonymous-default-export': [
      'off',
      {
        allowArray: false,
        allowArrowFunction: false,
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowLiteral: false,
        allowObject: false,
      },
    ],

    'import/exports-last': 'off', // enforces that all exports are declared at the bottom of the file

    // Reports when named exports are not grouped together in a single export declaration or when
    // multiple assignments to CommonJS module.exports or exports object are present in a single file
    'import/group-exports': 'off',

    'import/no-default-export': 'off', // forbid default exports which is a terrible rule, do not use it
    'import/no-named-export': 'off', // prohibit named exports ** terrible rule - do not use it **
    'import/no-self-import': 'error', // forbid a module from importing itself
    'import/no-cycle': ['error', {maxDepth: '∞'}], // forbid cyclical dependencies between modules
    'import/no-useless-path-segments': ['error', {commonjs: true}], // ensures no useless path segments

    // Dynamic imports require a leading comment with a webpackChunkName
    'import/dynamic-import-chunkname': [
      'off',
      {
        importFunctions: [],
        webpackChunknameFormat: '[0-9a-zA-Z-_/.]+',
      },
    ],

    'import/no-relative-parent-imports': 'off', // prevent imports to folders in relative parent paths
    'import/no-unused-modules': 'off', // reports modules without any exports, or with unused exports
    'no-unused-vars': 'error',
    'import/order': [
      'error',
      {
        groups: [['builtin', 'external', 'internal'], ['index', 'sibling', 'parent'], ['type'], ['object']],
        'newlines-between': 'always',
      },
    ],
  },
}
