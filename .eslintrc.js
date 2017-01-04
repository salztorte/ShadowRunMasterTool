module.exports = {
    extends: [
        'plugin:flowtype/recommended',
        'airbnb',
    ],
    plugins: [
        'react',
        'flowtype'
    ],
    env: {
        browser: true,
        es6: true,
        mocha: true,
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
            experimentalObjectRestSpread: true,
            modules: true,
        },
    },
    rules: {
        'arrow-parens': ['error', 'as-needed'],
        'func-names': ['error', 'as-needed'],
        'import/extensions': ['error', {
            jsx: 'always',
            js: 'never'
        }],
        'import/no-extraneous-dependencies': ['error', {
            devDependencies: ['**/*.spec.js'],
        }],
        'import/no-named-as-default': 'off',
        'import/no-named-as-default-member': 'off',
        'import/prefer-default-export': 'off',
        indent: ['error', 4, {
            SwitchCase: 1,
        }],
        'jsx-quotes': ['error', 'prefer-single'],
        'linebreak-style': 'off',
        'new-cap': 'off',
        'no-plusplus': 'off',
        'no-unused-expressions': 'warn',
        'no-unused-vars': ['warn', {
            'vars': 'all',
            'args': 'after-used',
            'varsIgnorePattern': 'React|ActionTypes|Actions|Action',
        }],
        'react/forbid-prop-types': ['warn', {
            'forbid': ['any', 'array']
        }],
        'react/jsx-indent': ['warn', 4],
        'react/jsx-indent-props': ['warn', 4],
        'spaced-comment': 'off',
    },
};