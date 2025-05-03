<script setup>
import { reactive } from "vue";
import { Button, Input, useIsOpened } from "@/shared/index.js";
import { X, MapPin } from "lucide-vue-next";

const emit = defineEmits(['submit'])
defineProps({
  isLoading: {
    type: Boolean,
    default: false,
  }
})
const { isOpened, close, open } = useIsOpened()
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
  <Button v-show="!isOpened" type="gradient" fullsize @click="open">
    Изменить город
    <template #icon="{ size }">
      <MapPin :size="size"/>
    </template>
  </Button>
  <form v-show="isOpened" class="w-full d-flex gap-4" @submit.prevent>
    <Input
      v-model="formData.q"
      placeholder="Введите город"
      type="text"
      size="medium"
      style="flex: 0 0 70%;"
      @keyup.enter="handleSubmit"/>
    <Button type="gradient" size="medium" fullsize :loading="isLoading" @click="handleSubmit">
      Сохранить
    </Button>
    <Button style="flex: 0 0 5%" type="danger" size="medium" fullsize @click="close">
      <template #icon="{ size }">
        <X :size="size"/>
      </template>
    </Button>
  </form>
</template>

<style scoped>

</style>