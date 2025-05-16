<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <AppLayout>
      <div class="p-6">
        <h1 class="text-2xl font-bold text-gray-800 dark:text-white mb-6">
          나의 활동
        </h1>

        <!-- 활동 요약 -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-6">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <h3
                class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1"
              >
                총 해결 이슈
              </h3>
              <div class="text-2xl font-bold text-gray-800 dark:text-white">
                {{ solvedIssues.length }}
              </div>
            </div>
            <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <h3
                class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1"
              >
                총 획득 점수
              </h3>
              <div class="text-2xl font-bold text-emerald-500">
                {{ totalPoints }}
              </div>
            </div>
            <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <h3
                class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1"
              >
                최근 활동
              </h3>
              <div class="text-2xl font-bold text-gray-800 dark:text-white">
                {{ lastActivityDate }}
              </div>
            </div>
          </div>
        </div>

        <!-- 해결한 이슈 목록 -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-lg font-semibold text-gray-700 dark:text-gray-200">
              해결한 이슈
            </h2>

            <div class="flex space-x-3">
              <div class="relative">
                <input
                  v-model="searchQuery"
                  type="text"
                  placeholder="이슈 검색..."
                  class="w-full sm:w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400"
                />
                <SearchIcon
                  class="absolute left-3 top-2.5 text-gray-400"
                  size="18"
                />
              </div>

              <select
                v-model="sortOption"
                class="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400"
              >
                <option value="date-desc">최신순</option>
                <option value="date-asc">오래된순</option>
                <option value="points-desc">점수 높은순</option>
                <option value="points-asc">점수 낮은순</option>
              </select>
            </div>
          </div>

          <div v-if="filteredIssues.length > 0" class="space-y-4">
            <div
              v-for="(issue, index) in filteredIssues"
              :key="index"
              class="border border-gray-100 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
            >
              <div class="flex items-start">
                <div class="mr-3 mt-1">
                  <CheckCircleIcon size="18" class="text-emerald-500" />
                </div>
                <div class="flex-1">
                  <div class="flex items-center justify-between">
                    <router-link
                      :to="`/issue/${issue.id}`"
                      class="text-sm font-medium text-gray-800 dark:text-white hover:text-emerald-500 dark:hover:text-emerald-400"
                    >
                      {{ issue.title }}
                    </router-link>
                    <span class="text-sm font-medium text-emerald-500"
                      >{{ issue.points }} 포인트</span
                    >
                  </div>
                  <div class="flex items-center mt-1">
                    <router-link
                      :to="`/repository/${issue.repositoryId}`"
                      class="text-xs text-gray-500 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400"
                    >
                      {{ issue.repositoryOwner }}/{{ issue.repositoryName }}
                    </router-link>
                    <span class="mx-2 text-gray-300 dark:text-gray-600">•</span>
                    <span class="text-xs text-gray-500 dark:text-gray-400"
                      >{{ issue.solvedDate }} 해결</span
                    >
                  </div>
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

          <div v-else class="text-center py-8">
            <CheckCircleIcon
              size="40"
              class="text-gray-300 dark:text-gray-600 mx-auto mb-3"
            />
            <p class="text-gray-500 dark:text-gray-400">
              아직 해결한 이슈가 없습니다.
            </p>
            <router-link
              to="/repositories"
              class="mt-3 inline-block text-sm text-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400"
            >
              저장소 탐색하기
            </router-link>
          </div>
        </div>
      </div>
    </AppLayout>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import {
  Search as SearchIcon,
  CheckCircle as CheckCircleIcon,
} from 'lucide-vue-next';
import applayout from '../components/AppLayout.vue';

// 상태 변수
const searchQuery = ref('');
const sortOption = ref('date-desc');

// 해결한 이슈 목록 (실제 구현에서는 API에서 가져옵니다)
const solvedIssues = ref([
  {
    id: '401',
    title: '사용자 프로필 이미지 업로드 기능 구현',
    repositoryId: '201',
    repositoryName: 'next.js',
    repositoryOwner: 'vercel',
    solvedDate: '2025-05-14',
    points: 120,
    tags: [
      { name: 'React', type: 'tech' },
      { name: '기능 개발', type: 'category' },
    ],
    difficulty: '중간',
  },
  {
    id: '402',
    title: 'API 응답 캐싱 로직 개선',
    repositoryId: '202',
    repositoryName: 'tailwindcss',
    repositoryOwner: 'tailwindlabs',
    solvedDate: '2025-05-10',
    points: 85,
    tags: [
      { name: 'JavaScript', type: 'tech' },
      { name: '성능', type: 'category' },
    ],
    difficulty: '낮음',
  },
  {
    id: '403',
    title: '다크 모드 전환 시 깜빡임 현상 수정',
    repositoryId: '202',
    repositoryName: 'tailwindcss',
    repositoryOwner: 'tailwindlabs',
    solvedDate: '2025-05-05',
    points: 150,
    tags: [
      { name: 'CSS', type: 'tech' },
      { name: '버그', type: 'category' },
    ],
    difficulty: '높음',
  },
]);

// 필터링 및 정렬된 이슈 목록
const filteredIssues = computed(() => {
  // 검색어로 필터링
  let filtered = solvedIssues.value;
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    filtered = filtered.filter(
      (issue) =>
        issue.title.toLowerCase().includes(query) ||
        issue.repositoryName.toLowerCase().includes(query) ||
        issue.repositoryOwner.toLowerCase().includes(query)
    );
  }

  // 정렬
  return [...filtered].sort((a, b) => {
    switch (sortOption.value) {
      case 'date-desc':
        return new Date(b.solvedDate) - new Date(a.solvedDate);
      case 'date-asc':
        return new Date(a.solvedDate) - new Date(b.solvedDate);
      case 'points-desc':
        return b.points - a.points;
      case 'points-asc':
        return a.points - b.points;
      default:
        return 0;
    }
  });
});

// 총 획득 점수
const totalPoints = computed(() => {
  return solvedIssues.value.reduce((total, issue) => total + issue.points, 0);
});

// 최근 활동 날짜
const lastActivityDate = computed(() => {
  if (solvedIssues.value.length === 0) return '없음';

  const dates = solvedIssues.value.map((issue) => new Date(issue.solvedDate));
  const latestDate = new Date(Math.max(...dates));

  return latestDate.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
});

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
  // 실제 구현에서는 API에서 데이터를 가져옵니다
  console.log('나의 활동 컴포넌트가 마운트되었습니다.');
});
</script>
