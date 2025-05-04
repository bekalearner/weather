import { weatherAPIInstance } from '@/shared/api/weatherAPI/base'

const fetch = (path, method, body) => {
  return weatherAPIInstance({
    method,
    url: path,
    [method === 'get' ? 'params' : 'data']: {
      key: import.meta.env.VITE_WEATHER_API_KEY,
      ...body,
    },
  })
}

export { fetch }
