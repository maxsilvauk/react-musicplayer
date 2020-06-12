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
    APP_CLIENT_ID: string;
    NODE_ENV: string;
  }
}
