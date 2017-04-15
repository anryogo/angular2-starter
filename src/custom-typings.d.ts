/**
 * Ability to import json files in typescript
 */
declare module "*.json" {
  const value: any;
  export default value;
}

/**
 * Application environment variable
 */
declare const APP_ENV: string;
