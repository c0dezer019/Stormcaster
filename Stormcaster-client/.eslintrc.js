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
        'prettier',
    ],
    parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    parser: 'babel-eslint',
    plugins: ['react', 'prettier', 'babel'],
    rules: {
        'prettier/prettier': 0,
        'block-spacing': 2,
        camelcase: ['error', { properties: 'never' }],
        'jsx-quotes': ['error', 'prefer-double'],
        'arrow-parens': [0, 'as-needed', { requireForBlockBody: true }],
        'react/jsx-pascal-case': 2,
        'prefer-const': 0,
        'no-console': 0,
        'react/self-closing-comp': 0,
        'react/jsx-props-no-spreading': 0,
        'import/prefer-default-export': 0,
        'react/forbid-prop-types': 0,
        'no-nested-ternary': 0,
        'react/prop-types': 0,
        'array-element-newline': [
            'error',
            {
                ArrayExpression: 'consistent',
                ArrayPattern: { minItems: 20 },
            },
        ],
        'no-plusplus': 0,
        'no-param-reassign': 0,
    },
    "settings": {
        "import/resolver": {
            "node": {
                "paths": ["src"],
            },
        },
    },
};
