import axios from 'axios'

const weatherAPIInstance = axios.create({
  baseURL: import.meta.env.VITE_WEATHER_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: '*/*',
  },
})

export { weatherAPIInstance }
