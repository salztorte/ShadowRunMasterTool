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
        'arrow-parens': ['error', 'as-needed'],
        'curly': ['error', 'multi-or-nest'],
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
        'no-param-reassign': 'warn',
        'no-plusplus': 'off',
        'no-unused-expressions': 'warn',
        'flowtype/use-flow-type': 'error',
        'no-unused-vars': ['error', {
            'vars': 'all',
            'args': 'after-used',
            'varsIgnorePattern': 'React|ActionTypes|Actions|Action|Symbol',
        }],
        'react/forbid-prop-types': ['warn', {
            'forbid': ['any', 'array']
        }],
        'react/jsx-indent': ['warn', 4],
        'react/jsx-indent-props': ['warn', 4],
        'spaced-comment': 'off',
    },
    settings: {
        flowtype: {
            onlyFilesWithFlowAnnotation: true,
        },
    },
};