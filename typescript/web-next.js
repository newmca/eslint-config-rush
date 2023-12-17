/*eslint-env es6*/
require('@rushstack/eslint-config/patch/modern-module-resolution')

module.exports = {
  extends: [
    '@rushstack/eslint-config/profile/web-app',
    '@rushstack/eslint-config/mixins/react',
    'plugin:@next/next/recommended',
    'plugin:react-hooks/recommended',
    require.resolve('../profile/web'),
  ],
}
