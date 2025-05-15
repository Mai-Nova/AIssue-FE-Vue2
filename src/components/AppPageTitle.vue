<template>
  <div class="px-4 sm:px-0 mb-6">
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 class="text-2xl font-semibold text-gray-900 dark:text-white">
          {{ title }}
        </h1>
        <p
          v-if="description"
          class="mt-1 text-sm text-gray-600 dark:text-gray-400"
        >
          {{ description }}
        </p>
      </div>
      <div class="mt-4 sm:mt-0">
        <slot name="actions"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
// props 정의
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
});
</script>
