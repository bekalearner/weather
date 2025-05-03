import {ref} from "vue";
import { weatherService } from "@/entities/weather/api";

export const useWeather = () => {
  const isLoading = ref(false)

  const current = ref(null)
  const forecastday = ref([])
  const location = ref(null)

  const getWeather = async (params) => {
    isLoading.value = true
    try {
      const response = await weatherService.getWeather({ ...params,})
      current.value = {...response.data.current}
      forecastday.value = {...response.data.forecast.forecastday}
      location.value = {...response.data.location}
    }
    finally {
      isLoading.value = false
    }
  }

  return {
    isLoading,
    current,
    forecastday,
    location,
    getWeather
  }
}