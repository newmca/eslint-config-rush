require('@rushstack/eslint-config/patch/modern-module-resolution')

const CWD = process.cwd()

module.exports = {
  extends: ['../plugins/imports-web', '../plugins/react-query'].map(require.resolve),
  env: {
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    project: [`${CWD}/tsconfig.json`, `${CWD}/tsconfig-eslint.json`],
    tsconfigRootDir: CWD,
  },
  settings: {
    react: {
      version: '17.0.2',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
  rules: {
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['StrictPascalCase'],
      },
      {
        selector: 'variableLike',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'variable',
        types: ['boolean'],
        format: ['PascalCase'],
        prefix: ['is', 'should', 'has', 'can', 'did', 'will', 'are', 'does'],
      },
      {
        selector: 'objectLiteralProperty',
        format: ['camelCase', 'UPPER_CASE'],
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      {
        selector: 'typeAlias',
        format: ['PascalCase'],
      },
    ],
    '@typescript-eslint/no-floating-promises': ['off'],
    'object-shorthand': ['error', 'always'],
    'prefer-destructuring': [
      'error',
      {
        array: true,
        object: true,
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        patterns: ['../../*'],
      },
    ],
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
      },
    ],
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
}
