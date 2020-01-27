module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  globals: {
    google: true,
    // @see https://github.com/facebook/prop-types/issues/111 for why no prop-types
    PropTypes: true
  },
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: '2018',
    sourceType: 'module'
  },
  rules: {
    'one-var-declaration-per-line': ['error', 'always'],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return'
      },
      {
        blankLine: 'always',
        prev: '*',
        next: ['do', 'for', 'if', 'try', 'switch', 'while']
      },
      {
        blankLine: 'always',
        prev: ['do', 'for', 'if', 'try', 'switch', 'while'],
        next: '*'
      },
      {
        blankLine: 'always',
        prev: ['let', 'const'],
        next: '*'
      },
      {
        blankLine: 'never',
        prev: ['let', 'const'],
        next: ['let', 'const']
      },
      {
        blankLine: 'any',
        prev: 'cjs-import',
        next: ['cjs-import', '*']
      }
    ],
    'node/no-unsupported-features/es-syntax': [
      'error',
      {
        'ignores': ['modules']
      }
    ],
    // ES modules loaded from CDN cause false warnings
    'node/no-missing-import': 'off'
  }
}
