<template>
<div class="min-h-screen bg-gray-50 dark:bg-gray-900">
  <!-- 네비게이션 바 -->
  <nav class="bg-white dark:bg-gray-800 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="flex-shrink-0 flex items-center">
            <router-link to="/dashboard" class="text-2xl font-bold text-gray-800 dark:text-white flex items-center">
              <span class="text-emerald-500">AI</span>ssue
              <span class="ml-2 text-emerald-500">
                <GitBranchIcon size="20" />
              </span>
            </router-link>
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <router-link to="/dashboard" class="border-emerald-500 text-gray-900 dark:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
              대시보드
            </router-link>
            <router-link to="/repositories" class="border-transparent text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
              저장소
            </router-link>
            <router-link to="/my-activity" class="border-transparent text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
              나의 활동
            </router-link>
            <router-link to="/guide-bot" class="border-transparent text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
              개발 가이드 봇
            </router-link>
          </div>
        </div>
        <div class="hidden sm:ml-6 sm:flex sm:items-center">
          <button type="button" class="bg-white dark:bg-gray-800 p-1 rounded-full text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500">
            <span class="sr-only">알림 보기</span>
            <BellIcon class="h-6 w-6" />
          </button>

          <!-- 프로필 드롭다운 -->
          <div class="ml-3 relative">
            <div>
              <button @click="profileDropdownOpen = !profileDropdownOpen" type="button" class="bg-white dark:bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                <span class="sr-only">프로필 메뉴 열기</span>
                <img class="h-8 w-8 rounded-full" src="https://avatars.githubusercontent.com/u/12345678?v=4" alt="사용자 프로필">
              </button>
            </div>
            <div v-if="profileDropdownOpen" class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
              <router-link to="/profile" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600" role="menuitem">프로필</router-link>
              <router-link to="/settings" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600" role="menuitem">설정</router-link>
              <button @click="logout" class="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600" role="menuitem">로그아웃</button>
            </div>
          </div>
        </div>
        <div class="-mr-2 flex items-center sm:hidden">
          <!-- 모바일 메뉴 버튼 -->
          <button @click="mobileMenuOpen = !mobileMenuOpen" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500" aria-controls="mobile-menu" aria-expanded="false">
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
        <router-link to="/dashboard" class="bg-emerald-50 dark:bg-emerald-900 border-emerald-500 text-emerald-700 dark:text-emerald-200 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
          대시보드
        </router-link>
        <router-link to="/repositories" class="border-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
          저장소
        </router-link>
        <router-link to="/my-activity" class="border-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
          나의 활동
        </router-link>
        <router-link to="/guide-bot" class="border-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
          개발 가이드 봇
        </router-link>
      </div>
      <div class="pt-4 pb-3 border-t border-gray-200 dark:border-gray-600">
        <div class="flex items-center px-4">
          <div class="flex-shrink-0">
            <img class="h-10 w-10 rounded-full" src="https://avatars.githubusercontent.com/u/12345678?v=4" alt="사용자 프로필">
          </div>
          <div class="ml-3">
            <div class="text-base font-medium text-gray-800 dark:text-white">김개발</div>
            <div class="text-sm font-medium text-gray-500 dark:text-gray-400">dev@example.com</div>
          </div>
          <button type="button" class="ml-auto flex-shrink-0 bg-white dark:bg-gray-800 p-1 rounded-full text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500">
            <span class="sr-only">알림 보기</span>
            <BellIcon class="h-6 w-6" />
          </button>
        </div>
        <div class="mt-3 space-y-1">
          <router-link to="/profile" class="block px-4 py-2 text-base font-medium text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            프로필
          </router-link>
          <router-link to="/settings" class="block px-4 py-2 text-base font-medium text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            설정
          </router-link>
          <button @click="logout" class="block w-full text-left px-4 py-2 text-base font-medium text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            로그아웃
          </button>
        </div>
      </div>
    </div>
  </nav>

  <!-- 메인 콘텐츠 -->
  <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
    <!-- 환영 메시지 -->
    <div class="px-4 sm:px-0">
      <h1 class="text-2xl font-semibold text-gray-900 dark:text-white">안녕하세요, 김개발님!</h1>
      <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
        GitHub 저장소와 이슈를 AI로 더 쉽게 이해하고 기여해보세요.
      </p>
    </div>

    <div class="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <!-- 빠른 액션 카드 -->
      <div class="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
        <div class="p-5">
          <div class="flex items-center">
            <div class="flex-shrink-0 bg-emerald-500 rounded-md p-3">
              <SearchIcon class="h-6 w-6 text-white" />
            </div>
            <div class="ml-5 w-0 flex-1">
              <dl>
                <dt class="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                  저장소 검색
                </dt>
                <dd>
                  <div class="text-lg font-medium text-gray-900 dark:text-white">
                    새로운 저장소 탐색
                  </div>
                </dd>
              </dl>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 dark:bg-gray-700 px-5 py-3">
          <div class="text-sm">
            <router-link to="/repositories/search" class="font-medium text-emerald-600 hover:text-emerald-500 dark:text-emerald-400 dark:hover:text-emerald-300">
              저장소 검색하기
            </router-link>
          </div>
        </div>
      </div>

      <!-- 개발 가이드 봇 카드 -->
      <div class="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
        <div class="p-5">
          <div class="flex items-center">
            <div class="flex-shrink-0 bg-purple-500 rounded-md p-3">
              <MessageSquareIcon class="h-6 w-6 text-white" />
            </div>
            <div class="ml-5 w-0 flex-1">
              <dl>
                <dt class="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                  개발 가이드 봇
                </dt>
                <dd>
                  <div class="text-lg font-medium text-gray-900 dark:text-white">
                    AI 어시스턴트와 대화
                  </div>
                </dd>
              </dl>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 dark:bg-gray-700 px-5 py-3">
          <div class="text-sm">
            <router-link to="/guide-bot" class="font-medium text-emerald-600 hover:text-emerald-500 dark:text-emerald-400 dark:hover:text-emerald-300">
              봇과 대화하기
            </router-link>
          </div>
        </div>
      </div>

      <!-- 나의 활동 카드 -->
      <div class="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
        <div class="p-5">
          <div class="flex items-center">
            <div class="flex-shrink-0 bg-blue-500 rounded-md p-3">
              <ActivityIcon class="h-6 w-6 text-white" />
            </div>
            <div class="ml-5 w-0 flex-1">
              <dl>
                <dt class="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                  나의 활동
                </dt>
                <dd>
                  <div class="text-lg font-medium text-gray-900 dark:text-white">
                    활동 내역 및 통계
                  </div>
                </dd>
              </dl>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 dark:bg-gray-700 px-5 py-3">
          <div class="text-sm">
            <router-link to="/my-activity" class="font-medium text-emerald-600 hover:text-emerald-500 dark:text-emerald-400 dark:hover:text-emerald-300">
              활동 보기
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- 맞춤형 이슈 추천 -->
    <div class="mt-8">
      <div class="flex items-center justify-between">
        <h2 class="text-lg font-medium text-gray-900 dark:text-white">맞춤형 이슈 추천</h2>
        <router-link to="/recommended-issues" class="text-sm font-medium text-emerald-600 hover:text-emerald-500 dark:text-emerald-400 dark:hover:text-emerald-300">
          모두 보기
        </router-link>
      </div>
      <div class="mt-4 space-y-4">
        <!-- 추천 이슈 1 -->
        <div class="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-md">
          <div class="px-4 py-5 sm:px-6">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                  React 컴포넌트 성능 최적화
                </h3>
                <p class="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">
                  <span class="inline-flex items-center">
                    <GithubIcon class="mr-1 h-4 w-4" />
                    frontend-project/react-app
                  </span>
                </p>
              </div>
              <div class="flex items-center">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 mr-2">
                  AI 점수: 85
                </span>
                <ChevronRightIcon class="h-5 w-5 text-gray-400" />
              </div>
            </div>
            <div class="mt-3">
              <p class="text-sm text-gray-600 dark:text-gray-300">
                대규모 목록 렌더링 시 성능 문제 발생. React.memo, useCallback, 가상화 기법 적용 필요. 사용자 경험 개선을 위한 중요 이슈.
              </p>
              <div class="mt-2 flex flex-wrap gap-2">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  React
                </span>
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                  성능
                </span>
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                  중간 난이도
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- 추천 이슈 2 -->
        <div class="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-md">
          <div class="px-4 py-5 sm:px-6">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                  API 응답 캐싱 구현
                </h3>
                <p class="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">
                  <span class="inline-flex items-center">
                    <GithubIcon class="mr-1 h-4 w-4" />
                    backend-service/api
                  </span>
                </p>
              </div>
              <div class="flex items-center">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 mr-2">
                  AI 점수: 92
                </span>
                <ChevronRightIcon class="h-5 w-5 text-gray-400" />
              </div>
            </div>
            <div class="mt-3">
              <p class="text-sm text-gray-600 dark:text-gray-300">
                자주 요청되는 API 엔드포인트에 대한 캐싱 레이어 구현 필요. Redis 또는 인메모리 캐싱 솔루션 검토. 서버 부하 감소 및 응답 시간 개선 목표.
              </p>
              <div class="mt-2 flex flex-wrap gap-2">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  Backend
                </span>
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                  성능
                </span>
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
                  높은 우선순위
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- 추천 이슈 3 -->
        <div class="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-md">
          <div class="px-4 py-5 sm:px-6">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                  모바일 뷰 반응형 디자인 개선
                </h3>
                <p class="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">
                  <span class="inline-flex items-center">
                    <GithubIcon class="mr-1 h-4 w-4" />
                    ui-components/design-system
                  </span>
                </p>
              </div>
              <div class="flex items-center">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 mr-2">
                  AI 점수: 78
                </span>
                <ChevronRightIcon class="h-5 w-5 text-gray-400" />
              </div>
            </div>
            <div class="mt-3">
              <p class="text-sm text-gray-600 dark:text-gray-300">
                작은 화면에서 UI 컴포넌트 레이아웃 문제 해결 필요. 미디어 쿼리 최적화 및 모바일 우선 접근 방식 적용. 사용자 경험 일관성 유지 중요.
              </p>
              <div class="mt-2 flex flex-wrap gap-2">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  CSS
                </span>
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200">
                  UI/UX
                </span>
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                  초보자 친화적
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 최근 해결 이슈 -->
    <div class="mt-8">
      <div class="flex items-center justify-between">
        <h2 class="text-lg font-medium text-gray-900 dark:text-white">최근 해결 이슈</h2>
        <router-link to="/my-activity/solved-issues" class="text-sm font-medium text-emerald-600 hover:text-emerald-500 dark:text-emerald-400 dark:hover:text-emerald-300">
          모두 보기
        </router-link>
      </div>
      <div class="mt-4 bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-md">
        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
          <li>
            <div class="px-4 py-4 sm:px-6">
              <div class="flex items-center justify-between">
                <p class="text-sm font-medium text-emerald-600 dark:text-emerald-400 truncate">
                  로그인 인증 흐름 버그 수정
                </p>
                <div class="ml-2 flex-shrink-0 flex">
                  <p class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                    완료됨
                  </p>
                </div>
              </div>
              <div class="mt-2 sm:flex sm:justify-between">
                <div class="sm:flex">
                  <p class="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <GithubIcon class="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400 dark:text-gray-500" />
                    auth-service/login-flow
                  </p>
                </div>
                <div class="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                  <ClockIcon class="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400 dark:text-gray-500" />
                  <p>
                    3일 전에 해결
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="px-4 py-4 sm:px-6">
              <div class="flex items-center justify-between">
                <p class="text-sm font-medium text-emerald-600 dark:text-emerald-400 truncate">
                  데이터 시각화 차트 구현
                </p>
                <div class="ml-2 flex-shrink-0 flex">
                  <p class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                    완료됨
                  </p>
                </div>
              </div>
              <div class="mt-2 sm:flex sm:justify-between">
                <div class="sm:flex">
                  <p class="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <GithubIcon class="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400 dark:text-gray-500" />
                    analytics-dashboard/charts
                  </p>
                </div>
                <div class="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                  <ClockIcon class="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400 dark:text-gray-500" />
                  <p>
                    1주일 전에 해결
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- 내 저장소 -->
    <div class="mt-8">
      <div class="flex items-center justify-between">
        <h2 class="text-lg font-medium text-gray-900 dark:text-white">내 저장소</h2>
        <router-link to="/repositories" class="text-sm font-medium text-emerald-600 hover:text-emerald-500 dark:text-emerald-400 dark:hover:text-emerald-300">
          모두 보기
        </router-link>
      </div>
      <div class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <!-- 저장소 1 -->
        <div class="relative rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 dark:hover:border-gray-500">
          <div class="flex-shrink-0">
            <div class="h-10 w-10 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold">
              F
            </div>
          </div>
          <div class="flex-1 min-w-0">
            <router-link to="/repositories/1" class="focus:outline-none">
              <span class="absolute inset-0" aria-hidden="true"></span>
              <p class="text-sm font-medium text-gray-900 dark:text-white">
                frontend-project/react-app
              </p>
              <p class="text-sm text-gray-500 dark:text-gray-400 truncate">
                React 기반 프론트엔드 애플리케이션
              </p>
            </router-link>
          </div>
        </div>

        <!-- 저장소 2 -->
        <div class="relative rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 dark:hover:border-gray-500">
          <div class="flex-shrink-0">
            <div class="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
              B
            </div>
          </div>
          <div class="flex-1 min-w-0">
            <router-link to="/repositories/2" class="focus:outline-none">
              <span class="absolute inset-0" aria-hidden="true"></span>
              <p class="text-sm font-medium text-gray-900 dark:text-white">
                backend-service/api
              </p>
              <p class="text-sm text-gray-500 dark:text-gray-400 truncate">
                Node.js 기반 백엔드 API 서비스
              </p>
            </router-link>
          </div>
        </div>

        <!-- 저장소 3 -->
        <div class="relative rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 dark:hover:border-gray-500">
          <div class="flex-shrink-0">
            <div class="h-10 w-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">
              U
            </div>
          </div>
          <div class="flex-1 min-w-0">
            <router-link to="/repositories/3" class="focus:outline-none">
              <span class="absolute inset-0" aria-hidden="true"></span>
              <p class="text-sm font-medium text-gray-900 dark:text-white">
                ui-components/design-system
              </p>
              <p class="text-sm text-gray-500 dark:text-gray-400 truncate">
                재사용 가능한 UI 컴포넌트 라이브러리
              </p>
            </router-link>
          </div>
        </div>

        <!-- 저장소 4 -->
        <div class="relative rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 dark:hover:border-gray-500">
          <div class="flex-shrink-0">
            <div class="h-10 w-10 rounded-full bg-red-500 flex items-center justify-center text-white font-bold">
              A
            </div>
          </div>
          <div class="flex-1 min-w-0">
            <router-link to="/repositories/4" class="focus:outline-none">
              <span class="absolute inset-0" aria-hidden="true"></span>
              <p class="text-sm font-medium text-gray-900 dark:text-white">
                auth-service/login-flow
              </p>
              <p class="text-sm text-gray-500 dark:text-gray-400 truncate">
                인증 및 권한 관리 서비스
              </p>
            </router-link>
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
  Search as SearchIcon,
  MessageSquare as MessageSquareIcon,
  Activity as ActivityIcon,
  Github as GithubIcon,
  ChevronRight as ChevronRightIcon,
  Clock as ClockIcon,
  GitBranch as GitBranchIcon
} from 'lucide-vue-next';

const mobileMenuOpen = ref(false);
const profileDropdownOpen = ref(false);

const logout = () => {
// 로그아웃 로직 구현
alert('로그아웃 기능이 구현될 예정입니다.');
profileDropdownOpen.value = false;
};
</script>
