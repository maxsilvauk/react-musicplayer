import axios, { AxiosRequestConfig } from 'axios'

const config: AxiosRequestConfig = {
  baseURL: process.env.API_URL,
  responseType: 'json',
}

export const API = axios.create(config)
