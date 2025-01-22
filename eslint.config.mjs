import pluginJs from '@eslint/js'
import tsEslintPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'

import eslintPluginPrettier from 'eslint-plugin-prettier'
import pluginReact from 'eslint-plugin-react'
import eslintPluginSimpleImportSort from 'eslint-plugin-simple-import-sort'
import eslintPluginUnusedImports from 'eslint-plugin-unused-imports'
import globals from 'globals'
import tseslint from 'typescript-eslint'

const parser = tsParser

const prettierOptions = {
  endOfLine: 'auto',
  singleQuote: true,
  trailingComma: 'none',
  tabWidth: 2,
  semi: false,
  printWidth: 70,
  jsxSingleQuote: true,
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'avoid'
}

/** @type {import('eslint').Linter.Config[]} */
export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      parser
    },
    plugins: {
      '@typescript-eslint': tsEslintPlugin,
      prettier: eslintPluginPrettier,
      'simple-import-sort': eslintPluginSimpleImportSort,
      'unused-imports': eslintPluginUnusedImports
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'prettier/prettier': ['error', prettierOptions],
      'space-before-function-paren': [
        'error',
        {
          anonymous: 'always',
          named: 'never',
          asyncArrow: 'always'
        }
      ],
      'no-useless-constructor': 'off',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^\\u0000'],
            ['^@app(/.*|$)'],
            ['^@common(/.*|$)'],
            ['^@components(/.*|$)'],
            ['^@config(/.*|$)'],
            ['^@domain(/.*|$)'],
            ['^@infra(/.*|$)'],
            ['^@modules(/.*|$)'],
            ['^@\\w'],
            ['^libs(/.*|$)'],
            ['^\\.']
          ]
        }
      ],
      'unused-imports/no-unused-imports': 'warn',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_'
        }
      ],
      '@typescript-eslint/no-explicit-any': 'off'
    }
  }
]
