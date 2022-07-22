module.exports = {
  env: {
      browser: true,
      es2021: true,
  },
  extends: [
      'plugin:react/recommended',
      'airbnb',
      'plugin:prettier/recommended',
      'prettier',
  ],
  parserOptions: {
      ecmaFeatures: { jsx: true },
      ecmaVersion: 12,
      sourceType: 'module',
      requireConfigFile: false,
  },
  parser: '@babel/eslint-parser',
  plugins: ['react', 'prettier', 'babel', 'jsx'],
  rules: {
      'prettier/prettier': 0,
      'block-spacing': 2,
      camelcase: [
          'error', { properties: 'never' },
      ],
      'jsx-quotes': ['error', 'prefer-double'],
      'arrow-parens': [
          0,
          'as-needed',
          { requireForBlockBody: true },
      ],
      'react/jsx-pascal-case': 2,
      'prefer-const': 0,
      'no-console': 0,
      'react/self-closing-comp': 0,
      'react/jsx-props-no-spreading': 0,
      'react/forbid-prop-types': 0,
      'react/prop-types': 0,
      'react/function-component-definition': 0,
      'import/prefer-default-export': 0,
      'no-nested-ternary': 0,
      'array-element-newline': ["error", {
          "ArrayExpression": "consistent",
          "ArrayPattern": { "minItems": 20 }
      }],
      'no-plusplus': 0
  },
};
