<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <AppLayout>
      <div class="p-6">
        <!-- 이슈 헤더 -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-6">
          <div
            class="flex flex-col md:flex-row md:items-center md:justify-between"
          >
            <div>
              <div class="flex items-center mb-2">
                <router-link
                  :to="`/repository/${issue.repositoryId}`"
                  class="text-sm text-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 flex items-center"
                >
                  <ArrowLeftIcon size="16" class="mr-1" />
                  {{ issue.repositoryOwner }}/{{ issue.repositoryName }}
                </router-link>
                <span class="mx-2 text-gray-300 dark:text-gray-600">•</span>
                <span class="text-sm text-gray-500 dark:text-gray-400"
                  >#{{ issue.number }}</span
                >
              </div>
              <h1 class="text-xl font-bold text-gray-800 dark:text-white">
                {{ issue.title }}
              </h1>
              <div class="flex items-center mt-2">
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
                <span class="ml-2 text-sm text-gray-500 dark:text-gray-400"
                  >{{ issue.createdAt }} 작성</span
                >
              </div>
            </div>
            <div class="mt-4 md:mt-0 flex space-x-3">
              <a
                :href="issue.url"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-center px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <ExternalLinkIcon size="16" class="mr-2" />
                GitHub에서 보기
              </a>
              <button
                @click="addToSolvedIssues"
                :class="
                  isSolved
                    ? 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200'
                    : 'bg-emerald-500 hover:bg-emerald-600 text-white'
                "
                class="flex items-center justify-center px-4 py-2 rounded-lg transition-colors"
              >
                <CheckIcon size="16" class="mr-2" />
                {{ isSolved ? '해결 완료됨' : '해결 목록에 추가' }}
              </button>
            </div>
          </div>
        </div>

        <!-- 이슈 콘텐츠 -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <!-- AI 분석 결과 -->
          <div class="lg:col-span-1 space-y-6">
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
              <h2
                class="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4"
              >
                AI 분석 결과
              </h2>

              <div v-if="isLoadingAnalysis" class="flex justify-center py-8">
                <div
                  class="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-emerald-500"
                ></div>
              </div>

              <div v-else>
                <div class="space-y-4">
                  <!-- 난이도 및 중요도 점수 -->
                  <div>
                    <h3
                      class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      난이도 / 중요도
                    </h3>
                    <div class="flex items-center space-x-2">
                      <div
                        class="flex-1 bg-gray-100 dark:bg-gray-700 rounded-full h-2"
                      >
                        <div
                          class="bg-emerald-500 h-2 rounded-full"
                          :style="{
                            width: `${issue.analysis.difficultyScore}%`,
                          }"
                        ></div>
                      </div>
                      <span
                        class="text-sm font-medium text-gray-600 dark:text-gray-300"
                        >{{ issue.analysis.difficultyScore }}%</span
                      >
                    </div>
                    <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {{ issue.analysis.difficultyReason }}
                    </p>
                  </div>

                  <!-- 관련 기술 스택 -->
                  <div>
                    <h3
                      class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      관련 기술 스택
                    </h3>
                    <div class="flex flex-wrap gap-2">
                      <span
                        v-for="(tech, index) in issue.analysis.techStack"
                        :key="index"
                        class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                      >
                        {{ tech }}
                      </span>
                    </div>
                  </div>

                  <!-- 태그 -->
                  <div>
                    <h3
                      class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      태그
                    </h3>
                    <div class="flex flex-wrap gap-2">
                      <span
                        v-for="(tag, index) in issue.analysis.tags"
                        :key="index"
                        class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
                      >
                        {{ tag }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
              <h2
                class="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4"
              >
                상세 요약
              </h2>

              <div v-if="isLoadingAnalysis" class="flex justify-center py-8">
                <div
                  class="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-emerald-500"
                ></div>
              </div>

              <div v-else>
                <p class="text-sm text-gray-600 dark:text-gray-300">
                  {{ issue.analysis.summary }}
                </p>
              </div>
            </div>
          </div>

          <!-- 원본 이슈 내용 -->
          <div class="lg:col-span-2">
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
              <div class="flex items-center mb-6">
                <img
                  :src="issue.authorAvatar"
                  alt="작성자 아바타"
                  class="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <div
                    class="text-sm font-medium text-gray-800 dark:text-white"
                  >
                    {{ issue.authorName }}
                  </div>
                  <div class="text-xs text-gray-500 dark:text-gray-400">
                    {{ issue.createdAt }} 작성
                  </div>
                </div>
              </div>

              <div class="prose dark:prose-invert max-w-none">
                <div v-html="issue.bodyHtml"></div>
              </div>

              <div
                class="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700"
              >
                <div class="flex justify-between items-center">
                  <a
                    :href="issue.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-sm text-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 flex items-center"
                  >
                    GitHub에서 댓글 보기
                    <ExternalLinkIcon size="14" class="ml-1" />
                  </a>
                  <button
                    @click="addToSolvedIssues"
                    :class="
                      isSolved
                        ? 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200'
                        : 'bg-emerald-500 hover:bg-emerald-600 text-white'
                    "
                    class="flex items-center justify-center px-4 py-2 rounded-lg transition-colors"
                  >
                    <CheckIcon size="16" class="mr-2" />
                    {{ isSolved ? '해결 완료됨' : '해결 목록에 추가' }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import {
  ArrowLeft as ArrowLeftIcon,
  ExternalLink as ExternalLinkIcon,
  Check as CheckIcon,
} from 'lucide-vue-next';
import applayout from '../components/AppLayout.vue';

const route = useRoute();
const issueId = route.params.id;

// 상태 변수
const isLoadingAnalysis = ref(false);
const isSolved = ref(false);

// 이슈 정보 (실제 구현에서는 API에서 가져옵니다)
const issue = ref({
  id: issueId,
  number: 45678,
  title: 'App Router에서 getStaticProps 동작 개선',
  state: 'open',
  createdAt: '2025-05-10',
  url: 'https://github.com/vercel/next.js/issues/45678',
  repositoryId: '201',
  repositoryName: 'next.js',
  repositoryOwner: 'vercel',
  authorName: 'johndoe',
  authorAvatar:
    'https://ui-avatars.com/api/?name=John+Doe&background=0D9488&color=fff',
  bodyHtml: `
    <h2>문제 설명</h2>
    <p>App Router에서 getStaticProps 함수의 동작이 Pages Router와 일관되지 않습니다. 특히 증분 정적 재생성(ISR) 기능에서 차이가 있어 마이그레이션 시 문제가 발생합니다.</p>
    
    <h2>재현 방법</h2>
    <ol>
      <li>Pages Router에서 getStaticProps와 revalidate 옵션을 사용하는 페이지 생성</li>
      <li>동일한 기능을 App Router로 마이그레이션</li>
      <li>revalidate 동작 비교</li>
    </ol>
    
    <h2>예상 동작</h2>
    <p>App Router에서도 Pages Router와 동일하게 ISR이 작동해야 합니다.</p>
    
    <h2>실제 동작</h2>
    <p>App Router에서는 revalidate 옵션이 다르게 동작하며, 특히 on-demand revalidation에서 차이가 있습니다.</p>
    
    <h2>환경 정보</h2>
    <ul>
      <li>Next.js 버전: 14.0.0</li>
      <li>Node.js 버전: 18.17.0</li>
      <li>운영체제: macOS 14.0</li>
    </ul>
    
    <h2>제안 사항</h2>
    <p>App Router에서 getStaticProps와 유사한 동작을 하는 함수를 개선하여 Pages Router와의 일관성을 유지해야 합니다. 특히 다음 사항을 고려해야 합니다:</p>
    <ul>
      <li>revalidate 옵션의 동작 통일</li>
      <li>on-demand revalidation API 개선</li>
      <li>마이그레이션 가이드 업데이트</li>
    </ul>
  `,
  analysis: {
    summary:
      'Next.js의 App Router와 Pages Router 간의 getStaticProps 동작 불일치 문제입니다. 특히 증분 정적 재생성(ISR) 기능에서 차이가 있어 마이그레이션 시 문제가 발생합니다. 이 이슈는 Next.js의 두 라우팅 시스템 간의 일관성을 유지하는 것이 중요하며, 특히 revalidate 옵션과 on-demand revalidation API의 동작을 통일해야 합니다. 이 문제를 해결하면 Pages Router에서 App Router로의 마이그레이션이 더 원활해질 것입니다.',
    difficultyScore: 65,
    difficultyReason:
      '이 이슈는 Next.js의 내부 동작에 대한 이해와 두 라우팅 시스템의 차이점을 파악해야 하므로 중간 정도의 난이도를 가집니다.',
    techStack: ['React', 'Next.js', 'JavaScript'],
    tags: ['라우팅', '정적 생성', '마이그레이션'],
  },
});

// 해결 목록에 추가
const addToSolvedIssues = () => {
  isSolved.value = !isSolved.value;
  // 실제 구현에서는 API 호출이 필요합니다
};

onMounted(async () => {
  // 실제 구현에서는 API에서 데이터를 가져옵니다
  isLoadingAnalysis.value = true;

  try {
    // 분석 결과 로딩 시뮬레이션
    await new Promise((resolve) => setTimeout(resolve, 1500));
    // 실제 구현에서는 API 호출로 대체됩니다
  } catch (error) {
    console.error('데이터 로딩 중 오류 발생:', error);
  } finally {
    isLoadingAnalysis.value = false;
  }
});
</script>
