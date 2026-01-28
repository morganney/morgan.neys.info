import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import next from '@next/eslint-plugin-next'

export default defineConfig([
  globalIgnores(['.next/**', 'out/**']),
  {
    extends: [nextVitals],
    plugins: {
      next: next,
    },
    rules: {
      'no-console': 'error',
    },
  },
])
