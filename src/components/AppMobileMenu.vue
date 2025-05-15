<template>
  <div v-if="isOpen" class="sm:hidden" id="mobile-menu">
    <div class="pt-2 pb-3 space-y-1">
      <router-link
        to="/dashboard"
        class="border-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
        :class="{
          'bg-emerald-50 dark:bg-emerald-900 border-emerald-500 text-emerald-700 dark:text-emerald-200':
            activePage === 'dashboard',
        }"
      >
        대시보드
      </router-link>
      <router-link
        to="/repositories"
        class="border-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
        :class="{
          'bg-emerald-50 dark:bg-emerald-900 border-emerald-500 text-emerald-700 dark:text-emerald-200':
            activePage === 'repositories' || activePage === 'repository-detail',
        }"
      >
        저장소
      </router-link>
      <router-link
        to="/my-activity"
        class="border-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
        :class="{
          'bg-emerald-50 dark:bg-emerald-900 border-emerald-500 text-emerald-700 dark:text-emerald-200':
            activePage === 'my-activity',
        }"
      >
        나의 활동
      </router-link>
      <router-link
        to="/guide-bot"
        class="border-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
        :class="{
          'bg-emerald-50 dark:bg-emerald-900 border-emerald-500 text-emerald-700 dark:text-emerald-200':
            activePage === 'guide-bot',
        }"
      >
        개발 가이드 봇
      </router-link>
    </div>
    <div class="pt-4 pb-3 border-t border-gray-200 dark:border-gray-600">
      <div class="flex items-center px-4">
        <div class="flex-shrink-0">
          <img
            class="h-10 w-10 rounded-full"
            src="https://avatars.githubusercontent.com/u/12345678?v=4"
            alt="사용자 프로필"
          />
        </div>
        <div class="ml-3">
          <div class="text-base font-medium text-gray-800 dark:text-white">
            김개발
          </div>
          <div class="text-sm font-medium text-gray-500 dark:text-gray-400">
            dev@example.com
          </div>
        </div>
        <button
          type="button"
          class="ml-auto flex-shrink-0 bg-white dark:bg-gray-800 p-1 rounded-full text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
        >
          <span class="sr-only">알림 보기</span>
          <BellIcon class="h-6 w-6" />
        </button>
      </div>
      <div class="mt-3 space-y-1">
        <router-link
          to="/profile"
          class="block px-4 py-2 text-base font-medium text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          :class="{
            'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white':
              activePage === 'profile',
          }"
        >
          프로필
        </router-link>
        <router-link
          to="/settings"
          class="block px-4 py-2 text-base font-medium text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          :class="{
            'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white':
              activePage === 'settings',
          }"
        >
          설정
        </router-link>
        <button
          @click="logout"
          class="block w-full text-left px-4 py-2 text-base font-medium text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          로그아웃
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { BellIcon } from '../utils/icons';

// props 정의
const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  activePage: {
    type: String,
    required: true,
  },
});

// 로그아웃 함수
const logout = () => {
  // 로그아웃 로직 구현
  alert('로그아웃 기능이 구현될 예정입니다.');
};
</script>
