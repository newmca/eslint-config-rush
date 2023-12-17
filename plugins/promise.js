/**
 * File: packages/eslint-config/plugins/promise.js
 *
 * Description:
 *  Provides ESLint support to enforce best practices for JavaScript promises using the
 *  "eslint-plugin-promise" plugin.
 *
 * Documentation:
 *  https://github.com/xjamundx/eslint-plugin-promise
 *  or
 *  https://github.com/xjamundx/eslint-plugin-promise/blob/development/docs/rules/{RULE_NAME}.md
 *
 */

//------------------------------------------------------------- Module Export --
module.exports = {
  plugins: ['promise'],
  rules: {
    'promise/always-return': 'error',
    'promise/no-return-wrap': 'error',
    'promise/param-names': 'error',
    'promise/catch-or-return': 'error',
    'promise/no-native': 'off',
    'promise/no-nesting': 'warn',
    'promise/no-promise-in-callback': 'warn',
    'promise/no-callback-in-promise': 'warn',
    'promise/avoid-new': 'off',
    'promise/no-new-statics': 'error',
    'promise/no-return-in-finally': 'warn',
    'promise/valid-params': 'warn',
  },
};
