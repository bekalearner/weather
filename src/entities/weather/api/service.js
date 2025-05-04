import { fetch } from '@/shared'

const path = '/forecast.json'

class WeatherService {
  getWeather(data) {
    return fetch(path, 'get', data)
  }
}

export const weatherService = new WeatherService()
