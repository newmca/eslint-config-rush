/**
 * File: packages/eslint-config/plugins/lodash.js
 *
 * Description:
 *  Provides ESLint support for the Lodash package using the "eslint-plugin-lodash" plugin.
 *
 * Documentation:
 *  https://github.com/wix/eslint-plugin-lodash
 *  or
 *  https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/{RULE_NAME}.md
 *
 */

//------------------------------------------------------------- Module Export --
module.exports = {
  plugins: ['lodash'],
  extends: ['plugin:lodash/recommended'],
  rules: {
    'lodash/import-scope': 'off',
    'lodash/preferred-alias': 'off',
    'lodash/prop-shorthand': 'off',
    'lodash/prefer-lodash-method': 'off',
  },
};
