import { instance } from '~api/index'
import { AxiosInstance } from 'axios'

class UserApi {
  constructor(private axios: AxiosInstance) {}

  async getUserInfo() {
    const response = await this.axios.get('/me')
    return response.data
  }

  async getUserPlaylists(userId: any) {
    const response = await this.axios.get(`/users/${userId}/playlists`)
    console.log('response', response)
    return response.data
  }
}

export const userApi = new UserApi(instance)
