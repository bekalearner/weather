<script setup>
import {computed, defineProps} from 'vue'

  const props = defineProps({
    appearance: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'secondary', 'danger', 'success', 'warning', 'info', 'gradient'].includes(value)
    },
    size: {
      type: String,
      default: 'medium',
      validator: (value) => ['small', 'medium', 'large'].includes(value)
    },
    disabled: Boolean,
    fullsize: Boolean,
    loading: Boolean,
  })

  const iconSize = computed(() => {
    switch (props.size) {
      case 'small':
        return '1.15rem'
      case 'medium':
        return '1.25rem'
      case 'large':
        return '1.40rem'
      default:
        return '1.25rem'
    }
  })
</script>

<template>
  <button
    :class="{
      'text-white bg-primary-50': appearance === 'primary',
      'text-white bg-secondary-50': appearance === 'secondary',
      'text-white bg-danger-50': appearance === 'danger',
      'text-white bg-success-50': appearance ==='success',
      'text-white bg-warning-50': appearance === 'warning',
      'text-white bg-info-50': appearance === 'info',
      'text-white bg-gradient': appearance === 'gradient',

      'btn btn-sm': size === 'small',
      'btn btn-md': size === 'medium',
      'btn btn-lg': size === 'large',

      'w-full': fullsize,

    }"
    :disabled="disabled"
  >
    <span class="d-flex justify-center items-center" :style="{ visibility: loading ? 'hidden' : 'visible'}">
      <slot/>
    </span>
    <span class="d-flex justify-center items-center">
      <slot :size="iconSize" name="icon"/>
    </span>
    <span
      :class="loading && 'spinner'"
    ></span>
  </button>
</template>

<style scoped>
.btn {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  border: none;
}

.btn-sm {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  border-radius: 0.375rem;
}

.btn-md {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 0.5rem;
}

.btn-lg {
  padding: 1rem 2rem;
  font-size: 1.125rem;
  border-radius: 0.75rem;
}

.spinner {
  position: absolute;
  width: 1.25em;
  height: 1.25em;
  border: 0.2em solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 0.8s linear infinite;
  display: inline-block;
}

.btn-sm .spinner {
  width: 1em;
  height: 1em;
  border-width: 0.15em;
}

.btn-lg .spinner {
  width: 1.5em;
  height: 1.5em;
  border-width: 0.25em;
}


button {
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  border: none;
}

button:disabled {
  opacity: 0.65;
  cursor: not-allowed;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>