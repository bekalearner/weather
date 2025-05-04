<script setup>
import { Container } from "@/shared";
import { WeatherWidget } from "@/widgets/weather";

</script>

<template>
  <main class="bg-primary-50 h-screen w-screen d-flex items-center">
    <container>
      <weather-widget/>
    </container>
  </main>
</template>