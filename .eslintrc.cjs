module.exports = {
    extends: ['plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    rules: {
        'no-restricted-imports': [
            'warn',
            {
                name: 'react-redux',
                importNames: ['useSelector', 'useDispatch'],
                message: 'Use typed hooks `useTDispatch` and `useTDispatch` instead.',
            },
        ],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
            'warn',
            {
                args: 'all',
                argsIgnorePattern: '^_',
                caughtErrors: 'all',
                caughtErrorsIgnorePattern: '^_',
                destructuredArrayIgnorePattern: '^_',
                varsIgnorePattern: '^_',
                ignoreRestSiblings: true,
            },
        ],
        '@typescript-eslint/no-explicit-any': 'off',
        'prefer-const': 'warn',
        'react/prop-types': 'off',
    },
};
