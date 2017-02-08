module.exports = {
    extends: [
        'plugin:flowtype/recommended',
        'airbnb',
    ],
    plugins: [
        'react',
        'flowtype',
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
        'arrow-parens': [2, 'as-needed'],
        'curly': [2, 'multi-or-nest'],
        'import/extensions': [2, {
            jsx: 'always',
            js: 'never'
        }],
        'import/no-extraneous-dependencies': [2, {
            devDependencies: ['**/*.spec.js'],
        }],
        'import/no-unresolved': 1,
        'import/no-named-as-default': 0,
        'import/no-named-as-default-member': 0,
        'import/prefer-default-export': 0,
        indent: [2, 4, {
            SwitchCase: 1,
        }],
        'jsx-quotes': [2, 'prefer-single'],
        'linebreak-style': 0,
        'new-cap': 0,
        'no-param-reassign': 2,
        'no-plusplus': 0,
        'no-unused-expressions': 2,
        'flowtype/use-flow-type': 2,
        'flowtype/space-after-type-colon': 0,
        'no-unused-vars': [2, {
            'vars': 'all',
            'args': 'after-used',
            'varsIgnorePattern': 'React|ActionTypes|Actions|Action|Symbol',
        }],
        'react/forbid-prop-types': [2, {
            'forbid': ['any', 'array']
        }],
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'spaced-comment': 0,
//        'func-names': [2, 'as-needed'],
    },
    settings: {
        flowtype: {
            onlyFilesWithFlowAnnotation: true,
        },
    },
};