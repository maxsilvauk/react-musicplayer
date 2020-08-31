import { instance } from '~api/index'
import { AxiosInstance } from 'axios'

class Api {
  constructor(private axios: AxiosInstance) {}

  async getUserData() {
    const response = await this.axios.get('/me')
    return response.data.response
  }

  async getUserPlaylists() {
    const response = await this.axios.get('/playlists')
    return response.data.response
  }
}

export const userApi = new Api(instance)
