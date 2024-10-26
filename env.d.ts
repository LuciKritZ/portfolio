declare namespace NodeJS {
  interface ProcessEnv {
    SANITY_STUDIO_API_VERSION: string;
    SANITY_STUDIO_PROJECT_ID: string;
    NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID: string;
    SANITY_STUDIO_DATASET: string;
    NEXT_PUBLIC_SANITY_STUDIO_DATASET: string;
    NEXT_PUBLIC_BASE_URL?: string;
  }
}
