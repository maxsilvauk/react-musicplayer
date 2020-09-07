import { instance } from '~api/index'
import { AxiosInstance } from 'axios'

class UserApi {
  constructor(private axios: AxiosInstance) {}

  async getUserInfo() {
    const response = await this.axios.get('/me')
    return response.data
  }

  async getUserPlaylists(userId: string) {
    const response = await this.axios.get(`/users/${userId}/playlists`)
    return response.data
  }

  async getUserPlaylistsSongs(userId: string, playlistId: string) {
    const response = await this.axios.get(`/users/${userId}/playlists/${playlistId}/tracks`)
    return response.data
  }

  async getUserAlbums() {
    const response = await this.axios.get(`/me/albums`)
    return response.data
  }

  async getUserSongs() {
    const response = await this.axios.get(`/me/tracks?limit=50`)
    return response.data
  }

  async addSongToLibrary(id: number) {
    const response = await this.axios.put(`/me/tracks?ids=${id}`)
    return response.data
  }
}

export const userApi = new UserApi(instance)
