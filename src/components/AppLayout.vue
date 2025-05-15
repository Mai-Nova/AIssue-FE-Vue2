<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <app-navbar :active-page="activePage" />

    <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <slot></slot>
    </main>

    <app-footer v-if="showFooter" />
  </div>
</template>

<script setup>
import AppNavbar from './AppNavbar.vue';
import AppFooter from './AppFooter.vue';

const props = defineProps({
  // 현재 활성화된 페이지 (네비게이션 강조 표시에 사용)
  activePage: {
    type: String,
    required: true,
  },
  // 푸터 표시 여부
  showFooter: {
    type: Boolean,
    default: true,
  },
});
</script>
