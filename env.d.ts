/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VUE_APP_SERVICE_ID: string
  readonly VUE_APP_TEMPLATE_ID: string
  readonly VUE_APP_USER_ID: string
  readonly VUE_APP_API_KEY: string // Misalnya untuk API key
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
