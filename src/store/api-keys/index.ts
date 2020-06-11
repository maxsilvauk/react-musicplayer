import { thunk, action, persist } from 'easy-peasy';
import { apiKeyApi } from '~api/api-keys';
import { ApiKeysModel } from './types';

export * from './types';

export const apiKeysModel: ApiKeysModel = persist({

  loading: false,
  error: null,
  keys: [],

  setModel: action((state, payload) => {
    Object.assign(state, payload);
  }),

  addApiKey: action((state, apiKey) => {
    state.keys.push(apiKey);
  }),

  fetchApiKeys: thunk(async actions => {
    actions.setModel({ loading: true });
    try {
      const { apiKeys } = await apiKeyApi.getApiKeys();
      actions.setModel({ keys: apiKeys, loading: false, error: null });
    } catch (error) {
      console.log(error);
      actions.setModel({ keys: [], loading: false, error: error.message });
    }
  }),

  createApiKeys: thunk(async actions => {
    actions.setModel({ loading: true });
    try {
      const { apiKey } = await apiKeyApi.createApiKey();
      actions.addApiKey(apiKey);
      actions.setModel({ loading: false, error: null });
    } catch (error) {
      actions.setModel({ keys: [], loading: false, error: error.message });
    }
  })

}, {
  whitelist: ['keys']
});
