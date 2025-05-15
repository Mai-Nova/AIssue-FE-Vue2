<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- 네비게이션 바 (Dashboard와 동일) -->
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
              >
                대시보드
              </router-link>
              <router-link
                to="/repositories"
                class="border-transparent text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                저장소
              </router-link>
              <router-link
                to="/my-activity"
                class="border-emerald-500 text-gray-900 dark:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                나의 활동
              </router-link>
              <router-link
                to="/guide-bot"
                class="border-transparent text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                개발 가이드 봇
              </router-link>
            </div>
          </div>
          <!-- 프로필 드롭다운 등 (Dashboard와 동일) -->
          <div class="hidden sm:ml-6 sm:flex sm:items-center">
            <button
              type="button"
              class="bg-white dark:bg-gray-800 p-1 rounded-full text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
            >
              <span class="sr-only">알림 보기</span>
              <BellIcon class="h-6 w-6" />
            </button>

            <div class="ml-3 relative">
              <div>
                <button
                  @click="profileDropdownOpen = !profileDropdownOpen"
                  type="button"
                  class="bg-white dark:bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                  id="user-menu-button\"
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
                v-if="profileDropdownOpen"
                class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabindex="-1"
              >
                <router-link
                  to="/profile"
                  class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                  role="menuitem"
                  >프로필</router-link
                >
                <router-link
                  to="/settings"
                  class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                  role="menuitem"
                  >설정</router-link
                >
                <button
                  @click="logout"
                  class="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                  role="menuitem"
                >
                  로그아웃
                </button>
              </div>
            </div>
          </div>
          <div class="-mr-2 flex items-center sm:hidden">
            <!-- 모바일 메뉴 버튼 -->
            <button
              @click="mobileMenuOpen = !mobileMenuOpen"
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
      <div v-if="mobileMenuOpen" class="sm:hidden" id="mobile-menu">
        <div class="pt-2 pb-3 space-y-1">
          <router-link
            to="/dashboard"
            class="border-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
          >
            대시보드
          </router-link>
          <router-link
            to="/repositories"
            class="border-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
          >
            저장소
          </router-link>
          <router-link
            to="/my-activity"
            class="bg-emerald-50 dark:bg-emerald-900 border-emerald-500 text-emerald-700 dark:text-emerald-200 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
          >
            나의 활동
          </router-link>
          <router-link
            to="/guide-bot"
            class="border-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
          >
            개발 가이드 봇
          </router-link>
        </div>
        <!-- 모바일 프로필 메뉴 -->
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
            >
              프로필
            </router-link>
            <router-link
              to="/settings"
              class="block px-4 py-2 text-base font-medium text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
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
    </nav>

    <!-- 메인 콘텐츠 -->
    <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 sm:px-0">
        <div
          class="flex flex-col md:flex-row md:items-center md:justify-between"
        >
          <div class="flex-1">
            <h1 class="text-2xl font-bold text-gray-900 dark:text-white">
              나의 활동
            </h1>
            <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
              오픈소스 기여 활동 내역과 통계를 확인하세요.
            </p>
          </div>
          <div class="mt-4 md:mt-0">
            <div class="flex space-x-3">
              <select
                v-model="timeRange"
                class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm rounded-md dark:bg-gray-700 dark:text-white"
              >
                <option value="week">최근 1주일</option>
                <option value="month">최근 1개월</option>
                <option value="quarter">최근 3개월</option>
                <option value="year">최근 1년</option>
                <option value="all">전체 기간</option>
              </select>
            </div>
          </div>
        </div>

        <!-- 활동 요약 카드 -->
        <div class="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div
            class="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg"
          >
            <div class="p-5">
              <div class="flex items-center">
                <div class="flex-shrink-0 bg-emerald-500 rounded-md p-3">
                  <GitPullRequestIcon class="h-6 w-6 text-white" />
                </div>
                <div class="ml-5 w-0 flex-1">
                  <dl>
                    <dt
                      class="text-sm font-medium text-gray-500 dark:text-gray-400 truncate"
                    >
                      PR 생성
                    </dt>
                    <dd>
                      <div
                        class="text-lg font-medium text-gray-900 dark:text-white"
                      >
                        {{ activitySummary.pullRequests }}
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div
            class="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg"
          >
            <div class="p-5">
              <div class="flex items-center">
                <div class="flex-shrink-0 bg-blue-500 rounded-md p-3">
                  <MessageSquareIcon class="h-6 w-6 text-white" />
                </div>
                <div class="ml-5 w-0 flex-1">
                  <dl>
                    <dt
                      class="text-sm font-medium text-gray-500 dark:text-gray-400 truncate"
                    >
                      코멘트
                    </dt>
                    <dd>
                      <div
                        class="text-lg font-medium text-gray-900 dark:text-white"
                      >
                        {{ activitySummary.comments }}
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div
            class="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg"
          >
            <div class="p-5">
              <div class="flex items-center">
                <div class="flex-shrink-0 bg-purple-500 rounded-md p-3">
                  <CheckSquareIcon class="h-6 w-6 text-white" />
                </div>
                <div class="ml-5 w-0 flex-1">
                  <dl>
                    <dt
                      class="text-sm font-medium text-gray-500 dark:text-gray-400 truncate"
                    >
                      해결한 이슈
                    </dt>
                    <dd>
                      <div
                        class="text-lg font-medium text-gray-900 dark:text-white"
                      >
                        {{ activitySummary.solvedIssues }}
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div
            class="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg"
          >
            <div class="p-5">
              <div class="flex items-center">
                <div class="flex-shrink-0 bg-yellow-500 rounded-md p-3">
                  <StarIcon class="h-6 w-6 text-white" />
                </div>
                <div class="ml-5 w-0 flex-1">
                  <dl>
                    <dt
                      class="text-sm font-medium text-gray-500 dark:text-gray-400 truncate"
                    >
                      받은 별점
                    </dt>
                    <dd>
                      <div
                        class="text-lg font-medium text-gray-900 dark:text-white"
                      >
                        {{ activitySummary.stars }}
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 활동 그래프 -->
        <div
          class="mt-6 bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg"
        >
          <div class="px-4 py-5 sm:p-6">
            <h3
              class="text-lg leading-6 font-medium text-gray-900 dark:text-white"
            >
              활동 그래프
            </h3>
            <div
              class="mt-4 h-64 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center"
            >
              <p class="text-gray-500 dark:text-gray-400">
                활동 그래프가 여기에 표시됩니다.
              </p>
            </div>
          </div>
        </div>

        <!-- 최근 활동 -->
        <div class="mt-6">
          <h2 class="text-lg font-medium text-gray-900 dark:text-white">
            최근 활동
          </h2>
          <div
            class="mt-2 bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg"
          >
            <ul
              role="list"
              class="divide-y divide-gray-200 dark:divide-gray-700"
            >
              <li v-for="activity in recentActivities" :key="activity.id">
                <div class="px-4 py-4 sm:px-6">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center">
                      <div class="flex-shrink-0">
                        <component
                          :is="getActivityIcon(activity.type)"
                          class="h-5 w-5 text-gray-400 dark:text-gray-500"
                        />
                      </div>
                      <p
                        class="ml-2 text-sm font-medium text-emerald-600 dark:text-emerald-400"
                      >
                        {{ activity.title }}
                      </p>
                    </div>
                    <div class="ml-2 flex-shrink-0 flex">
                      <p
                        class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
                        :class="getActivityStatusClass(activity.status)"
                      >
                        {{ activity.status }}
                      </p>
                    </div>
                  </div>
                  <div class="mt-2 sm:flex sm:justify-between">
                    <div class="sm:flex">
                      <p
                        class="flex items-center text-sm text-gray-500 dark:text-gray-400"
                      >
                        <GithubIcon
                          class="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400 dark:text-gray-500"
                        />
                        {{ activity.repository }}
                      </p>
                    </div>
                    <div
                      class="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400 sm:mt-0"
                    >
                      <ClockIcon
                        class="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400 dark:text-gray-500"
                      />
                      <p>
                        {{ activity.date }}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <!-- 기여 저장소 -->
        <div class="mt-6">
          <h2 class="text-lg font-medium text-gray-900 dark:text-white">
            기여 저장소
          </h2>
          <div
            class="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            <div
              v-for="repo in contributedRepositories"
              :key="repo.id"
              class="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg"
            >
              <div class="px-4 py-5 sm:p-6">
                <div class="flex items-center">
                  <div class="flex-shrink-0">
                    <div
                      class="h-10 w-10 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold"
                    >
                      {{ repo.name.charAt(0).toUpperCase() }}
                    </div>
                  </div>
                  <div class="ml-4">
                    <h3
                      class="text-lg font-medium text-gray-900 dark:text-white"
                    >
                      {{ repo.name }}
                    </h3>
                    <p class="text-sm text-gray-500 dark:text-gray-400">
                      {{ repo.contributions }} 기여
                    </p>
                  </div>
                </div>
                <div class="mt-4">
                  <div
                    class="flex items-center text-sm text-gray-500 dark:text-gray-400"
                  >
                    <GitPullRequestIcon
                      class="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400 dark:text-gray-500"
                    />
                    <span>PR {{ repo.pullRequests }}개</span>
                    <span class="mx-2">•</span>
                    <MessageSquareIcon
                      class="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400 dark:text-gray-500"
                    />
                    <span>코멘트 {{ repo.comments }}개</span>
                  </div>
                </div>
                <div class="mt-4">
                  <router-link
                    :to="`/repositories/${repo.id}`"
                    class="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-900 hover:bg-emerald-200 dark:hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                  >
                    <EyeIcon class="h-4 w-4 mr-1" />
                    저장소 보기
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 기술 스택 통계 -->
        <div class="mt-6">
          <h2 class="text-lg font-medium text-gray-900 dark:text-white">
            기술 스택 통계
          </h2>
          <div
            class="mt-2 bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg"
          >
            <div class="px-4 py-5 sm:p-6">
              <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div v-for="tech in techStackStats" :key="tech.name">
                  <h3
                    class="text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    {{ tech.name }}
                  </h3>
                  <div class="mt-2 flex items-center">
                    <div
                      class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5"
                    >
                      <div
                        class="bg-emerald-600 h-2.5 rounded-full"
                        :style="{ width: `${tech.percentage}%` }"
                      ></div>
                    </div>
                    <span
                      class="ml-3 text-sm font-medium text-gray-700 dark:text-gray-300"
                      >{{ tech.percentage }}%</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {
  Menu as MenuIcon,
  X as XIcon,
  Bell as BellIcon,
  GitPullRequest as GitPullRequestIcon,
  MessageSquare as MessageSquareIcon,
  CheckSquare as CheckSquareIcon,
  Star as StarIcon,
  Github as GithubIcon,
  Clock as ClockIcon,
  Eye as EyeIcon,
  GitBranch as GitBranchIcon,
} from 'lucide-vue-next';

const mobileMenuOpen = ref(false);
const profileDropdownOpen = ref(false);
const timeRange = ref('month');

// 활동 요약 데이터
const activitySummary = ref({
  pullRequests: 12,
  comments: 47,
  solvedIssues: 8,
  stars: 23,
});

// 최근 활동 데이터
const recentActivities = ref([
  {
    id: 1,
    type: 'pullRequest',
    title: 'React 컴포넌트 성능 최적화 PR',
    status: '병합됨',
    repository: 'frontend-project/react-app',
    date: '3일 전',
  },
  {
    id: 2,
    type: 'comment',
    title: 'API 응답 캐싱 구현 이슈에 코멘트',
    status: '활성',
    repository: 'backend-service/api',
    date: '5일 전',
  },
  {
    id: 3,
    type: 'issue',
    title: '모바일 뷰 반응형 디자인 개선 이슈 해결',
    status: '완료됨',
    repository: 'ui-components/design-system',
    date: '1주일 전',
  },
  {
    id: 4,
    type: 'star',
    title: '인증 및 권한 관리 서비스 저장소에 별 추가',
    status: '활성',
    repository: 'auth-service/login-flow',
    date: '2주일 전',
  },
  {
    id: 5,
    type: 'pullRequest',
    title: '로그인 인증 흐름 버그 수정 PR',
    status: '병합됨',
    repository: 'auth-service/login-flow',
    date: '3주일 전',
  },
]);

// 기여 저장소 데이터
const contributedRepositories = ref([
  {
    id: '1',
    name: 'frontend-project/react-app',
    contributions: 15,
    pullRequests: 5,
    comments: 23,
  },
  {
    id: '2',
    name: 'backend-service/api',
    contributions: 8,
    pullRequests: 3,
    comments: 12,
  },
  {
    id: '3',
    name: 'ui-components/design-system',
    contributions: 12,
    pullRequests: 4,
    comments: 18,
  },
]);

// 기술 스택 통계 데이터
const techStackStats = ref([
  { name: 'React', percentage: 45 },
  { name: 'JavaScript', percentage: 65 },
  { name: 'TypeScript', percentage: 35 },
  { name: 'Node.js', percentage: 30 },
  { name: 'CSS', percentage: 25 },
  { name: 'HTML', percentage: 20 },
]);

// 활동 타입에 따른 아이콘 반환
const getActivityIcon = (type) => {
  switch (type) {
    case 'pullRequest':
      return GitPullRequestIcon;
    case 'comment':
      return MessageSquareIcon;
    case 'issue':
      return CheckSquareIcon;
    case 'star':
      return StarIcon;
    default:
      return null;
  }
};
</script>
