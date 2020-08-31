import axios, { AxiosRequestConfig } from 'axios'

const getAccessToken = () => {
  const auth = JSON.parse(localStorage.getItem('auth'))
  return auth ? auth.accessToken : null
}

const token = getAccessToken()

const config: AxiosRequestConfig = {
  baseURL: process.env.API_URL,
  responseType: 'json',
  headers: {
    Authorization: `Bearer ${token}`,
  },
}

export const instance = axios.create(config)
