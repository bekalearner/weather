<template>
  <div class="container d-flex flex-col justify-center">
    <slot/>
  </div>
</template>

<style scoped>
  .container {
    min-width: 1200px;
    min-height: 80vh;
    margin: 0 auto;
    padding: 0 20px;
  }
</style>