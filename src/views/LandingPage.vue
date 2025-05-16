<template>
  <div
    class="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
  >
    <!-- 헤더 -->
    <header
      class="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 shadow-sm"
    >
      <div
        class="container mx-auto px-4 py-3 flex items-center justify-between"
      >
        <div class="flex items-center">
          <div
            class="text-2xl font-bold text-gray-800 dark:text-white flex items-center"
          >
            <span class="text-emerald-500">AI</span>ssue
            <span class="ml-2 text-emerald-500">
              <GitBranchIcon size="20" />
            </span>
          </div>
        </div>
        <nav class="hidden md:flex space-x-8">
          <a
            href="#features"
            class="text-gray-600 hover:text-emerald-500 dark:text-gray-300 dark:hover:text-emerald-400 transition-colors"
            >기능</a
          >
          <a
            href="#how-it-works"
            class="text-gray-600 hover:text-emerald-500 dark:text-gray-300 dark:hover:text-emerald-400 transition-colors"
            >이용 방법</a
          >
          <a
            href="#about"
            class="text-gray-600 hover:text-emerald-500 dark:text-gray-300 dark:hover:text-emerald-400 transition-colors"
            >소개</a
          >
        </nav>
        <button
          @click="loginWithGitHub"
          class="flex items-center bg-gray-800 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
        >
          <GithubIcon class="mr-2" size="18" />
          GitHub 로그인
        </button>
        <button class="md:hidden" @click="mobileMenuOpen = !mobileMenuOpen">
          <MenuIcon
            v-if="!mobileMenuOpen"
            class="text-gray-800 dark:text-white"
            size="24"
          />
          <XIcon v-else class="text-gray-800 dark:text-white" size="24" />
        </button>
      </div>
      <!-- 모바일 메뉴 -->
      <div
        v-if="mobileMenuOpen"
        class="md:hidden bg-white dark:bg-gray-900 shadow-md"
      >
        <div class="container mx-auto px-4 py-3 flex flex-col space-y-3">
          <a
            href="#features"
            class="text-gray-600 hover:text-emerald-500 dark:text-gray-300 dark:hover:text-emerald-400 transition-colors"
            >기능</a
          >
          <a
            href="#how-it-works"
            class="text-gray-600 hover:text-emerald-500 dark:text-gray-300 dark:hover:text-emerald-400 transition-colors"
            >이용 방법</a
          >
          <a
            href="#about"
            class="text-gray-600 hover:text-emerald-500 dark:text-gray-300 dark:hover:text-emerald-400 transition-colors"
            >소개</a
          >
        </div>
      </div>
    </header>

    <!-- 히어로 섹션 -->
    <section class="pt-32 pb-20 px-4">
      <div class="container mx-auto max-w-6xl">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 mb-10 md:mb-0">
            <h1
              class="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white leading-tight mb-4"
            >
              <span class="text-emerald-500">AI</span>로 GitHub 저장소를 더 쉽게
              이해하세요
            </h1>
            <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">
              AIssue는 AI 기반 이슈 분석과 코드 컨벤션 가이드를 통해 개발자가
              GitHub 프로젝트를 빠르게 이해하고 기여할 수 있도록 도와줍니다.
            </p>
            <div
              class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <button
                @click="loginWithGitHub"
                class="flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <GithubIcon class="mr-2" size="20" />
                GitHub으로 시작하기
              </button>
              <a
                href="#features"
                class="flex items-center justify-center bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                더 알아보기
                <ArrowDownIcon class="ml-2" size="20" />
              </a>
            </div>
          </div>
          <div class="md:w-1/2 flex justify-center">
            <div class="relative w-full max-w-md">
              <div
                class="absolute -top-6 -left-6 w-20 h-20 bg-emerald-500/20 rounded-full"
              ></div>
              <div
                class="absolute -bottom-6 -right-6 w-16 h-16 bg-emerald-500/20 rounded-full"
              ></div>
              <div
                class="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 relative z-10"
              >
                <div class="flex items-center mb-4">
                  <div class="flex space-x-2">
                    <div class="w-3 h-3 rounded-full bg-red-500"></div>
                    <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div class="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div
                    class="ml-4 text-sm text-gray-500 dark:text-gray-400 flex items-center"
                  >
                    <GithubIcon size="14" class="mr-1" />
                    repository/issues
                  </div>
                </div>
                <div class="space-y-4">
                  <div class="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
                    <div class="flex items-start">
                      <div class="mr-2 mt-1">
                        <AlertCircleIcon size="16" class="text-emerald-500" />
                      </div>
                      <div>
                        <div
                          class="text-sm font-medium text-gray-800 dark:text-white"
                        >
                          모바일 뷰에서 인증 흐름 수정
                        </div>
                        <div
                          class="text-xs text-gray-500 dark:text-gray-400 mt-1"
                        >
                          <span
                            class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200"
                          >
                            AI 요약
                          </span>
                        </div>
                        <p
                          class="text-xs text-gray-600 dark:text-gray-300 mt-2"
                        >
                          OAuth에서 리디렉션 시 모바일 기기에서 인증 흐름이
                          깨집니다. 적절한 상태 관리와 반응형 디자인 수정이
                          필요합니다.
                        </p>
                        <div class="flex mt-2 space-x-2">
                          <span
                            class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                          >
                            React
                          </span>
                          <span
                            class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
                          >
                            인증
                          </span>
                          <span
                            class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                          >
                            중간
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
                    <div class="flex items-start">
                      <div class="mr-2 mt-1">
                        <BugIcon size="16" class="text-red-500" />
                      </div>
                      <div>
                        <div
                          class="text-sm font-medium text-gray-800 dark:text-white"
                        >
                          대시보드 컴포넌트 메모리 누수
                        </div>
                        <div
                          class="text-xs text-gray-500 dark:text-gray-400 mt-1"
                        >
                          <span
                            class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200"
                          >
                            AI 요약
                          </span>
                        </div>
                        <p
                          class="text-xs text-gray-600 dark:text-gray-300 mt-2"
                        >
                          대시보드 컴포넌트가 이벤트 리스너를 제대로 정리하지
                          않아 메모리 누수가 발생합니다. useEffect 정리 함수
                          구현이 필요합니다.
                        </p>
                        <div class="flex mt-2 space-x-2">
                          <span
                            class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                          >
                            React
                          </span>
                          <span
                            class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                          >
                            버그
                          </span>
                          <span
                            class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
                          >
                            높음
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 기능 섹션 -->
    <section id="features" class="py-20 bg-white dark:bg-gray-800">
      <div class="container mx-auto px-4 max-w-6xl">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            주요 기능
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            AIssue는 GitHub 저장소를 더 빠르게 이해하고 효과적으로 기여할 수
            있도록 도와줍니다.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            class="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div
              class="w-14 h-14 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mb-6"
            >
              <FileTextIcon size="24" class="text-emerald-500" />
            </div>
            <h3
              class="text-xl font-semibold text-gray-800 dark:text-white mb-3"
            >
              AI 이슈 분석
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              AI 기반 요약, 난이도 점수, 관련 태그를 통해 GitHub 이슈를 빠르게
              이해하고 중요한 내용을 파악할 수 있습니다.
            </p>
          </div>
          <div
            class="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div
              class="w-14 h-14 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mb-6"
            >
              <BookOpenIcon size="24" class="text-emerald-500" />
            </div>
            <h3
              class="text-xl font-semibold text-gray-800 dark:text-white mb-3"
            >
              README 요약
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              AI가 생성한 README 파일 요약과 주요 프로젝트 정보를 통해 저장소를
              빠르게 이해할 수 있습니다.
            </p>
          </div>
          <div
            class="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div
              class="w-14 h-14 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mb-6"
            >
              <MessageSquareIcon size="24" class="text-emerald-500" />
            </div>
            <h3
              class="text-xl font-semibold text-gray-800 dark:text-white mb-3"
            >
              개발 가이드 봇
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              저장소의 코드 컨벤션을 이해하고 기여를 안내할 수 있는 AI
              어시스턴트와 채팅할 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 이용 방법 -->
    <section id="how-it-works" class="py-20 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4 max-w-6xl">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            이용 방법
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            AIssue는 몇 가지 단계만으로 GitHub 워크플로우를 간소화합니다.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div
              class="w-16 h-16 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <GithubIcon size="28" class="text-emerald-500" />
            </div>
            <h3
              class="text-xl font-semibold text-gray-800 dark:text-white mb-3"
            >
              1. GitHub 연결
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              GitHub 계정으로 로그인하여 저장소와 이슈에 접근합니다.
            </p>
          </div>
          <div class="text-center">
            <div
              class="w-16 h-16 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <SearchIcon size="28" class="text-emerald-500" />
            </div>
            <h3
              class="text-xl font-semibold text-gray-800 dark:text-white mb-3"
            >
              2. 저장소 찾기
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              이해하거나 기여하고 싶은 저장소를 검색합니다.
            </p>
          </div>
          <div class="text-center">
            <div
              class="w-16 h-16 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <ZapIcon size="28" class="text-emerald-500" />
            </div>
            <h3
              class="text-xl font-semibold text-gray-800 dark:text-white mb-3"
            >
              3. AI 분석
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              저장소 콘텐츠, 이슈, 코드 컨벤션에 대한 AI 기반 인사이트를
              얻습니다.
            </p>
          </div>
          <div class="text-center">
            <div
              class="w-16 h-16 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CodeIcon size="28" class="text-emerald-500" />
            </div>
            <h3
              class="text-xl font-semibold text-gray-800 dark:text-white mb-3"
            >
              4. 기여하기
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              인사이트를 활용하여 자신감을 가지고 효율적으로 프로젝트에
              기여합니다.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA 섹션 -->
    <section id="about" class="py-20 bg-emerald-500">
      <div class="container mx-auto px-4 max-w-6xl text-center">
        <h2 class="text-3xl font-bold text-white mb-6">
          GitHub 워크플로우를 향상시킬 준비가 되셨나요?
        </h2>
        <p class="text-xl text-emerald-50 mb-10 max-w-3xl mx-auto">
          지금 AIssue에 가입하고 저장소를 더 빠르게 이해하고, 작업할 적합한
          이슈를 찾고, 자신감을 가지고 기여해 보세요.
        </p>
        <button
          @click="loginWithGitHub"
          class="bg-white hover:bg-gray-100 text-emerald-600 px-8 py-4 rounded-lg font-medium text-lg shadow-lg hover:shadow-xl transition-all flex items-center mx-auto"
        >
          <GithubIcon class="mr-3" size="24" />
          GitHub으로 로그인하고 시작하기
        </button>
      </div>
    </section>

    <!-- 푸터 -->
    <footer class="bg-gray-800 dark:bg-gray-900 text-white py-12">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="mb-6 md:mb-0">
            <div class="text-2xl font-bold flex items-center">
              <span class="text-emerald-400">AI</span>ssue
              <span class="ml-2 text-emerald-400">
                <GitBranchIcon size="20" />
              </span>
            </div>
            <p class="text-gray-400 mt-2">AI로 GitHub 저장소 이해하기</p>
          </div>
          <div
            class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8"
          >
            <a
              href="#features"
              class="text-gray-300 hover:text-emerald-400 transition-colors"
              >기능</a
            >
            <a
              href="#how-it-works"
              class="text-gray-300 hover:text-emerald-400 transition-colors"
              >이용 방법</a
            >
            <router-link
              to="/privacy-policy"
              class="text-gray-300 hover:text-emerald-400 transition-colors"
              >개인정보 처리방침</router-link
            >
            <router-link
              to="/terms-of-service"
              class="text-gray-300 hover:text-emerald-400 transition-colors"
              >서비스 이용약관</router-link
            >
          </div>
        </div>
        <div
          class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400"
        >
          <p>&copy; {{ new Date().getFullYear() }} AIssue. 모든 권리 보유.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'; // useRouter 임포트
import {
  Github as GithubIcon,
  Menu as MenuIcon,
  X as XIcon,
  FileText as FileTextIcon,
  BookOpen as BookOpenIcon,
  MessageSquare as MessageSquareIcon,
  Search as SearchIcon,
  Zap as ZapIcon,
  Code as CodeIcon,
  AlertCircle as AlertCircleIcon,
  Bug as BugIcon,
  GitBranch as GitBranchIcon,
  ArrowDown as ArrowDownIcon,
} from 'lucide-vue-next';

const mobileMenuOpen = ref(false);
const router = useRouter(); // router 인스턴스 사용

const loginWithGitHub = () => {
  // 데모 목적으로 localStorage에 임시 토큰 설정
  localStorage.setItem('auth_token', 'demo_token_landing');
  // /dashboard로 라우팅
  router.push('/dashboard');

  // 기존 GitHub OAuth 로직은 주석 처리 또는 제거
  // console.log('GitHub OAuth로 리디렉션 중...');
  // alert('실제 구현에서는 GitHub OAuth로 리디렉션됩니다');
};
</script>

<style>
/* 필요한 경우 여기에 추가 사용자 정의 스타일을 추가할 수 있습니다 */
</style>
