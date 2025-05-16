<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <AppLayout>
      <div class="p-6">
        <h1 class="text-2xl font-bold text-gray-800 dark:text-white mb-6">
          프로필
        </h1>

        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-6">
          <div class="flex flex-col md:flex-row items-start md:items-center">
            <div class="mb-4 md:mb-0 md:mr-6">
              <div class="relative">
                <img
                  :src="user.avatar"
                  alt="프로필 이미지"
                  class="w-24 h-24 rounded-full"
                />
                <button
                  class="absolute bottom-0 right-0 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full p-1.5 transition-colors"
                >
                  <PencilIcon size="14" />
                </button>
              </div>
            </div>

            <div class="flex-1">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >이름</label
                  >
                  <input
                    v-model="user.name"
                    type="text"
                    class="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400"
                  />
                </div>

                <div>
                  <label
                    class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >이메일</label
                  >
                  <input
                    v-model="user.email"
                    type="email"
                    class="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400"
                    disabled
                  />
                </div>

                <div>
                  <label
                    class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >GitHub 사용자명</label
                  >
                  <input
                    v-model="user.githubUsername"
                    type="text"
                    class="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400"
                    disabled
                  />
                </div>

                <div>
                  <label
                    class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >가입일</label
                  >
                  <input
                    v-model="user.joinDate"
                    type="text"
                    class="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400"
                    disabled
                  />
                </div>
              </div>

              <div class="mt-4">
                <label
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >소개</label
                >
                <textarea
                  v-model="user.bio"
                  rows="3"
                  class="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400"
                ></textarea>
              </div>

              <div class="mt-4 flex justify-end">
                <button
                  @click="saveProfile"
                  class="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-colors"
                >
                  저장
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- 활동 통계 -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-6">
          <h2
            class="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4"
          >
            활동 통계
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <h3
                class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1"
              >
                총 해결 이슈
              </h3>
              <div class="text-2xl font-bold text-gray-800 dark:text-white">
                {{ stats.solvedIssues }}
              </div>
            </div>
            <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <h3
                class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1"
              >
                총 획득 점수
              </h3>
              <div class="text-2xl font-bold text-emerald-500">
                {{ stats.totalPoints }}
              </div>
            </div>
            <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <h3
                class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1"
              >
                분석한 저장소
              </h3>
              <div class="text-2xl font-bold text-gray-800 dark:text-white">
                {{ stats.analyzedRepositories }}
              </div>
            </div>
          </div>
        </div>

        <!-- GitHub 연결 정보 -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <h2
            class="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4"
          >
            GitHub 연결 정보
          </h2>

          <div
            class="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
          >
            <div class="flex items-center">
              <GithubIcon
                size="24"
                class="text-gray-800 dark:text-white mr-3"
              />
              <div>
                <div class="text-sm font-medium text-gray-800 dark:text-white">
                  GitHub
                </div>
                <div class="text-xs text-gray-500 dark:text-gray-400">
                  {{ user.githubUsername }}
                </div>
              </div>
            </div>
            <div class="flex items-center">
              <span
                class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 mr-3"
              >
                연결됨
              </span>
              <button
                class="text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <RefreshCwIcon size="18" />
              </button>
            </div>
          </div>

          <div class="mt-4 text-sm text-gray-500 dark:text-gray-400">
            <p>
              GitHub 계정 연결을 통해 저장소 및 이슈 정보에 접근합니다. 권한
              범위: <code>user</code>, <code>repo</code>
            </p>
          </div>
        </div>
      </div>
    </AppLayout>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import {
  Github as GithubIcon,
  Pencil as PencilIcon,
  RefreshCw as RefreshCwIcon,
} from 'lucide-vue-next';
import applayout from '../components/AppLayout.vue';

// 사용자 정보 (실제 구현에서는 API에서 가져옵니다)
const user = ref({
  name: '홍길동',
  email: 'user@example.com',
  githubUsername: 'honggildong',
  joinDate: '2025년 5월 1일',
  bio: '프론트엔드 개발자입니다. React, Vue, TypeScript를 주로 사용합니다.',
  avatar: 'https://ui-avatars.com/api/?name=홍길동&background=0D9488&color=fff',
});

// 활동 통계 (실제 구현에서는 API에서 가져옵니다)
const stats = ref({
  solvedIssues: 3,
  totalPoints: 355,
  analyzedRepositories: 2,
});

// 프로필 저장
const saveProfile = async () => {
  // 실제 구현에서는 API 호출이 필요합니다
  alert('프로필이 저장되었습니다.');
};

onMounted(() => {
  // 실제 구현에서는 API에서 데이터를 가져옵니다
  console.log('프로필 컴포넌트가 마운트되었습니다.');
});
</script>
