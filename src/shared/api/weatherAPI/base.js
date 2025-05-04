import axios from 'axios'

const weatherAPIInstance = axios.create({
  baseURL: import.meta.env.VITE_WEATHER_APP_API,
  headers: {
    'Content-Type': 'application/json',
    Accept: '*/*',
  },
})

export { weatherAPIInstance }
