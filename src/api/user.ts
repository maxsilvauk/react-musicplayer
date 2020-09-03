import { instance } from '~api/index'
import { AxiosInstance } from 'axios'

class UserApi {
  constructor(private axios: AxiosInstance) {}

  async getUserInfo() {
    const response = await this.axios.get('/me')
    return response.data
  }

  async getUserPlaylists() {
    const response = await this.axios.get('/playlists')
    return response.data
  }
}

export const userApi = new UserApi(instance)
