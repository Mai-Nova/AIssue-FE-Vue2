<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <AppLayout>
      <div class="p-6">
        <div
          class="flex flex-col md:flex-row md:items-center md:justify-between mb-6"
        >
          <h1
            class="text-2xl font-bold text-gray-800 dark:text-white mb-4 md:mb-0"
          >
            저장소
          </h1>

          <div
            class="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3"
          >
            <div class="relative">
              <input
                v-model="searchQuery"
                type="text"
                placeholder="저장소 검색..."
                class="w-full sm:w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400"
                @keyup.enter="searchRepositories"
              />
              <SearchIcon
                class="absolute left-3 top-2.5 text-gray-400"
                size="18"
              />
            </div>

            <button
              @click="searchRepositories"
              class="flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              검색
            </button>
          </div>
        </div>

        <!-- 내 저장소 섹션 -->
        <section class="mb-8">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-lg font-semibold text-gray-700 dark:text-gray-200">
              내 저장소
            </h2>
          </div>

          <div
            v-if="myRepositories.length > 0"
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            <div
              v-for="repo in myRepositories"
              :key="repo.id"
              class="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div class="p-4">
                <div class="flex items-start justify-between">
                  <router-link
                    :to="`/repository/${repo.id}`"
                    class="text-base font-medium text-gray-800 dark:text-white hover:text-emerald-500 dark:hover:text-emerald-400 truncate max-w-[200px]"
                  >
                    {{ repo.name }}
                  </router-link>
                  <button
                    @click="removeFromMyRepositories(repo.id)"
                    class="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
                  >
                    <XCircleIcon size="18" />
                  </button>
                </div>
                <p
                  class="text-sm text-gray-500 dark:text-gray-400 mt-1 truncate"
                >
                  {{ repo.owner }}
                </p>
                <div class="flex items-center mt-3 space-x-4">
                  <div
                    class="flex items-center text-gray-500 dark:text-gray-400"
                  >
                    <StarIcon size="14" class="mr-1" />
                    <span class="text-xs">{{ repo.stars }}</span>
                  </div>
                  <div
                    class="flex items-center text-gray-500 dark:text-gray-400"
                  >
                    <GitForkIcon size="14" class="mr-1" />
                    <span class="text-xs">{{ repo.forks }}</span>
                  </div>
                  <div class="flex items-center">
                    <span
                      class="w-2 h-2 rounded-full mr-1"
                      :class="getLanguageColor(repo.language)"
                    ></span>
                    <span class="text-xs text-gray-500 dark:text-gray-400">{{
                      repo.language
                    }}</span>
                  </div>
                </div>
                <div
                  class="mt-4 pt-3 border-t border-gray-100 dark:border-gray-700"
                >
                  <div class="flex items-center justify-between">
                    <div
                      class="flex items-center text-gray-500 dark:text-gray-400"
                    >
                      <AlertCircleIcon size="14" class="mr-1" />
                      <span class="text-xs">{{ repo.openIssues }} 이슈</span>
                    </div>
                    <router-link
                      :to="`/repository/${repo.id}`"
                      class="text-xs text-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400"
                    >
                      분석 보기
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            v-else
            class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 text-center"
          >
            <div class="flex flex-col items-center">
              <GitRepoIcon
                size="40"
                class="text-gray-300 dark:text-gray-600 mb-3"
              />
              <p class="text-gray-500 dark:text-gray-400">
                아직 추가된 저장소가 없습니다.
              </p>
              <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
                저장소를 검색하여 추가해보세요.
              </p>
            </div>
          </div>
        </section>

        <!-- 검색 결과 섹션 -->
        <section v-if="hasSearched">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-lg font-semibold text-gray-700 dark:text-gray-200">
              검색 결과
            </h2>
          </div>

          <div v-if="isLoading" class="flex justify-center py-8">
            <div
              class="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-emerald-500"
            ></div>
          </div>

          <div
            v-else-if="searchResults.length > 0"
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            <div
              v-for="repo in searchResults"
              :key="repo.id"
              class="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div class="p-4">
                <div class="flex items-start justify-between">
                  <router-link
                    :to="`/repository/${repo.id}`"
                    class="text-base font-medium text-gray-800 dark:text-white hover:text-emerald-500 dark:hover:text-emerald-400 truncate max-w-[200px]"
                  >
                    {{ repo.name }}
                  </router-link>
                  <button
                    @click="addToMyRepositories(repo)"
                    class="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
                  >
                    <PlusCircleIcon size="18" />
                  </button>
                </div>
                <p
                  class="text-sm text-gray-500 dark:text-gray-400 mt-1 truncate"
                >
                  {{ repo.owner }}
                </p>
                <div class="flex items-center mt-3 space-x-4">
                  <div
                    class="flex items-center text-gray-500 dark:text-gray-400"
                  >
                    <StarIcon size="14" class="mr-1" />
                    <span class="text-xs">{{ repo.stars }}</span>
                  </div>
                  <div
                    class="flex items-center text-gray-500 dark:text-gray-400"
                  >
                    <GitForkIcon size="14" class="mr-1" />
                    <span class="text-xs">{{ repo.forks }}</span>
                  </div>
                  <div class="flex items-center">
                    <span
                      class="w-2 h-2 rounded-full mr-1"
                      :class="getLanguageColor(repo.language)"
                    ></span>
                    <span class="text-xs text-gray-500 dark:text-gray-400">{{
                      repo.language
                    }}</span>
                  </div>
                </div>
                <div
                  class="mt-4 pt-3 border-t border-gray-100 dark:border-gray-700"
                >
                  <div class="flex items-center justify-between">
                    <div
                      class="flex items-center text-gray-500 dark:text-gray-400"
                    >
                      <AlertCircleIcon size="14" class="mr-1" />
                      <span class="text-xs">{{ repo.openIssues }} 이슈</span>
                    </div>
                    <router-link
                      :to="`/repository/${repo.id}`"
                      class="text-xs text-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400"
                    >
                      분석하기
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            v-else
            class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 text-center"
          >
            <div class="flex flex-col items-center">
              <SearchIcon
                size="40"
                class="text-gray-300 dark:text-gray-600 mb-3"
              />
              <p class="text-gray-500 dark:text-gray-400">
                검색 결과가 없습니다.
              </p>
              <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
                다른 키워드로 검색해보세요.
              </p>
            </div>
          </div>
        </section>
      </div>
    </AppLayout>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import {
  Search as SearchIcon,
  BookMarked as GitRepoIcon,
  Star as StarIcon,
  GitFork as GitForkIcon,
  AlertCircle as AlertCircleIcon,
  XCircle as XCircleIcon,
  PlusCircle as PlusCircleIcon,
} from 'lucide-vue-next';
import applayout from '../components/AppLayout.vue';

const searchQuery = ref('');
const isLoading = ref(false);
const hasSearched = ref(false);
const searchResults = ref([]);
const myRepositories = ref([]);

// 저장소 검색 함수
const searchRepositories = async () => {
  if (!searchQuery.value.trim()) return;

  isLoading.value = true;
  hasSearched.value = true;

  try {
    // 실제 구현에서는 API 호출이 필요합니다
    // 예시 데이터로 대체합니다
    await new Promise((resolve) => setTimeout(resolve, 1000)); // 로딩 시뮬레이션

    searchResults.value = [
      {
        id: '101',
        name: 'react',
        owner: 'facebook',
        stars: 203000,
        forks: 42000,
        language: 'JavaScript',
        openIssues: 1200,
      },
      {
        id: '102',
        name: 'vue',
        owner: 'vuejs',
        stars: 203000,
        forks: 33000,
        language: 'JavaScript',
        openIssues: 580,
      },
      {
        id: '103',
        name: 'svelte',
        owner: 'sveltejs',
        stars: 68000,
        forks: 3400,
        language: 'TypeScript',
        openIssues: 250,
      },
    ];
  } catch (error) {
    console.error('저장소 검색 중 오류 발생:', error);
  } finally {
    isLoading.value = false;
  }
};

// 내 저장소에 추가
const addToMyRepositories = (repo) => {
  // 이미 추가된 저장소인지 확인
  if (!myRepositories.value.some((r) => r.id === repo.id)) {
    myRepositories.value.push(repo);
    // 실제 구현에서는 API 호출이 필요합니다
  }
};

// 내 저장소에서 제거
const removeFromMyRepositories = (repoId) => {
  myRepositories.value = myRepositories.value.filter(
    (repo) => repo.id !== repoId
  );
  // 실제 구현에서는 API 호출이 필요합니다
};

// 프로그래밍 언어에 따른 색상 반환
const getLanguageColor = (language) => {
  const colors = {
    JavaScript: 'bg-yellow-400',
    TypeScript: 'bg-blue-400',
    Python: 'bg-green-400',
    Java: 'bg-orange-400',
    'C#': 'bg-purple-400',
    PHP: 'bg-indigo-400',
    Ruby: 'bg-red-400',
    Go: 'bg-cyan-400',
    Rust: 'bg-amber-500',
    Swift: 'bg-pink-400',
  };

  return colors[language] || 'bg-gray-400';
};

onMounted(() => {
  // 실제 구현에서는 API에서 내 저장소 목록을 가져옵니다
  myRepositories.value = [
    {
      id: '201',
      name: 'next.js',
      owner: 'vercel',
      stars: 112000,
      forks: 24000,
      language: 'JavaScript',
      openIssues: 1800,
    },
    {
      id: '202',
      name: 'tailwindcss',
      owner: 'tailwindlabs',
      stars: 71000,
      forks: 3600,
      language: 'JavaScript',
      openIssues: 120,
    },
  ];
});
</script>
