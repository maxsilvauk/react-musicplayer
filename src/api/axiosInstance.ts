import axios from 'axios';
const { cacheAdapterEnhancer, throttleAdapterEnhancer } = require('axios-extensions');
const { Auth } = require('@aws-amplify/auth');
const token = getIdToken();

export const instance = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    common: {
      'Cache-Control': 'no-cache',
      'Content-Type': 'application/json',
      ...token && { Authorization: `Bearer ${token}` }
    }
  },
  adapter: throttleAdapterEnhancer(cacheAdapterEnhancer(axios.defaults.adapter))
});

function getIdToken() {
  const storage = Auth._storage;
  const idTokenKey = Object.keys(storage).find(key => key.match(/idToken$/));

  return idTokenKey ? storage[idTokenKey] : null;
}
