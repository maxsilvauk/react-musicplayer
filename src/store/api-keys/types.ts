import { Action, Thunk } from 'easy-peasy';

export interface ApiKey {
  id: string;
  apiKey: string;
  subscription: string;
  customSubscription: string;
  tenantId: string;
  createdAt: string;
}

export interface ApiKeysModel {
  loading: boolean;
  error: string;
  keys: ApiKey[];
  setModel: Action<ApiKeysModel, Partial<Pick<ApiKeysModel, 'keys' | 'error' | 'loading'>>>;
  addApiKey: Action<ApiKeysModel, ApiKey>;
  fetchApiKeys: Thunk<ApiKeysModel, { limit?: number, offset?: number } | void>;
  createApiKeys: Thunk<ApiKeysModel>;
}