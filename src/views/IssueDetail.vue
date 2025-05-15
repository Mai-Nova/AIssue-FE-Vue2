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
                class="border-transparent text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
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
            class="border-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
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
      <!-- 이슈 상세 정보 -->
      <div class="px-4 sm:px-0">
        <div
          class="flex flex-col md:flex-row md:items-center md:justify-between"
        >
          <div class="flex-1">
            <div class="flex items-center">
              <router-link
                :to="`/repositories/${repositoryId}`"
                class="text-sm text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 dark:hover:text-emerald-300 flex items-center"
              >
                <ArrowLeftIcon class="h-4 w-4 mr-1" />
                저장소로 돌아가기
              </router-link>
            </div>
            <h1 class="mt-2 text-2xl font-bold text-gray-900 dark:text-white">
              {{ issue.title }}
            </h1>
            <div class="mt-1 flex flex-wrap items-center gap-2">
              <span
                class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                :class="statusClass"
              >
                {{ issue.status }}
              </span>
              <span class="text-sm text-gray-500 dark:text-gray-400">
                이슈 #{{ issue.number }} - {{ issue.createdAt }} 에 생성됨
              </span>
            </div>
          </div>
          <div class="mt-4 md:mt-0 flex flex-wrap gap-2">
            <button
              class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
            >
              <GitPullRequestIcon class="h-4 w-4 mr-2" />
              PR 생성
            </button>
            <button
              class="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md shadow-sm text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
            >
              <StarIcon class="h-4 w-4 mr-2" />
              관심 이슈 등록
            </button>
          </div>
        </div>

        <!-- 이슈 정보 카드 -->
        <div
          class="mt-6 bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg"
        >
          <div class="px-4 py-5 sm:px-6 flex justify-between items-start">
            <div>
              <div class="flex items-center">
                <img
                  class="h-10 w-10 rounded-full"
                  :src="issue.author.avatar"
                  :alt="issue.author.name"
                />
                <div class="ml-3">
                  <h3
                    class="text-lg leading-6 font-medium text-gray-900 dark:text-white"
                  >
                    {{ issue.author.name }}
                  </h3>
                  <p class="text-sm text-gray-500 dark:text-gray-400">
                    {{ issue.author.username }}
                  </p>
                </div>
              </div>
            </div>
            <div class="flex items-center space-x-2">
              <button
                class="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
              >
                <ThumbsUpIcon class="h-5 w-5" />
              </button>
              <button
                class="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
              >
                <ShareIcon class="h-5 w-5" />
              </button>
            </div>
          </div>
          <div
            class="border-t border-gray-200 dark:border-gray-700 px-4 py-5 sm:px-6"
          >
            <div
              class="prose dark:prose-invert max-w-none"
              v-html="issue.body"
            ></div>
          </div>
        </div>

        <!-- AI 분석 섹션 -->
        <div class="mt-6">
          <h2 class="text-lg font-medium text-gray-900 dark:text-white">
            AI 분석
          </h2>
          <div
            class="mt-2 bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg"
          >
            <div class="px-4 py-5 sm:p-6">
              <div class="flex items-center mb-4">
                <div
                  class="flex-shrink-0 bg-emerald-100 dark:bg-emerald-900 rounded-full p-2"
                >
                  <ZapIcon
                    class="h-5 w-5 text-emerald-600 dark:text-emerald-400"
                  />
                </div>
                <h3
                  class="ml-3 text-lg font-medium text-gray-900 dark:text-white"
                >
                  요약
                </h3>
              </div>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                {{ issue.aiAnalysis.summary }}
              </p>

              <div
                class="mt-6 border-t border-gray-200 dark:border-gray-700 pt-4"
              >
                <div class="flex items-center mb-4">
                  <div
                    class="flex-shrink-0 bg-blue-100 dark:bg-blue-900 rounded-full p-2"
                  >
                    <CodeIcon
                      class="h-5 w-5 text-blue-600 dark:text-blue-400"
                    />
                  </div>
                  <h3
                    class="ml-3 text-lg font-medium text-gray-900 dark:text-white"
                  >
                    필요한 기술 스택
                  </h3>
                </div>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tech in issue.aiAnalysis.techStack"
                    :key="tech"
                    class="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>

              <div
                class="mt-6 border-t border-gray-200 dark:border-gray-700 pt-4"
              >
                <div class="flex items-center mb-4">
                  <div
                    class="flex-shrink-0 bg-yellow-100 dark:bg-yellow-900 rounded-full p-2"
                  >
                    <AlertTriangleIcon
                      class="h-5 w-5 text-yellow-600 dark:text-yellow-400"
                    />
                  </div>
                  <h3
                    class="ml-3 text-lg font-medium text-gray-900 dark:text-white"
                  >
                    난이도 평가
                  </h3>
                </div>
                <div class="flex items-center">
                  <div
                    class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5"
                  >
                    <div
                      class="bg-emerald-600 h-2.5 rounded-full"
                      :style="{ width: `${issue.aiAnalysis.difficulty}%` }"
                    ></div>
                  </div>
                  <span
                    class="ml-3 text-sm font-medium text-gray-700 dark:text-gray-300"
                    >{{ difficultyText }}</span
                  >
                </div>
              </div>

              <div
                class="mt-6 border-t border-gray-200 dark:border-gray-700 pt-4"
              >
                <div class="flex items-center mb-4">
                  <div
                    class="flex-shrink-0 bg-purple-100 dark:bg-purple-900 rounded-full p-2"
                  >
                    <FileTextIcon
                      class="h-5 w-5 text-purple-600 dark:text-purple-400"
                    />
                  </div>
                  <h3
                    class="ml-3 text-lg font-medium text-gray-900 dark:text-white"
                  >
                    관련 파일
                  </h3>
                </div>
                <ul class="divide-y divide-gray-200 dark:divide-gray-700">
                  <li
                    v-for="file in issue.aiAnalysis.relatedFiles"
                    :key="file.path"
                    class="py-3 flex"
                  >
                    <FileIcon
                      class="h-5 w-5 text-gray-400 dark:text-gray-500"
                    />
                    <span
                      class="ml-2 text-sm text-gray-600 dark:text-gray-300"
                      >{{ file.path }}</span
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- 코멘트 섹션 -->
        <div class="mt-6">
          <h2 class="text-lg font-medium text-gray-900 dark:text-white">
            코멘트 ({{ issue.comments.length }})
          </h2>
          <div class="mt-2 space-y-4">
            <div
              v-for="comment in issue.comments"
              :key="comment.id"
              class="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg"
            >
              <div class="px-4 py-5 sm:px-6 flex justify-between items-start">
                <div class="flex items-center">
                  <img
                    class="h-8 w-8 rounded-full"
                    :src="comment.author.avatar"
                    :alt="comment.author.name"
                  />
                  <div class="ml-3">
                    <h3
                      class="text-sm font-medium text-gray-900 dark:text-white"
                    >
                      {{ comment.author.name }}
                    </h3>
                    <p class="text-xs text-gray-500 dark:text-gray-400">
                      {{ comment.createdAt }}
                    </p>
                  </div>
                </div>
              </div>
              <div
                class="border-t border-gray-200 dark:border-gray-700 px-4 py-5 sm:px-6"
              >
                <div
                  class="prose dark:prose-invert max-w-none text-sm"
                  v-html="comment.body"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <!-- 코멘트 작성 폼 -->
        <div
          class="mt-6 bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg"
        >
          <div class="px-4 py-5 sm:p-6">
            <h3 class="text-lg font-medium text-gray-900 dark:text-white">
              코멘트 작성
            </h3>
            <div class="mt-2">
              <textarea
                rows="3"
                class="shadow-sm block w-full focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                placeholder="이슈에 대한 의견을 작성하세요..."
              ></textarea>
            </div>
            <div class="mt-3 flex justify-end">
              <button
                type="submit"
                class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
              >
                코멘트 작성
              </button>
            </div>
          </div>
        </div>

        <!-- 개발 가이드 봇 섹션 -->
        <div class="mt-6">
          <div class="flex items-center justify-between">
            <h2 class="text-lg font-medium text-gray-900 dark:text-white">
              개발 가이드 봇
            </h2>
            <router-link
              :to="`/guide-bot?issue=${issueId}`"
              class="text-sm font-medium text-emerald-600 hover:text-emerald-500 dark:text-emerald-400 dark:hover:text-emerald-300"
            >
              전체 화면으로 보기
            </router-link>
          </div>
          <div
            class="mt-2 bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg"
          >
            <div class="px-4 py-5 sm:p-6">
              <p class="text-sm text-gray-600 dark:text-gray-300 mb-4">
                이 이슈에 대해 AI 개발 가이드 봇에게 질문하세요. 코드 이해, 해결
                방법 등을 물어볼 수 있습니다.
              </p>
              <div class="flex">
                <input
                  type="text"
                  class="shadow-sm focus:ring-emerald-500 focus:border-emerald-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                  placeholder="예: 이 이슈를 해결하기 위한 첫 단계는 무엇인가요?"
                />
                <button
                  type="button"
                  class="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                >
                  질문하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import {
  Menu as MenuIcon,
  X as XIcon,
  Bell as BellIcon,
  ArrowLeft as ArrowLeftIcon,
  GitPullRequest as GitPullRequestIcon,
  Star as StarIcon,
  ThumbsUp as ThumbsUpIcon,
  Share as ShareIcon,
  Zap as ZapIcon,
  Code as CodeIcon,
  AlertTriangle as AlertTriangleIcon,
  FileText as FileTextIcon,
  File as FileIcon,
  GitBranch as GitBranchIcon,
} from 'lucide-vue-next';

// 목업 데이터 임포트
import { getIssueById, getRepositoryById, user } from '../utils/mockData';

const route = useRoute();
const router = useRouter();
const issueId = parseInt(route.params.id);
const mobileMenuOpen = ref(false);
const profileDropdownOpen = ref(false);

// 목업 데이터에서 이슈 정보 가져오기
const issue = ref(
  getIssueById(issueId) || {
    id: issueId,
    title: 'React 컴포넌트 성능 최적화',
    status: '열림',
    repositoryId: '1',
    createdAt: '2023-05-15',
    author: {
      name: '김개발',
      username: 'devkim',
      avatar: user.avatarUrl,
    },
  }
);

// 저장소 정보 가져오기
const repository = ref(getRepositoryById(issue.value.repositoryId));

// 이슈 본문 내용 (목업 데이터에 본문이 없어서 하드코딩)
const issueBody = `
    <p>대규모 목록을 렌더링할 때 성능 문제가 발생하고 있습니다. 특히 다음과 같은 문제점이 있습니다:</p>
    <ul>
      <li>스크롤 시 프레임 드롭 발생</li>
      <li>입력 필드에 타이핑할 때 지연 발생</li>
      <li>필터링 시 UI 프리징</li>
    </ul>
    <p>다음 컴포넌트를 최적화해야 합니다:</p>
    <pre><code>function ItemList({ items }) {
  return (
    &lt;div&gt;
      {items.map(item => (
        &lt;Item key={item.id} data={item} /&gt;
      ))}
    &lt;/div&gt;
  );
}</code></pre>
    <p>가능한 최적화 방법:</p>
    <ol>
      <li>React.memo 사용</li>
      <li>useCallback 및 useMemo 적용</li>
      <li>가상화 기법 도입 (react-window 또는 react-virtualized)</li>
    </ol>
  `;

const difficultyText = computed(() => {
  const difficulty = issue.value.aiAnalysis?.difficulty || 0;
  if (difficulty < 30) return '쉬움';
  if (difficulty < 70) return '중간';
  return '어려움';
});

const statusClass = computed(() => {
  switch (issue.value.status) {
    case '열림':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
    case '닫힘':
      return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
    case '진행 중':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
  }
});

const logout = () => {
  alert('로그아웃 기능이 구현될 예정입니다.');
  profileDropdownOpen.value = false;
};

onMounted(() => {
  console.log('IssueDetail component mounted');
});
</script>
