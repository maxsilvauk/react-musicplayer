const region = 'eu-west-1';

export default {
  Auth: {
    mandatorySignIn: true,
    region,
    userPoolId: process.env.USER_POOL_ID,
    identityPoolId: process.env.IDENTITY_POOL_ID,
    userPoolWebClientId: process.env.APP_CLIENT_ID
  }
};
