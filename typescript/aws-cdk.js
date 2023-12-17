// This is a workaround for https://github.com/eslint/eslint/issues/3458
require('@rushstack/eslint-config/patch/modern-module-resolution')

var CWD = process.cwd()

module.exports = {
  root: true,
  extends: ['@rushstack/eslint-config/profile/node', '@rushstack/eslint-config/mixins/friendly-locals'],
  parserOptions: {
    ecmaVersion: 2020,
    project: [`${CWD}/tsconfig.json`, `${CWD}/tsconfig.eslint.json`],
    tsconfigRootDir: CWD,
  },
  rules: {
    'no-new': 'off',
    '@typescript-eslint/typedef': 'off',
  },
  overrides: [
    {
      files: ['spec.ts'],
      rules: {
        '@typescript-eslint/typedef': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/naming-convention': [
          'warn',
          {
            selector: 'interface',
            format: ['PascalCase'],
            custom: {
              regex: '(^_?I[A-Z])|(Props$)',
              match: true,
            },
          },
        ],
      },
    },
  ],
}
