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
        'new-cap': 'off',
        indent: ['error', 4, {SwitchCase: 1}],
        'spaced-comment': 'off',
        'react/jsx-indent': ['warn', 4],
        'react/jsx-indent-props': ['warn', 4],
        'jsx-quotes': ['error', 'prefer-single'],
        'import/extensions': ['error', {'jsx': 'always', 'js': 'never'}],
        'import/prefer-default-export': 'off',
        'import/no-named-as-default': 'off',
        'import/no-named-as-default-member' : 'off',
        "import/no-extraneous-dependencies": ["error", {"devDependencies": ["**/*.spec.js"]}],
        'no-plusplus': 'off',
        'no-unused-vars': [
            'warn',
            {
                'vars': 'all',
                'args': 'after-used',
                'varsIgnorePattern': 'React|ActionTypes|Actions|Action',
            }
        ],
        'react/forbid-prop-types' : ['warn',{'forbid':['any', 'array']}],
        'linebreak-style': 'off',
        'func-names': ['error', 'as-needed'],
    },

};