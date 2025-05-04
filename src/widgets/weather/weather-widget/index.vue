<script setup>
import { Card, Descriptions } from "@/shared";
import { useWeather, WeatherCard, WeatherView } from "@/entities/weather";
import { WeatherChangeCity } from "@/features/weather";
import {computed, onBeforeMount} from "vue";

const { getWeather, isLoading, location, forecastday } = useWeather()

const description = computed(() => {
  if (forecastday.value[0]) {
    return [
      {label: 'Влажность', value: forecastday.value[0].day.avghumidity + ' %'},
      {label: 'Осадки', value: forecastday.value[0].day.totalprecip_mm + ' мм'},
      {label: 'Ветер', value: forecastday.value[0].day.maxwind_kph+ ' км/ч'},
    ]
  }
  return []
})

const handleSubmit = (data) => {
  getWeather(data)
}

onBeforeMount(() => {
  getWeather({
    q: 'Бишкек',
    lang: 'ru',
    days: 4,
  })
})
</script>

<template>
  <div class="d-flex">
    <weather-view :location="location" :data="forecastday[0]"/>
    <card class="w-full rounded-l-none">
      <descriptions :data="description"/>
      <div class="d-flex gap mb-40">
        <template v-for="(day, index) in forecastday" :key="index">
          <weather-card :code="day.day.condition.code" :temperature="day.day.maxtemp_c" :date="day.date"/>
        </template>
      </div>
      <weather-change-city @submit="handleSubmit" :is-loading="isLoading"/>
    </card>
  </div>
</template>

<style scoped>

</style>