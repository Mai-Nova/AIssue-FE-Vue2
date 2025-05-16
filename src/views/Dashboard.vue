<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- 공통 레이아웃 컴포넌트 -->
    <AppLayout>
      <div class="p-6">
        <h1 class="text-2xl font-bold text-gray-800 dark:text-white mb-6">
          대시보드
        </h1>

        <!-- 맞춤형 이슈 추천 섹션 -->
        <section class="mb-8">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-lg font-semibold text-gray-700 dark:text-gray-200">
              맞춤형 이슈 추천
            </h2>
            <router-link
              to="/repositories"
              class="text-sm text-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 flex items-center"
            >
              더 보기
              <ChevronRightIcon class="ml-1" size="16" />
            </router-link>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              v-for="(issue, index) in recommendedIssues"
              :key="index"
              class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow"
            >
              <div class="flex items-start">
                <div class="mr-3 mt-1">
                  <AlertCircleIcon
                    v-if="issue.type === 'feature'"
                    size="18"
                    class="text-emerald-500"
                  />
                  <BugIcon
                    v-else-if="issue.type === 'bug'"
                    size="18"
                    class="text-red-500"
                  />
                  <HelpCircleIcon v-else size="18" class="text-blue-500" />
                </div>
                <div class="flex-1">
                  <div class="flex items-center justify-between">
                    <router-link
                      :to="`/issue/${issue.id}`"
                      class="text-sm font-medium text-gray-800 dark:text-white hover:text-emerald-500 dark:hover:text-emerald-400"
                    >
                      {{ issue.title }}
                    </router-link>
                    <span class="text-xs text-gray-500 dark:text-gray-400">{{
                      issue.repository
                    }}</span>
                  </div>
                  <div class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    <span
                      class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200"
                    >
                      AI 요약
                    </span>
                  </div>
                  <p
                    class="text-xs text-gray-600 dark:text-gray-300 mt-2 line-clamp-2"
                  >
                    {{ issue.summary }}
                  </p>
                  <div class="flex mt-2 space-x-2">
                    <span
                      v-for="(tag, tagIndex) in issue.tags"
                      :key="tagIndex"
                      class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium"
                      :class="getTagClass(tag.type)"
                    >
                      {{ tag.name }}
                    </span>
                    <span
                      class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium"
                      :class="getDifficultyClass(issue.difficulty)"
                    >
                      {{ issue.difficulty }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- 최근 해결 이슈 요약 섹션 -->
        <section class="mb-8">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-lg font-semibold text-gray-700 dark:text-gray-200">
              최근 해결한 이슈
            </h2>
            <router-link
              to="/my-activity"
              class="text-sm text-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 flex items-center"
            >
              더 보기
              <ChevronRightIcon class="ml-1" size="16" />
            </router-link>
          </div>

          <div
            v-if="recentSolvedIssues.length > 0"
            class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4"
          >
            <div
              v-for="(issue, index) in recentSolvedIssues"
              :key="index"
              class="py-3 border-b border-gray-100 dark:border-gray-700 last:border-0"
            >
              <div class="flex items-center justify-between">
                <router-link
                  :to="`/issue/${issue.id}`"
                  class="text-sm font-medium text-gray-800 dark:text-white hover:text-emerald-500 dark:hover:text-emerald-400"
                >
                  {{ issue.title }}
                </router-link>
                <span class="text-xs text-gray-500 dark:text-gray-400">{{
                  issue.solvedDate
                }}</span>
              </div>
              <div class="flex items-center mt-1">
                <span class="text-xs text-gray-500 dark:text-gray-400">{{
                  issue.repository
                }}</span>
                <span class="mx-2 text-gray-300 dark:text-gray-600">•</span>
                <span class="text-xs font-medium text-emerald-500"
                  >{{ issue.points }} 포인트</span
                >
              </div>
            </div>
          </div>

          <div
            v-else
            class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 text-center"
          >
            <div class="flex flex-col items-center">
              <CheckCircleIcon
                size="40"
                class="text-gray-300 dark:text-gray-600 mb-3"
              />
              <p class="text-gray-500 dark:text-gray-400">
                아직 해결한 이슈가 없습니다.
              </p>
              <router-link
                to="/repositories"
                class="mt-3 text-sm text-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400"
              >
                저장소 탐색하기
              </router-link>
            </div>
          </div>
        </section>

        <!-- 빠른 액세스 섹션 -->
        <section>
          <h2
            class="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4"
          >
            빠른 액세스
          </h2>

          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <router-link
              to="/repositories"
              class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow flex items-center"
            >
              <div
                class="w-10 h-10 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mr-4"
              >
                <GithubIcon size="20" class="text-emerald-500" />
              </div>
              <div>
                <h3 class="text-sm font-medium text-gray-800 dark:text-white">
                  저장소 관리
                </h3>
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  저장소 검색 및 분석
                </p>
              </div>
            </router-link>

            <router-link
              to="/guide-bot"
              class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow flex items-center"
            >
              <div
                class="w-10 h-10 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mr-4"
              >
                <MessageSquareIcon size="20" class="text-emerald-500" />
              </div>
              <div>
                <h3 class="text-sm font-medium text-gray-800 dark:text-white">
                  개발 가이드 봇
                </h3>
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  코드 컨벤션 질의응답
                </p>
              </div>
            </router-link>

            <router-link
              to="/my-activity"
              class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow flex items-center"
            >
              <div
                class="w-10 h-10 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mr-4"
              >
                <ActivityIcon size="20" class="text-emerald-500" />
              </div>
              <div>
                <h3 class="text-sm font-medium text-gray-800 dark:text-white">
                  나의 활동
                </h3>
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  해결한 이슈 및 점수 확인
                </p>
              </div>
            </router-link>
          </div>
        </section>
      </div>
    </AppLayout>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import {
  AlertCircle as AlertCircleIcon,
  Bug as BugIcon,
  HelpCircle as HelpCircleIcon,
  ChevronRight as ChevronRightIcon,
  CheckCircle as CheckCircleIcon,
  Github as GithubIcon,
  MessageSquare as MessageSquareIcon,
  Activity as ActivityIcon,
} from 'lucide-vue-next';
import AppLayout from '../components/AppLayout.vue';

// 맞춤형 이슈 추천 데이터 (실제 구현에서는 API에서 가져옵니다)
const recommendedIssues = ref([
  {
    id: '1',
    title: '모바일 뷰에서 인증 흐름 수정',
    repository: 'frontend/main-app',
    type: 'feature',
    summary:
      'OAuth에서 리디렉션 시 모바일 기기에서 인증 흐름이 깨집니다. 적절한 상태 관리와 반응형 디자인 수정이 필요합니다.',
    tags: [
      { name: 'React', type: 'tech' },
      { name: '인증', type: 'category' },
    ],
    difficulty: '중간',
  },
  {
    id: '2',
    title: '대시보드 컴포넌트 메모리 누수',
    repository: 'frontend/dashboard',
    type: 'bug',
    summary:
      '대시보드 컴포넌트가 이벤트 리스너를 제대로 정리하지 않아 메모리 누수가 발생합니다. useEffect 정리 함수 구현이 필요합니다.',
    tags: [
      { name: 'React', type: 'tech' },
      { name: '버그', type: 'category' },
    ],
    difficulty: '높음',
  },
]);

// 최근 해결한 이슈 데이터 (실제 구현에서는 API에서 가져옵니다)
const recentSolvedIssues = ref([
  {
    id: '3',
    title: '사용자 프로필 이미지 업로드 기능 구현',
    repository: 'frontend/user-profile',
    solvedDate: '2025-05-14',
    points: 120,
  },
]);

// 태그 유형에 따른 클래스 반환
const getTagClass = (type) => {
  switch (type) {
    case 'tech':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
    case 'category':
      return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
  }
};

// 난이도에 따른 클래스 반환
const getDifficultyClass = (difficulty) => {
  switch (difficulty) {
    case '낮음':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
    case '중간':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
    case '높음':
      return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
  }
};

onMounted(() => {
  // 실제 구현에서는 여기서 API 호출을 통해 데이터를 가져옵니다
  console.log('대시보드 컴포넌트가 마운트되었습니다.');
});
</script>
