module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  // TODO: Extend TypeScript linting with Type-Aware Rules https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/TYPED_LINTING.md
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    useJSXTextNode: true,
    jsx: true,
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  plugins: [
    '@typescript-eslint', 'react-hooks', 'react'
  ],
  extends: [
    'eslint:recommended',
    'standard',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react/recommended',
  ],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'max-len': ['error', 100, 2, { ignoreUrls: true }],
    'comma-dangle': ["error", "always-multiline"],
    indent: ['error', 2, { SwitchCase: 1 }],
    'react/prop-types': 0,
    'react/display-name': 0,
    'react/jsx-tag-spacing': ['error', {
      beforeSelfClosing: 'never',
    }],
    'react/jsx-curly-spacing': ['error', {
      when: 'never',
    }],
    'react/jsx-equals-spacing': ['error', 'never'],
    'no-void': ['error', {
      allowAsStatement: true,
    }]
  },
  settings: {
    react: {
      version: 'detect',
    }
  }
}
