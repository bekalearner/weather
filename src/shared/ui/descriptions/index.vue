<script setup>
  import { onMounted, useSlots } from 'vue'
  import DescriptionsItem from './parts/descriptions-item.vue'

  const props = defineProps({
    data: {
      type: Array,
      required: true,
    },
    title: String,
    size: {
      type: String,
      default: 'medium',
      validator: (value) => ['small', 'medium', 'large'].includes(value),
    },
  })

  const slots = useSlots()

  onMounted(() => {
    const defaultSlot = slots.default?.()
    if (defaultSlot) {
      const invalidComponents = defaultSlot.filter(
        (vnode) =>
          vnode.type !== DescriptionsItem && !(typeof vnode.type === 'symbol')
      )

      if (invalidComponents.length > 0) {
        console.warn(
          'Only DescriptionsItem components are allowed as slots in this component'
        )
      }
    }
  })
</script>

<template>
  <div class="p-24 pt-0 text-white">
    <h3
      v-show="title"
      class="font-extrabold mb-16"
      :class="{
        'text-xl': props.size === 'small',
        'text-2xl': props.size === 'medium',
        'text-3xl': props.size === 'large',
      }"
    >
      {{ title }}
    </h3>

    <DescriptionsItem
      v-for="(description, index) in data"
      :key="index"
      :label="description.label"
      :value="description.value"
      :size="props.size"
    />
    <slot />
  </div>
</template>
