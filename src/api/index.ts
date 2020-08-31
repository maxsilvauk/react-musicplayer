import axios, { AxiosRequestConfig } from 'axios'

const getAccessToken = () => {
  const auth = JSON.parse(localStorage.getItem('auth'))
  return auth.accessToken
}

const token = getAccessToken()

const config: AxiosRequestConfig = {
  baseURL: process.env.API_URL,
  responseType: 'json',
  headers: {
    common: {
      'Cache-Control': 'no-cache',
      'Content-Type': 'application/json',
      ...(token && { Authorization: `BEARER ${token}` }),
    },
  },
}

export const instance = axios.create(config)
