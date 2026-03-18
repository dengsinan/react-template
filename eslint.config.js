import { createRequire } from 'node:module'
import antfu from '@antfu/eslint-config'

const require = createRequire(import.meta.url)
const { globals } = require('./.eslintrc-auto-import.json')

export default antfu({
  react: true,
}, {
  languageOptions: {
    globals,
  },
})
