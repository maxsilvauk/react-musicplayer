import queryString from 'query-string';

export const checkAuth = () => {
  const parsed = queryString.parse(window.location.search).access_token;
  return parsed;
};
