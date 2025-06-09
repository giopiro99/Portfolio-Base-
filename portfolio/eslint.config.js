import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  // Ignora la cartella di output
  {
    ignores: ['dist'],
  },

  // Configurazione principale per TypeScript + React
  {
    // Estendi le configurazioni base consigliate
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
    ],

    // Applica solo ai file TypeScript/React
    files: ['**/*.{ts,tsx}'],

    // Impostazioni del linguaggio
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },

    // Plugin utilizzati
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },

    // Regole personalizzate
    rules: {
      // Migliori pratiche React Hooks
      ...reactHooks.configs.recommended.rules,

      // React Fast Refresh: avvisa se esporti qualcosa di dinamico
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
)

