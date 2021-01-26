// Note that our ESLint configuration is managed from @backmarket/front-scripts.
// This file only contains super specific stuff such as on-going migrations,
// rules we can't enable right now or project configuration.

const alias = require('./config/aliases/get')

module.exports = {
    extends: ['./node_modules/@backmarket/front-scripts/dist/eslint'],

    globals: {
        resetContext: true,
        setClientContext: true,
        setDevContext: true,
        setProdContext: true,
        setServerContext: true,
    },

    overrides: [
        {
            // Prevent the plugins to be run on test files without testing library
            extends: [
                'plugin:testing-library/vue',
                'plugin:jest-dom/recommended',
            ],
            files: ['*.spec.js'],
            rules: {
                'no-restricted-imports': [
                    'error',
                    {
                        paths: [
                            {
                                message:
                                    'Please use .test.js files for @vue/test-utils.',
                                name: '@vue/test-utils',
                            },
                        ],
                    },
                ],
            },
        },
        {
            // Prevent the plugins to be run on test files without testing library
            files: ['*.test.js'],
            rules: {
                'jest-dom/prefer-to-have-class': 'off',
                'jest-dom/prefer-checked': 'off',
                'jest-dom/prefer-enabled-disabled': 'off',
                'jest-dom/prefer-focus': 'off',

                'no-restricted-imports': [
                    'error',
                    {
                        paths: [
                            {
                                message:
                                    'Please use .spec.js files for @testing-library/vue.',
                                name: '@testing-library/vue',
                            },
                        ],
                    },
                ],
            },
        },
    ],

    // The following rules should be migrated bit by bit, or disabled at
    // the shared configuration level on @backmarket/front-scripts.
    rules: {
        // TODO: Fix all key sorting issues (currently over 14000).
        '@backmarket/backmarket/sort-keys': 'off',

        'jest/no-identical-title': 'off',
        'jest/no-standalone-expect': 'off',
        'jest/no-try-expect': 'off',
        'jest/valid-expect': 'off',

        'vue/no-deprecated-slot-attribute': 'off',
        'vue/no-deprecated-slot-scope-attribute': 'off',
        'vue/no-reserved-component-names': 'off',
        'vue/no-use-v-if-with-v-for': 'off',
        // TODO: Migrate all events name to kebab-case.
        // See https://backmarket.atlassian.net/browse/FRONT-179
        'vue/custom-event-name-casing': 'off',

        'vuejs-accessibility/anchor-has-content': 'off',
        'vuejs-accessibility/click-events-have-key-events': 'off',
        'vuejs-accessibility/form-control-has-label': 'off',
        'vuejs-accessibility/heading-has-content': 'off',
        'vuejs-accessibility/interactive-supports-focus': 'off',
        'vuejs-accessibility/label-has-for': 'off',
        'vuejs-accessibility/no-autofocus': 'off',
        'vuejs-accessibility/no-onchange': 'off',
        'vuejs-accessibility/role-has-required-aria-props': 'off',
    },

    settings: {
        'import/resolver': {
            // Fix an odd issue, here lint warnings are thrown when importing node built-in modules.
            // See: https://github.com/benmosher/eslint-plugin-import/issues/1396
            node: {},
            webpack: {
                config: {
                    resolve: {
                        alias,
                        extensions: ['.js', '.json', '.vue', '.svg'],
                    },
                },
            },
        },
    },
}
