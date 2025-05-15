<template>
  <div class="ml-3 relative">
    <div>
      <button
        @click="isOpen = !isOpen"
        type="button"
        class="bg-white dark:bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
        id="user-menu-button"
        aria-expanded="false"
        aria-haspopup="true"
      >
        <span class="sr-only">프로필 메뉴 열기</span>
        <img
          class="h-8 w-8 rounded-full"
          src="https://avatars.githubusercontent.com/u/12345678?v=4"
          alt="사용자 프로필"
        />
      </button>
    </div>
    <div
      v-if="isOpen"
      class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="user-menu-button"
      tabindex="-1"
    >
      <router-link
        to="/profile"
        class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
        role="menuitem"
        @click="isOpen = false"
        >프로필</router-link
      >
      <router-link
        to="/settings"
        class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
        role="menuitem"
        @click="isOpen = false"
        >설정</router-link
      >
      <button
        @click="handleLogout"
        class="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
        role="menuitem"
      >
        로그아웃
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

// 로그아웃 핸들러
const handleLogout = () => {
  // 로그아웃 로직 구현
  alert('로그아웃 기능이 구현될 예정입니다.');
  isOpen.value = false;
};
</script>
