<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <AppLayout>
      <div class="p-6">
        <!-- 저장소 헤더 -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-6">
          <div
            class="flex flex-col md:flex-row md:items-center md:justify-between"
          >
            <div class="flex items-center mb-4 md:mb-0">
              <div
                class="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mr-4"
              >
                <GitRepoIcon size="24" class="text-emerald-500" />
              </div>
              <div>
                <h1 class="text-xl font-bold text-gray-800 dark:text-white">
                  {{ repository.owner }}/{{ repository.name }}
                </h1>
                <div class="flex items-center mt-1 space-x-4">
                  <div
                    class="flex items-center text-gray-500 dark:text-gray-400"
                  >
                    <StarIcon size="14" class="mr-1" />
                    <span class="text-sm">{{ repository.stars }}</span>
                  </div>
                  <div
                    class="flex items-center text-gray-500 dark:text-gray-400"
                  >
                    <GitForkIcon size="14" class="mr-1" />
                    <span class="text-sm">{{ repository.forks }}</span>
                  </div>
                  <div class="flex items-center">
                    <span
                      class="w-2 h-2 rounded-full mr-1"
                      :class="getLanguageColor(repository.language)"
                    ></span>
                    <span class="text-sm text-gray-500 dark:text-gray-400">{{
                      repository.language
                    }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex space-x-3">
              <a
                :href="repository.url"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-center px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <ExternalLinkIcon size="16" class="mr-2" />
                GitHub에서 보기
              </a>
              <button
                v-if="!isInMyRepositories"
                @click="addToMyRepositories"
                class="flex items-center justify-center px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-colors"
              >
                <PlusIcon size="16" class="mr-2" />
                내 저장소에 추가
              </button>
              <button
                v-else
                @click="removeFromMyRepositories"
                class="flex items-center justify-center px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-lg transition-colors"
              >
                <CheckIcon size="16" class="mr-2" />
                내 저장소에 추가됨
              </button>
            </div>
          </div>
        </div>

        <!-- 탭 메뉴 -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm mb-6">
          <div class="border-b border-gray-100 dark:border-gray-700">
            <nav class="flex">
              <button
                @click="activeTab = 'overview'"
                class="px-6 py-3 text-sm font-medium border-b-2 transition-colors"
                :class="
                  activeTab === 'overview'
                    ? 'border-emerald-500 text-emerald-500 dark:text-emerald-400'
                    : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                "
              >
                개요
              </button>
              <button
                @click="activeTab = 'issues'"
                class="px-6 py-3 text-sm font-medium border-b-2 transition-colors"
                :class="
                  activeTab === 'issues'
                    ? 'border-emerald-500 text-emerald-500 dark:text-emerald-400'
                    : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                "
              >
                이슈 분석
              </button>
              <button
                @click="activeTab = 'conventions'"
                class="px-6 py-3 text-sm font-medium border-b-2 transition-colors"
                :class="
                  activeTab === 'conventions'
                    ? 'border-emerald-500 text-emerald-500 dark:text-emerald-400'
                    : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                "
              >
                코드 컨벤션
              </button>
            </nav>
          </div>
        </div>

        <!-- 개요 탭 -->
        <div v-if="activeTab === 'overview'" class="space-y-6">
          <!-- README 요약 -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <div class="flex items-center justify-between mb-4">
              <h2
                class="text-lg font-semibold text-gray-700 dark:text-gray-200"
              >
                README 요약
              </h2>
              <a
                :href="`${repository.url}#readme`"
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm text-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 flex items-center"
              >
                원본 README 보기
                <ExternalLinkIcon size="14" class="ml-1" />
              </a>
            </div>

            <div v-if="isLoadingReadme" class="flex justify-center py-8">
              <div
                class="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-emerald-500"
              ></div>
            </div>

            <div v-else class="prose dark:prose-invert max-w-none">
              <p class="text-gray-600 dark:text-gray-300">
                {{ readmeSummary }}
              </p>
            </div>
          </div>

          <!-- 주요 기술 스택 -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2
              class="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4"
            >
              주요 기술 스택
            </h2>

            <div class="flex flex-wrap gap-2">
              <span
                v-for="(tech, index) in techStack"
                :key="index"
                class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <!-- 최근 중요 이슈 -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <div class="flex items-center justify-between mb-4">
              <h2
                class="text-lg font-semibold text-gray-700 dark:text-gray-200"
              >
                최근 중요 이슈
              </h2>
              <button
                @click="activeTab = 'issues'"
                class="text-sm text-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 flex items-center"
              >
                모든 이슈 보기
                <ChevronRightIcon size="14" class="ml-1" />
              </button>
            </div>

            <div class="space-y-3">
              <div
                v-for="(issue, index) in importantIssues"
                :key="index"
                class="border border-gray-100 dark:border-gray-700 rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
              >
                <div class="flex items-start">
                  <div class="mr-3 mt-1">
                    <AlertCircleIcon
                      v-if="issue.type === 'feature'"
                      size="16"
                      class="text-emerald-500"
                    />
                    <BugIcon
                      v-else-if="issue.type === 'bug'"
                      size="16"
                      class="text-red-500"
                    />
                    <HelpCircleIcon v-else size="16" class="text-blue-500" />
                  </div>
                  <div class="flex-1">
                    <router-link
                      :to="`/issue/${issue.id}`"
                      class="text-sm font-medium text-gray-800 dark:text-white hover:text-emerald-500 dark:hover:text-emerald-400"
                    >
                      {{ issue.title }}
                    </router-link>
                    <div class="flex items-center mt-1">
                      <span class="text-xs text-gray-500 dark:text-gray-400">{{
                        issue.createdAt
                      }}</span>
                      <span class="mx-2 text-gray-300 dark:text-gray-600"
                        >•</span
                      >
                      <span class="text-xs text-gray-500 dark:text-gray-400"
                        >#{{ issue.number }}</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 이슈 분석 탭 -->
        <div v-else-if="activeTab === 'issues'" class="space-y-6">
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <div
              class="flex flex-col md:flex-row md:items-center md:justify-between mb-6"
            >
              <h2
                class="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4 md:mb-0"
              >
                이슈 목록
              </h2>

              <div
                class="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3"
              >
                <div class="relative">
                  <input
                    v-model="issueSearchQuery"
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
                  v-model="issueFilter"
                  class="w-full sm:w-auto px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400"
                >
                  <option value="all">모든 이슈</option>
                  <option value="open">Open 이슈</option>
                  <option value="closed">Closed 이슈</option>
                </select>
              </div>
            </div>

            <div v-if="isLoadingIssues" class="flex justify-center py-8">
              <div
                class="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-emerald-500"
              ></div>
            </div>

            <div v-else-if="filteredIssues.length > 0" class="space-y-4">
              <div
                v-for="(issue, index) in filteredIssues"
                :key="index"
                class="border border-gray-100 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
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
                      <span
                        class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium"
                        :class="
                          issue.state === 'open'
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                            : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                        "
                      >
                        {{ issue.state }}
                      </span>
                    </div>
                    <div class="flex items-center mt-1">
                      <span class="text-xs text-gray-500 dark:text-gray-400">{{
                        issue.createdAt
                      }}</span>
                      <span class="mx-2 text-gray-300 dark:text-gray-600"
                        >•</span
                      >
                      <span class="text-xs text-gray-500 dark:text-gray-400"
                        >#{{ issue.number }}</span
                      >
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

            <div v-else class="text-center py-8">
              <AlertCircleIcon
                size="40"
                class="text-gray-300 dark:text-gray-600 mx-auto mb-3"
              />
              <p class="text-gray-500 dark:text-gray-400">
                검색 결과가 없습니다.
              </p>
            </div>
          </div>
        </div>

        <!-- 코드 컨벤션 탭 -->
        <div v-else-if="activeTab === 'conventions'" class="space-y-6">
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <div class="flex items-center justify-between mb-4">
              <h2
                class="text-lg font-semibold text-gray-700 dark:text-gray-200"
              >
                코드 컨벤션
              </h2>
              <a
                :href="`${repository.url}/blob/main/CONTRIBUTING.md`"
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm text-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 flex items-center"
              >
                원본 문서 보기
                <ExternalLinkIcon size="14" class="ml-1" />
              </a>
            </div>

            <div v-if="isLoadingConventions" class="flex justify-center py-8">
              <div
                class="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-emerald-500"
              ></div>
            </div>

            <div
              v-else-if="conventionContent"
              class="prose dark:prose-invert max-w-none"
            >
              <p class="text-gray-600 dark:text-gray-300">
                {{ conventionContent }}
              </p>
            </div>

            <div v-else class="text-center py-8">
              <FileTextIcon
                size="40"
                class="text-gray-300 dark:text-gray-600 mx-auto mb-3"
              />
              <p class="text-gray-500 dark:text-gray-400">
                이 저장소에는 코드 컨벤션 문서가 없습니다.
              </p>
            </div>

            <div
              class="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700"
            >
              <router-link
                to="/guide-bot"
                class="flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <MessageSquareIcon size="18" class="mr-2" />
                개발 가이드 봇에게 질문하기
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import {
  BookMarked as GitRepoIcon,
  Star as StarIcon,
  GitFork as GitForkIcon,
  ExternalLink as ExternalLinkIcon,
  Plus as PlusIcon,
  Check as CheckIcon,
  AlertCircle as AlertCircleIcon,
  Bug as BugIcon,
  HelpCircle as HelpCircleIcon,
  ChevronRight as ChevronRightIcon,
  Search as SearchIcon,
  FileText as FileTextIcon,
  MessageSquare as MessageSquareIcon,
} from 'lucide-vue-next';
import applayout from '../components/AppLayout.vue';

const route = useRoute();
const repositoryId = route.params.id;

// 상태 변수
const activeTab = ref('overview');
const isLoadingReadme = ref(false);
const isLoadingIssues = ref(false);
const isLoadingConventions = ref(false);
const issueSearchQuery = ref('');
const issueFilter = ref('all');
const isInMyRepositories = ref(true); // 예시 데이터

// 저장소 정보 (실제 구현에서는 API에서 가져옵니다)
const repository = ref({
  id: repositoryId,
  name: 'next.js',
  owner: 'vercel',
  stars: 112000,
  forks: 24000,
  language: 'JavaScript',
  openIssues: 1800,
  url: 'https://github.com/vercel/next.js',
});

// README 요약 (실제 구현에서는 API에서 가져옵니다)
const readmeSummary = ref(
  'Next.js는 React 애플리케이션을 위한 풀스택 프레임워크입니다. 서버 사이드 렌더링, 정적 사이트 생성, API 라우트, 파일 기반 라우팅 등의 기능을 제공합니다. 개발자 경험을 향상시키기 위한 다양한 최적화 기능이 내장되어 있으며, Vercel 플랫폼과의 원활한 통합을 지원합니다. 이 프레임워크는 React 컴포넌트를 사용하여 웹 애플리케이션을 구축하는 데 필요한 모든 도구를 제공하며, 성능 최적화와 확장성을 고려한 설계가 특징입니다.'
);

// 기술 스택 (실제 구현에서는 API에서 가져옵니다)
const techStack = ref([
  'JavaScript',
  'TypeScript',
  'React',
  'Node.js',
  'Webpack',
  'Babel',
  'ESLint',
]);

// 중요 이슈 목록 (실제 구현에서는 API에서 가져옵니다)
const importantIssues = ref([
  {
    id: '301',
    number: 45678,
    title: 'App Router에서 getStaticProps 동작 개선',
    type: 'feature',
    createdAt: '2025-05-10',
  },
  {
    id: '302',
    number: 45679,
    title: 'Image 컴포넌트 메모리 누수 수정',
    type: 'bug',
    createdAt: '2025-05-11',
  },
  {
    id: '303',
    number: 45680,
    title: 'Server Component에서 쿠키 접근 문제',
    type: 'bug',
    createdAt: '2025-05-12',
  },
]);

// 이슈 목록 (실제 구현에서는 API에서 가져옵니다)
const issues = ref([
  {
    id: '301',
    number: 45678,
    title: 'App Router에서 getStaticProps 동작 개선',
    type: 'feature',
    state: 'open',
    createdAt: '2025-05-10',
    summary:
      'App Router에서 getStaticProps 함수의 동작이 Pages Router와 일관되지 않습니다. 특히 증분 정적 재생성(ISR) 기능에서 차이가 있어 마이그레이션 시 문제가 발생합니다.',
    tags: [
      { name: 'React', type: 'tech' },
      { name: '기능 개선', type: 'category' },
    ],
    difficulty: '중간',
  },
  {
    id: '302',
    number: 45679,
    title: 'Image 컴포넌트 메모리 누수 수정',
    type: 'bug',
    state: 'open',
    createdAt: '2025-05-11',
    summary:
      'Image 컴포넌트가 언마운트될 때 이벤트 리스너가 제대로 정리되지 않아 메모리 누수가 발생합니다. 특히 이미지가 많은 페이지에서 성능 저하가 관찰됩니다.',
    tags: [
      { name: 'React', type: 'tech' },
      { name: '버그', type: 'category' },
    ],
    difficulty: '높음',
  },
  {
    id: '303',
    number: 45680,
    title: 'Server Component에서 쿠키 접근 문제',
    type: 'bug',
    state: 'open',
    createdAt: '2025-05-12',
    summary:
      'Server Component에서 쿠키에 접근할 때 일관되지 않은 동작이 발생합니다. 개발 환경과 프로덕션 환경에서 다르게 동작하며, 특히 Edge 런타임에서 문제가 발생합니다.',
    tags: [
      { name: 'React', type: 'tech' },
      { name: '버그', type: 'category' },
    ],
    difficulty: '중간',
  },
  {
    id: '304',
    number: 45681,
    title: 'next/font 최적화 개선',
    type: 'feature',
    state: 'closed',
    createdAt: '2025-05-08',
    summary:
      'next/font 모듈의 폰트 최적화 기능을 개선하여 더 나은 성능과 사용자 경험을 제공합니다. 특히 가변 폰트 지원과 폰트 서브셋 최적화에 중점을 둡니다.',
    tags: [
      { name: 'CSS', type: 'tech' },
      { name: '성능', type: 'category' },
    ],
    difficulty: '낮음',
  },
]);

// 코드 컨벤션 내용 (실제 구현에서는 API에서 가져옵니다)
const conventionContent = ref(
  'Next.js 프로젝트에 기여하기 위한 가이드라인입니다. 모든 코드는 TypeScript로 작성되어야 하며, ESLint와 Prettier 설정을 준수해야 합니다. 커밋 메시지는 Conventional Commits 형식을 따라야 하며, 모든 PR은 최소 하나의 테스트를 포함해야 합니다. 기능 개발 전에 이슈를 먼저 생성하고, 코드 리뷰 과정에서 피드백을 적극 반영해야 합니다. 자세한 내용은 CONTRIBUTING.md 파일을 참조하세요.'
);

// 필터링된 이슈 목록
const filteredIssues = computed(() => {
  return issues.value.filter((issue) => {
    // 상태 필터링
    if (issueFilter.value !== 'all' && issue.state !== issueFilter.value) {
      return false;
    }

    // 검색어 필터링
    if (
      issueSearchQuery.value &&
      !issue.title.toLowerCase().includes(issueSearchQuery.value.toLowerCase())
    ) {
      return false;
    }

    return true;
  });
});

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

// 내 저장소에 추가
const addToMyRepositories = () => {
  isInMyRepositories.value = true;
  // 실제 구현에서는 API 호출이 필요합니다
};

// 내 저장소에서 제거
const removeFromMyRepositories = () => {
  isInMyRepositories.value = false;
  // 실제 구현에서는 API 호출이 필요합니다
};

onMounted(async () => {
  // 실제 구현에서는 API에서 데이터를 가져옵니다
  isLoadingReadme.value = true;
  isLoadingIssues.value = true;
  isLoadingConventions.value = true;

  try {
    // README 로딩 시뮬레이션
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // 실제 구현에서는 API 호출로 대체됩니다

    // 이슈 로딩 시뮬레이션
    await new Promise((resolve) => setTimeout(resolve, 1500));
    // 실제 구현에서는 API 호출로 대체됩니다

    // 컨벤션 로딩 시뮬레이션
    await new Promise((resolve) => setTimeout(resolve, 2000));
    // 실제 구현에서는 API 호출로 대체됩니다
  } catch (error) {
    console.error('데이터 로딩 중 오류 발생:', error);
  } finally {
    isLoadingReadme.value = false;
    isLoadingIssues.value = false;
    isLoadingConventions.value = false;
  }
});
</script>
