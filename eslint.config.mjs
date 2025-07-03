import eslint from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import cypress from 'eslint-plugin-cypress';

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
    // Regras básicas do ESLint
    eslint.configs.recommended,

    // Regras TypeScript para todos os .ts
    {
        files: ['**/*.ts'],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
        },
        plugins: {
            '@typescript-eslint': tsPlugin,
        },
        rules: {
            ...tsPlugin.configs.recommended.rules,
            '@typescript-eslint/ban-ts-comment': ['error', {
                'ts-ignore': 'allow-with-description',
                'minimumDescriptionLength': 3,
            }],
        },
    },

    // Bloco especial para cypress.config.ts (variáveis do Node)
    {
        files: ['cypress.config.ts'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                console: true,
                process: true,
                __dirname: true,
            },
        },
        rules: {},
    },

    // Bloco para testes Cypress
    {
        files: ['cypress/**/*.ts'],
        plugins: {
            cypress,
        },
        languageOptions: {
            globals: {
                cy: true,
                Cypress: true,
                describe: true,
                it: true,
                before: true,
                beforeEach: true,
                after: true,
                afterEach: true,
                context: true,
                expect: true,
            },
        },
        rules: {},
    },
];
