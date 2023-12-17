require('@rushstack/eslint-config/patch/modern-module-resolution')

const CWD = process.cwd()

module.exports = {
  extends: [
    './lib/defaults',
    '@rushstack/eslint-config/profile/node-trusted-tool',
    '@rushstack/eslint-config/mixins/friendly-locals',
  ],
  parserOptions: {
    tsconfigRootDir: CWD,
  },
  rules: {
    'no-new': 'off',
  },
}
