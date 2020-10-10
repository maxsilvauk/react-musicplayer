import axios, { AxiosRequestConfig } from 'axios'

const getAccessToken = () => {
  const auth = JSON.parse(localStorage.getItem('auth'))
  return auth ? auth.accessToken : null
}

const config: AxiosRequestConfig = {
  baseURL: process.env.API_URL,
  responseType: 'json',
  headers: {
    Authorization: `Bearer ${getAccessToken()}`,
  },
}

export const instance = axios.create(config)
  