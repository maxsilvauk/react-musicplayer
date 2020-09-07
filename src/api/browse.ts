import { instance } from '~api/index'
import { AxiosInstance } from 'axios'

class BrowseApi {
  constructor(private axios: AxiosInstance) {}

  async getCategories() {
    const response = await this.axios.get('/browse/categories')
    return response.data
  }

  async getNewReleases() {
    const response = await this.axios.get(`/browse/new-releases`)
    return response.data
  }

  async getFeatured() {
    const response = await this.axios.get(`/browse/featured-playlists`)
    return response.data
  }
}

export const userApi = new BrowseApi(instance)
