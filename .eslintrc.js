module.exports = {
  env: {
    es6: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
    'plugin:consistent-default-export-name/fixed'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module'
  },
  plugins: ['react', 'react-native', '@typescript-eslint', 'react-hooks', 'simple-import-sort'],
  rules: {
    'no-unused-vars': ['error', { argsIgnorePattern: 'params', args: 'none' }],
    '@typescript-eslint/no-unused-vars': 'off',
    'handle-callback-err': 'warn',
    'func-call-spacing': 'error',
    'space-before-function-paren': 0,
    'react/prop-types': 0,
    'react/jsx-handler-names': 0,
    'react/jsx-fragments': 0,
    'react/no-unused-prop-types': 0,
    'import/export': 0,
    'comma-dangle': [2, 'never'],
    'jsx-quotes': [2, 'prefer-single'],
    'react-native/no-unused-styles': 'error',
    'react-native/no-inline-styles': 'off',
    'react/display-name': 'off',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Node.js builtins. You could also generate this regex if you use a `.js` config.
          // For example: `^(${require("module").builtinModules.join("|")})(/|$)`
          [
            '^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)',
            // Packages. `react` related packages come first.
            '^react',
            '^@?\\w',

            // Side effect imports.
            '^\\u0000',
            // Parent imports. Put `..` last.
            '^\\.\\.(?!/?$)',
            '^\\.\\./?$',
            // Other relative imports. Put same-folder imports and `.` last.
            '^\\./(?=.*/)(?!/?$)',
            '^\\.(?!/?$)',
            '^\\./?$',
            // Style imports.

            '^.+\\.s?css$'
          ],
          [
            // Sort types as seperate group
            '^@?\\w.*\\u0000$',
            '^(@|@tentwenty|@tentwenty-tech|@theme|@ui|components|utils|config|vendored-lib)(/.*|$)',
            '^[^.].*\\u0000$',
            '^\\..*\\u0000$'
          ]
        ]
      }
    ],
    'consistent-default-export-name/default-export-match-filename': 'warn',
    'consistent-default-export-name/default-import-match-filename': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    /* rules introduced by the recommened plugins that are to be addressed in future PRs */
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off', // this is return types but only on module boundaries vs @typescript-eslint/explicit-function-return-type
    '@typescript-eslint/unbound-method': 'off', // this rule is failing on things I don't get
    '@typescript-eslint/no-unsafe-member-access': 'off', // lodash import causing this
    '@typescript-eslint/no-unsafe-call': 'off', // lodash as well
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/require-await': 'off',
    '@typescript-eslint/no-empty-interface': 'off', // should be easy to fix
    '@typescript-eslint/ban-types': 'off', // this spots using Number instead of number
    '@typescript-eslint/restrict-plus-operands': 'off', // good rule
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/prefer-regexp-exec': 'off', // swaps how regex and string.match are used
    '@typescript-eslint/prefer-as-const': 'off', // good suggestion
    '@typescript-eslint/no-unnecessary-type-assertion': 'off', // removes redundant code
    '@typescript-eslint/await-thenable': 'off', // await functions that aren't promises
    '@typescript-eslint/no-inferrable-types': 'off', // don't added types for easy to define things
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-unnecessary-type-constraint': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'no-unsafe-optional-chaining': 'off',
    'no-extra-boolean-cast': 'off', // redundant double negation
    'no-useless-escape': 'off', // cleans up regexs,
    'no-duplicate-case': 'off', // spots duplicate case statements
    'no-case-declarations': 'off', // prevents hoisting of variables in case statements
    'no-async-promise-executor': 'off', // good suggestion for a code smell
    'no-empty-pattern': 'off', // unexpected empty object
    'no-prototype-builtins': 'off', // this can be dangerous,
    'react-hooks/exhaustive-deps': 'off',
    'linebreak-style': ['error', 'unix'] // En
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  overrides: [
    {
      files: ['./**/*.test.ts'],
      rules: {
        '@typescript-eslint/naming-convention': ['off']
      }
    }
  ]
};
