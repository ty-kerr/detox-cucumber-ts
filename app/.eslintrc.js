module.exports = {
    root: true,
    env: {
        'react-native/react-native': true,
    },
    extends: ['@react-native-community', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'import'],
    rules: {
        semi: 'off',
        '@typescript-eslint/semi': ['warn', 'never'],
        'prefer-arrow-callback': 'error',
        eqeqeq: ['error', 'always'],
        quotes: ['error', 'single'],
        'jsx-quotes': ['warn', 'prefer-single'],
        'prefer-template': 'error',
        'object-curly-spacing': ['warn', 'always'],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'import/no-default-export': 'error',
        'import/no-unused-modules': ['warn', { unusedExports: true }],
        'import/order': ['warn', { 'newlines-between': 'always' }],
        'import/no-cycle': ['error', { ignoreExternal: true }],
        'no-restricted-syntax': [
            'error',
            {
                selector: 'TSEnumDeclaration[const=true]',
                message: 'Can not use const enums',
            },
            {
                selector: 'TSEnumDeclaration:not([const=true])',
                message: 'Can not use enums',
            },
        ],
    },
    ignorePatterns: ['node_modules', 'babel.config.js', 'metro.config.js', 'cucumber.js'],
    overrides: [
        {
            files: ['e2e/steps/*.ts'],
            rules: {
                'prefer-arrow-callback': 'off',
            },
        },
    ],
}
