/*eslint-env es6*/
require('@rushstack/eslint-config/patch/modern-module-resolution')

module.exports = {
  extends: [
    '@rushstack/eslint-config/profile/web-app',
    '@rushstack/eslint-config/mixins/react',
    'plugin:react-hooks/recommended',
    'plugin:eslint-plugin-storybook/recommended',
    require.resolve('../profile/web'),
  ],
}
