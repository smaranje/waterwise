
// import { ESLint } from 'eslint';
// import globals from 'globals';
// import tsParser from '@typescript-eslint/parser';
// import tsPlugin from '@typescript-eslint/eslint-plugin';
// import reactPlugin from 'eslint-plugin-react';

module.export = [
  {
    files: ["**/*.ts", "**/*.tsx"],
    // files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    // languageOptions: {
    //   parser: tsParser,
    //   globals: globals.browser,
    //   sourceType: 'module',
    //   ecmaVersion: 2021
    // },
    // plugins: {
    //   react: reactPlugin,
    //   '@typescript-eslint': tsPlugin
    // },
    rules: {
      'semi': ['error', 'always'],   // Enforce semicolons
      'quotes': ['error', 'single'], // Enforce single quotes
      'no-unused-vars': 'warn',      // Warn on unused variables
      'react/react-in-jsx-scope': 'off' // Disable React import requirement for React 17+
    }
  }
];
