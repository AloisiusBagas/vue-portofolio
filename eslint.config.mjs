import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import prettierSkipFormatting from '@vue/eslint-config-prettier/skip-formatting'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'

export default defineConfigWithVueTs(
  js.configs.recommended,
  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,
  prettierSkipFormatting,
  {
    ignores: ['dist/**', 'node_modules/**']
  }
)
