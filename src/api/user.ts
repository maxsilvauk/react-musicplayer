import { instance } from '~api/index'
import { AxiosInstance } from 'axios'

class UserApi {
  constructor(private axios: AxiosInstance) {}

  async getUserInfo() {
    const response = await this.axios.get('/me')
    return response.data.response
  }

  async getUserPlaylists() {
    const response = await this.axios.get('/playlists')
    return response.data.response
  }
}

export const userApi = new UserApi(instance)
