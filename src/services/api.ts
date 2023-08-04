import axios from "axios"
import { API_URL, API_ID } from '@env'
import { toJS } from "mobx"


export const api = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: 'application/json',
  },
})

api.interceptors.response.use(
  response => {
    console.log('response', toJS(response))
    return response
  },
  error => {
    console.log('error', toJS(error))
    return Promise.reject(error)
  }
)
