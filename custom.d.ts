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
    FRONTEND_URI: string;
    REDIRECT_URI: string;
    SPOTIFY_CLIENT_ID: string;
    SPOTIFY_CLIENT_SECRET: string;
    PORT: string;
    NODE_ENV: string;
  };
};
