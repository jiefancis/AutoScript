export const genNonce = function () {
  return Math.random().toString(36).substring(2, 15);
};

interface AuthUrlParams {
  clientId: string;
  redirectUri: string;
}
export const getAuthUrl = function ({ clientId, redirectUri }: AuthUrlParams) {
  const authUrl = new URL('https://accounts.google.com/o/oauth2/v2/auth');

  const nonce = genNonce();

  authUrl.searchParams.set('client_id', clientId);
  authUrl.searchParams.set('response_type', 'id_token');
  authUrl.searchParams.set('redirect_uri', redirectUri);
  // Add the OpenID scope. Scopes allow you to access the user’s information.
  authUrl.searchParams.set('scope', 'openid profile email');
  authUrl.searchParams.set('nonce', nonce);
  // Show the consent screen after login.
  authUrl.searchParams.set('prompt', 'consent');
};
