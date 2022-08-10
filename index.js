module.exports = {
  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'prettier',
    'prettier/react',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  plugins: ['react', 'react-hooks', 'react-native', '@typescript-eslint'],
  rules: {
    // Common
    'padded-blocks': ['warn', 'never'],
    'comma-dangle': ['error', 'never'],
    'arrow-parens': ['error', 'always'],
    'no-use-before-define': ['error', { functions: false }],
    'spaced-comment': 'warn',
    'no-extra-semi': 'warn',

    'no-return-assign': ['error', 'except-parens'],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-underscore-dangle': ['error'],
    'no-nested-ternary': 'warn',
    'no-console': 'warn',
    'consistent-return': 'warn',
    'max-depth': ['error', { max: 3 }],
    'max-lines-per-function': ['warn', { max: 150 }],
    'max-nested-callbacks': ['error', { max: 3 }],
    complexity: ['error', { max: 12 }],
    eqeqeq: 'error',
    'max-classes-per-file': ['error', 1],
    'prefer-const': 'warn',
    curly: ['error', 'multi-line'],
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'no-duplicate-imports': 'warn',

    // Typescript Rules
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: true
        }
      }
    ],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        variables: false
      }
    ],

    // React Rules
    'react/prop-types': 'off',
    'react/jsx-filename-extension': 'off',
    'react/no-array-index-key': 'warn',
    'react/jsx-one-expression-per-line': 'off',
    'react/prefer-stateless-function': 'warn',
    'react/jsx-indent': 'off',
    'react/display-name': 'off',

    // React-Hooks
    // The following rules are made available via `eslint-plugin-react-hooks`
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // React-Native
    'react-native/no-inline-styles': 'warn'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
