<template>
  <div class="flex h-screen bg-gray-50 dark:bg-gray-900">
    <!-- 사이드바 (데스크톱) -->
    <aside
      class="hidden md:flex md:flex-col md:w-64 bg-white dark:bg-gray-800 shadow-sm"
    >
      <div class="p-4 border-b border-gray-100 dark:border-gray-700">
        <router-link
          to="/dashboard"
          class="text-xl font-bold text-gray-800 dark:text-white flex items-center"
        >
          <span class="text-emerald-500">AI</span>ssue
          <span class="ml-2 text-emerald-500">
            <GitBranchIcon size="18" />
          </span>
        </router-link>
      </div>

      <nav class="flex-1 overflow-y-auto p-4">
        <ul class="space-y-2">
          <li>
            <router-link
              to="/dashboard"
              class="flex items-center px-3 py-2 text-sm font-medium rounded-md"
              :class="[
                $route.path === '/dashboard'
                  ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900 dark:text-emerald-200'
                  : 'text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700',
              ]"
            >
              <LayoutDashboardIcon size="18" class="mr-3" />
              대시보드
            </router-link>
          </li>
          <li>
            <router-link
              to="/repositories"
              class="flex items-center px-3 py-2 text-sm font-medium rounded-md"
              :class="[
                $route.path.includes('/repositories') ||
                $route.path.includes('/repository')
                  ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900 dark:text-emerald-200'
                  : 'text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700',
              ]"
            >
              <GithubIcon size="18" class="mr-3" />
              저장소
            </router-link>
          </li>
          <li>
            <router-link
              to="/my-activity"
              class="flex items-center px-3 py-2 text-sm font-medium rounded-md"
              :class="[
                $route.path === '/my-activity'
                  ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900 dark:text-emerald-200'
                  : 'text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700',
              ]"
            >
              <ActivityIcon size="18" class="mr-3" />
              나의 활동
            </router-link>
          </li>
          <li>
            <router-link
              to="/guide-bot"
              class="flex items-center px-3 py-2 text-sm font-medium rounded-md"
              :class="[
                $route.path === '/guide-bot'
                  ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900 dark:text-emerald-200'
                  : 'text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700',
              ]"
            >
              <MessageSquareIcon size="18" class="mr-3" />
              개발 가이드 봇
            </router-link>
          </li>
        </ul>

        <div class="mt-8">
          <h3
            class="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider"
          >
            설정
          </h3>
          <ul class="mt-2 space-y-2">
            <li>
              <router-link
                to="/profile"
                class="flex items-center px-3 py-2 text-sm font-medium rounded-md"
                :class="[
                  $route.path === '/profile'
                    ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900 dark:text-emerald-200'
                    : 'text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700',
                ]"
              >
                <UserIcon size="18" class="mr-3" />
                프로필
              </router-link>
            </li>
            <li>
              <router-link
                to="/settings"
                class="flex items-center px-3 py-2 text-sm font-medium rounded-md"
                :class="[
                  $route.path === '/settings'
                    ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900 dark:text-emerald-200'
                    : 'text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700',
                ]"
              >
                <SettingsIcon size="18" class="mr-3" />
                설정
              </router-link>
            </li>
          </ul>
        </div>
      </nav>

      <div class="p-4 border-t border-gray-100 dark:border-gray-700">
        <div class="flex items-center">
          <img
            :src="user.avatar"
            alt="프로필 이미지"
            class="w-8 h-8 rounded-full mr-3"
          />
          <div class="flex-1 min-w-0">
            <p
              class="text-sm font-medium text-gray-800 dark:text-white truncate"
            >
              {{ user.name }}
            </p>
            <p class="text-xs text-gray-500 dark:text-gray-400 truncate">
              {{ user.email }}
            </p>
          </div>
          <button
            @click="logout"
            class="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
          >
            <LogOutIcon size="18" />
          </button>
        </div>
      </div>
    </aside>

    <!-- 모바일 헤더 -->
    <div
      class="md:hidden fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-sm z-10"
    >
      <div class="flex items-center justify-between p-4">
        <button
          @click="isMobileMenuOpen = true"
          class="text-gray-500 dark:text-gray-400"
        >
          <MenuIcon size="24" />
        </button>
        <router-link
          to="/dashboard"
          class="text-xl font-bold text-gray-800 dark:text-white flex items-center"
        >
          <span class="text-emerald-500">AI</span>ssue
          <span class="ml-2 text-emerald-500">
            <GitBranchIcon size="18" />
          </span>
        </router-link>
        <router-link to="/profile">
          <img
            :src="user.avatar"
            alt="프로필 이미지"
            class="w-8 h-8 rounded-full"
          />
        </router-link>
      </div>
    </div>

    <!-- 모바일 메뉴 -->
    <div
      v-if="isMobileMenuOpen"
      class="md:hidden fixed inset-0 z-20 bg-gray-900 bg-opacity-50"
    >
      <div
        class="fixed inset-y-0 left-0 w-64 bg-white dark:bg-gray-800 shadow-lg"
      >
        <div
          class="flex justify-between items-center p-4 border-b border-gray-100 dark:border-gray-700"
        >
          <router-link
            to="/dashboard"
            class="text-xl font-bold text-gray-800 dark:text-white flex items-center"
          >
            <span class="text-emerald-500">AI</span>ssue
            <span class="ml-2 text-emerald-500">
              <GitBranchIcon size="18" />
            </span>
          </router-link>
          <button
            @click="isMobileMenuOpen = false"
            class="text-gray-500 dark:text-gray-400"
          >
            <XIcon size="24" />
          </button>
        </div>

        <nav class="p-4">
          <ul class="space-y-2">
            <li>
              <router-link
                @click="isMobileMenuOpen = false"
                to="/dashboard"
                class="flex items-center px-3 py-2 text-sm font-medium rounded-md"
                :class="[
                  $route.path === '/dashboard'
                    ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900 dark:text-emerald-200'
                    : 'text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700',
                ]"
              >
                <LayoutDashboardIcon size="18" class="mr-3" />
                대시보드
              </router-link>
            </li>
            <li>
              <router-link
                @click="isMobileMenuOpen = false"
                to="/repositories"
                class="flex items-center px-3 py-2 text-sm font-medium rounded-md"
                :class="[
                  $route.path.includes('/repositories') ||
                  $route.path.includes('/repository')
                    ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900 dark:text-emerald-200'
                    : 'text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700',
                ]"
              >
                <GithubIcon size="18" class="mr-3" />
                저장소
              </router-link>
            </li>
            <li>
              <router-link
                @click="isMobileMenuOpen = false"
                to="/my-activity"
                class="flex items-center px-3 py-2 text-sm font-medium rounded-md"
                :class="[
                  $route.path === '/my-activity'
                    ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900 dark:text-emerald-200'
                    : 'text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700',
                ]"
              >
                <ActivityIcon size="18" class="mr-3" />
                나의 활동
              </router-link>
            </li>
            <li>
              <router-link
                @click="isMobileMenuOpen = false"
                to="/guide-bot"
                class="flex items-center px-3 py-2 text-sm font-medium rounded-md"
                :class="[
                  $route.path === '/guide-bot'
                    ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900 dark:text-emerald-200'
                    : 'text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700',
                ]"
              >
                <MessageSquareIcon size="18" class="mr-3" />
                개발 가이드 봇
              </router-link>
            </li>
          </ul>

          <div class="mt-8">
            <h3
              class="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider"
            >
              설정
            </h3>
            <ul class="mt-2 space-y-2">
              <li>
                <router-link
                  @click="isMobileMenuOpen = false"
                  to="/profile"
                  class="flex items-center px-3 py-2 text-sm font-medium rounded-md"
                  :class="[
                    $route.path === '/profile'
                      ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900 dark:text-emerald-200'
                      : 'text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700',
                  ]"
                >
                  <UserIcon size="18" class="mr-3" />
                  프로필
                </router-link>
              </li>
              <li>
                <router-link
                  @click="isMobileMenuOpen = false"
                  to="/settings"
                  class="flex items-center px-3 py-2 text-sm font-medium rounded-md"
                  :class="[
                    $route.path === '/settings'
                      ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900 dark:text-emerald-200'
                      : 'text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700',
                  ]"
                >
                  <SettingsIcon size="18" class="mr-3" />
                  설정
                </router-link>
              </li>
            </ul>
          </div>
        </nav>

        <div
          class="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100 dark:border-gray-700"
        >
          <div class="flex items-center">
            <img
              :src="user.avatar"
              alt="프로필 이미지"
              class="w-8 h-8 rounded-full mr-3"
            />
            <div class="flex-1 min-w-0">
              <p
                class="text-sm font-medium text-gray-800 dark:text-white truncate"
              >
                {{ user.name }}
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-400 truncate">
                {{ user.email }}
              </p>
            </div>
            <button
              @click="logout"
              class="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
            >
              <LogOutIcon size="18" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- 메인 콘텐츠 -->
    <main class="flex-1 overflow-y-auto md:ml-64 md:pt-0 pt-16">
      <slot></slot>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import {
  GitBranch as GitBranchIcon,
  LayoutDashboard as LayoutDashboardIcon,
  Github as GithubIcon, // BookMarked as GitRepoIcon 에서 Github as GithubIcon 으로 변경
  Activity as ActivityIcon,
  MessageSquare as MessageSquareIcon,
  User as UserIcon,
  Settings as SettingsIcon,
  LogOut as LogOutIcon,
  Menu as MenuIcon,
  X as XIcon,
} from 'lucide-vue-next';

const route = useRoute();
const router = useRouter();
const isMobileMenuOpen = ref(false);

// 사용자 정보 (실제 구현에서는 상태 관리 라이브러리나 API에서 가져옵니다)
const user = ref({
  name: '홍길동',
  email: 'user@example.com',
  avatar: 'https://ui-avatars.com/api/?name=홍길동&background=0D9488&color=fff',
});

// 로그아웃 함수
const logout = () => {
  // 실제 구현에서는 인증 토큰 제거 및 API 호출이 필요합니다
  localStorage.removeItem('auth_token');
  router.push('/');
};
</script>
