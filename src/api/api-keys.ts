import { instance } from './axiosInstance';
import { AxiosInstance } from 'axios';

class Api {

  constructor(private axios: AxiosInstance) {}

  async getApiKeys() {
    const response = await this.axios.get('/api-keys');
    return response.data.response;
  }

  async createApiKey() {
    const response = await this.axios.post('/api-key');
    return response.data.response;
  }

}

export const apiKeyApi = new Api(instance);
