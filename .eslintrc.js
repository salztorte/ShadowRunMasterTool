module.exports = {
    extends: 'airbnb',
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
        'new-cap': 0,
        indent: [2, 4, {SwitchCase: 1}],
        'spaced-comment': 0,
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'jsx-quotes': [2, 'prefer-single'],
        'react/forbid-prop-types': 0,
        'import/extensions': [2, {'jsx': 'always', 'js': 'never'}],
        'import/prefer-default-export': 0,
        'no-plusplus': 0,
        'no-unused-vars': [2, {'vars': 'all', 'args': 'after-used', 'varsIgnorePattern': 'React'}],
        'linebreak-style': 0,
    },
    plugins: [
        'react',
    ],
};