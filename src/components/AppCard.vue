<template>
  <div
    class="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-md"
    :class="{ 'border border-gray-200 dark:border-gray-700': hasBorder }"
  >
    <div
      v-if="title"
      class="px-4 py-5 sm:px-6 border-b border-gray-200 dark:border-gray-700"
    >
      <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-white">
        {{ title }}
      </h3>
      <p
        v-if="description"
        class="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400"
      >
        {{ description }}
      </p>
    </div>
    <div
      class="px-4 py-5 sm:p-6"
      :class="{ 'border-b border-gray-200 dark:border-gray-700': hasFooter }"
    >
      <slot></slot>
    </div>
    <div v-if="hasFooter" class="px-4 py-4 sm:px-6">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup>
import { useSlots } from 'vue';

const slots = useSlots();

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  hasBorder: {
    type: Boolean,
    default: false,
  },
});

const hasFooter = slots.footer !== undefined;
</script>
