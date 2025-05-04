<script setup>
  import { Card, Descriptions } from '@/shared'
  import { useWeatherStore, WeatherCard, WeatherView } from '@/entities/weather'
  import { WeatherChangeCity } from '@/features/weather'
  import { computed } from 'vue'

  const store = useWeatherStore()

  const description = computed(() => {
    if (store.current.day) {
      return [
        { label: 'Влажность', value: store.current.day.avghumidity + ' %' },
        { label: 'Осадки', value: store.current.day.totalprecip_mm + ' мм' },
        { label: 'Ветер', value: store.current.day.maxwind_kph + ' км/ч' },
      ]
    }
    return []
  })

  const handleSubmit = (data) => {
    store.getWeather(data)
  }
</script>

<template>
  <div class="flex items-center">
    <weather-view :location="store.location" :data="store.current" />
    <card
      class="w-full rounded-l-none flex flex-col justify-center"
      style="height: 540px"
    >
      <div>
        <descriptions :data="description" />
        <div class="flex gap mb-40">
          <template v-for="(day, index) in store.forecastday" :key="index">
            <weather-card
              :id="day.id"
              :class="{
                'card-active': store.currentId === day.id,
              }"
              :code="day.day.condition.code"
              :temperature="day.day.maxtemp_c"
              :date="day.date"
              @click="(id) => store.setCurrentId(id)"
            />
          </template>
        </div>
        <weather-change-city
          :is-loading="store.isLoading"
          @submit="handleSubmit"
        />
      </div>
    </card>
  </div>
</template>

<style scoped></style>
