import { instance } from '~api/index'
import { AxiosInstance } from 'axios'

class ArtistsApi {
  constructor(private axios: AxiosInstance) {}

  async getArtists(artistsIds: string) {
    const response = await this.axios.get(`/artists/${artistsIds}`)
    return response.data
  }
}

export const artistsApi = new ArtistsApi(instance)
