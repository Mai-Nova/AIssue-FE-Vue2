<template>
  <nav class="bg-white dark:bg-gray-800 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="flex-shrink-0 flex items-center">
            <router-link
              to="/dashboard"
              class="text-2xl font-bold text-gray-800 dark:text-white flex items-center"
            >
              <span class="text-emerald-500">AI</span>ssue
              <span class="ml-2 text-emerald-500">
                <GitBranchIcon size="20" />
              </span>
            </router-link>
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <router-link
              to="/dashboard"
              class="border-transparent text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              :class="{
                'border-emerald-500 text-gray-900 dark:text-white':
                  activePage === 'dashboard',
              }"
            >
              대시보드
            </router-link>
            <router-link
              to="/repositories"
              class="border-transparent text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              :class="{
                'border-emerald-500 text-gray-900 dark:text-white':
                  activePage === 'repositories',
              }"
            >
              저장소
            </router-link>
            <router-link
              to="/my-activity"
              class="border-transparent text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              :class="{
                'border-emerald-500 text-gray-900 dark:text-white':
                  activePage === 'my-activity',
              }"
            >
              나의 활동
            </router-link>
            <router-link
              to="/guide-bot"
              class="border-transparent text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              :class="{
                'border-emerald-500 text-gray-900 dark:text-white':
                  activePage === 'guide-bot',
              }"
            >
              개발 가이드 봇
            </router-link>
          </div>
        </div>
        <div class="hidden sm:ml-6 sm:flex sm:items-center">
          <button
            type="button"
            class="bg-white dark:bg-gray-800 p-1 rounded-full text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
          >
            <span class="sr-only">알림 보기</span>
            <BellIcon class="h-6 w-6" />
          </button>

          <!-- 프로필 드롭다운 -->
          <app-profile-dropdown />
        </div>
        <div class="-mr-2 flex items-center sm:hidden">
          <button
            @click="toggleMobileMenu"
            type="button"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span class="sr-only">메뉴 열기</span>
            <MenuIcon v-if="!mobileMenuOpen" class="block h-6 w-6" />
            <XIcon v-else class="block h-6 w-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- 모바일 메뉴 -->
    <app-mobile-menu :is-open="mobileMenuOpen" :active-page="activePage" />
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { BellIcon, MenuIcon, XIcon, GitBranchIcon } from '../utils/icons';
import AppProfileDropdown from './AppProfileDropdown.vue';
import AppMobileMenu from './AppMobileMenu.vue';

// props 정의
const props = defineProps({
  activePage: {
    type: String,
    required: true,
    validator: (value) =>
      [
        'dashboard',
        'repositories',
        'repository-detail',
        'my-activity',
        'guide-bot',
        'profile',
        'settings',
      ].includes(value),
  },
});

// 모바일 메뉴 상태 관리
const mobileMenuOpen = ref(false);
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};
</script>
