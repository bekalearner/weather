<script setup>
  import { weatherCodes } from '@/shared'
  import { getWeatherIcon } from './utils/get-weather-icon.js'
  import {
    Sun,
    MoonStar,
    Cloud,
    CloudSun,
    CloudMoon,
    Cloudy,
    CloudFog,
    CloudDrizzle,
    CloudSnow,
    CloudHail,
    CloudLightning,
    CloudRain,
    CloudRainWind,
    CloudSunRain,
    CloudMoonRain,
  } from 'lucide-vue-next'

  const iconComponents = {
    sun: Sun,
    'moon-star': MoonStar,
    cloud: Cloud,
    'cloud-sun': CloudSun,
    'cloud-moon': CloudMoon,
    cloudy: Cloudy,
    'cloud-fog': CloudFog,
    'cloud-drizzle': CloudDrizzle,
    'cloud-snow': CloudSnow,
    'cloud-hail': CloudHail,
    'cloud-lightning': CloudLightning,
    'cloud-rain': CloudRain,
    'cloud-rain-wind': CloudRainWind,
    'cloud-sun-rain': CloudSunRain,
    'cloud-moon-rain': CloudMoonRain,
  }

  const props = defineProps({
    code: {
      type: Number,
      default: 1000,
    },
    size: {
      type: Number,
      default: 24,
    },
  })

  const getIcon = (code) => {
    const iconName = getWeatherIcon(code)
    return iconComponents[iconName]
  }
</script>

<template>
  <component
    :is="
      getIcon(typeof props.code === 'string' ? Number(props.code) : props.code)
    "
    :size="size"
    :stroke-width="2"
  />
</template>

<style scoped></style>
