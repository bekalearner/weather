import { computed, ref } from 'vue'
import { weatherService } from '@/entities/weather/api'
import { defineStore } from 'pinia'

export const useWeatherStore = defineStore('WEATHER', () => {
  const isLoading = ref(false)

  const currentId = ref(0)
  const forecastday = ref([])
  const location = ref(null)

  const getWeather = async (params) => {
    isLoading.value = true
    try {
      const response = await weatherService.getWeather({ ...params })
      forecastday.value = response.data.forecast.forecastday.map(
        (day, index) => ({ id: index, ...day })
      )
      location.value = { ...response.data.location }
    } finally {
      isLoading.value = false
    }
  }

  const current = computed(() => {
    if (forecastday.value.length) {
      return forecastday.value[currentId.value]
    } else {
      return {}
    }
  })

  const setCurrentId = (id) => {
    currentId.value = id
  }

  return {
    isLoading,
    current,
    currentId,
    forecastday,
    location,
    getWeather,
    setCurrentId,
  }
})
