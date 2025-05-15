<template>
  <footer class="bg-white dark:bg-gray-900">
    <div class="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
      <nav
        class="-mx-5 -my-2 flex flex-wrap justify-center"
        aria-label="Footer"
      >
        <div class="px-5 py-2">
          <router-link
            to="/"
            class="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300"
          >
            홈
          </router-link>
        </div>
        <div class="px-5 py-2">
          <router-link
            to="/privacy-policy"
            class="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300"
          >
            개인정보 처리방침
          </router-link>
        </div>
        <div class="px-5 py-2">
          <router-link
            to="/terms-of-service"
            class="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300"
          >
            이용약관
          </router-link>
        </div>
      </nav>
      <p class="mt-8 text-center text-base text-gray-500 dark:text-gray-400">
        &copy; 2023 AIssue. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script setup>
// 푸터는 정적이므로 추가적인 스크립트 필요 없음
</script>
