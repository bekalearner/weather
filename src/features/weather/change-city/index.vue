<script setup>
  import { reactive } from 'vue'
  import { Button, Input, useIsOpened } from '@/shared/index.js'
  import { MapPin } from 'lucide-vue-next'

  const emit = defineEmits(['submit'])
  defineProps({
    isLoading: {
      type: Boolean,
      default: false,
    },
  })
  const { isOpened, open } = useIsOpened()
  const formData = reactive({
    q: '',
    lang: 'ru',
    days: 4,
  })

  function handleSubmit() {
    emit('submit', formData)
    formData.q = ''
  }
</script>

<template>
  <Button v-show="!isOpened" appearance="gradient" fullsize @click="open">
    Изменить город
    <template #icon="{ size }">
      <MapPin :size="size" />
    </template>
  </Button>
  <form
    v-show="isOpened"
    class="w-full flex gap-4"
    @submit.prevent="handleSubmit"
  >
    <Input
      v-model="formData.q"
      placeholder="Введите город"
      type="text"
      size="medium"
      required
    />
    <div class="flex">
      <Button
        type="submit"
        appearance="gradient"
        size="medium"
        fullsize
        :loading="isLoading"
      >
        Сохранить
      </Button>
      <!--      <Button appearance="danger" size="medium" fullsize @click="close">-->
      <!--        <template #icon="{ size }">-->
      <!--          <X :size="size"/>-->
      <!--        </template>-->
      <!--      </Button>-->
    </div>
  </form>
</template>

<style scoped></style>
