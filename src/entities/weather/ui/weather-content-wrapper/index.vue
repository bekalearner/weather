<script setup>
  import { getWeatherCategory } from '@/shared/index.js'
  import { computed, ref, watch } from 'vue'

  const props = defineProps({
    code: {
      type: Number,
    },
  })

  const videoRef = ref(null)

  const weatherCategory = computed(() => {
    return getWeatherCategory(props.code)
  })

  watch(weatherCategory, () => {
    videoRef.value.load()
  })
</script>

<template>
  <div class="content-wrapper">
    <!-- Video Background -->
    <div class="video-background">
      <video ref="videoRef" autoplay muted loop class="background-video">
        <source :src="`/weather/bg/${weatherCategory}.mp4`" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

    <div class="content-overlay">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
  .content-wrapper {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }

  .content-wrapper::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
    background: var(--color-black);
    opacity: 0.6;
  }

  .video-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  .background-video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .content-overlay {
    position: relative;
    z-index: 1;
    padding: 20px;
    color: white;
    font-size: 24px;
    text-align: center;
  }
</style>
