/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly BASE_URL: string; // Define other environment variables here
    readonly VITE_API_URL: string; // Example of a custom variable
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }