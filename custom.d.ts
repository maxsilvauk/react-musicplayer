declare module "*.svg" {
  const content: any;
  export const ReactComponent: any;
  export default content;
}

declare module "*.ttf" {
  const content: any;
  export default content;
}

declare module "*.scss" {
  const content: any;
  export default content;
}

declare var process: {
  env: {
    API_URL: string;
    IDENTITY_POOL_ID: string;
    APP_CLIENT_ID: string;
    USER_POOL_ID: string;
    NODE_ENV: string;
  }
}
