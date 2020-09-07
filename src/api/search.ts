import { instance } from '~api/index'
import { AxiosInstance } from 'axios'

class SearchApi {
  constructor(private axios: AxiosInstance) {}

  async searchSongs(searchTerm: string) {
    const response = await this.axios.get(`/search/q=${searchTerm}&type=track`)
    return response.data
  }
}

export const artistsApi = new SearchApi(instance)
