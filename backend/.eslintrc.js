module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:prettier/recommended',
        'prettier/flowtype',
        'prettier/react',
        'prettier/babel',
    ],
    parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    parser: 'babel-eslint',
    plugins: ['react', 'prettier', 'babel'],
    rules: {
        'prettier/prettier': [0, 'never'],
        'block-spacing': 2,
        'comma-dangle': ['error', 'always-multiline'],
        camelcase: ['error', { properties: 'never' }],
        'jsx-quotes': ['error', 'prefer-double'],
        'object-curly-newline': [
            'error',
            {
                ObjectExpression: {
                    multiline: true,
                    minProperties: 3,
                },
                ObjectPattern: { multiline: true },
                ImportDeclaration: 'never',
                ExportDeclaration: {
                    multiline: true,
                    minProperties: 3,
                },
            },
        ],
        'arrow-parens': [0, 'as-needed', { requireForBlockBody: true }],
        'react/jsx-pascal-case': 2,
        'prefer-const': 0,
        'no-console': 0,
        'no-plusplus': 0,
    },
};
