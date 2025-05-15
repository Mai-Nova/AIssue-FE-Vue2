<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    &lt;!-- 네비게이션 바 (대시보드와 동일) -->
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
          <div class="hidden sm:ml-6 sm:flex sm:items-center">
            <button
              type="button"
              class="bg-white dark:bg-gray-800 p-1 rounded-full text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
            >
              <span class="sr-only">알림 보기</span>
              <BellIcon class="h-6 w-6" />
            </button>

            &lt;!-- 프로필 드롭다운 -->
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
            &lt;!-- 모바일 메뉴 버튼 -->
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

      &lt;!-- 모바일 메뉴 -->
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

    &lt;!-- 메인 콘텐츠 -->
    <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 sm:px-0 mb-6">
        <h1 class="text-2xl font-semibold text-gray-900 dark:text-white">
          설정
        </h1>
        <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
          계정 설정 및 앱 환경설정을 관리하세요.
        </p>
      </div>

      <div
        class="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg"
      >
        <div
          class="px-4 py-5 sm:px-6 border-b border-gray-200 dark:border-gray-700"
        >
          <h3
            class="text-lg leading-6 font-medium text-gray-900 dark:text-white"
          >
            앱 설정
          </h3>
          <p class="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">
            앱 테마 및 알림 설정을 관리하세요.
          </p>
        </div>
        <div class="border-b border-gray-200 dark:border-gray-700">
          <dl>
            &lt;!-- 다크 모드 설정 -->
            <div
              class="bg-gray-50 dark:bg-gray-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
            >
              <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                다크 모드
              </dt>
              <dd
                class="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2"
              >
                <div class="flex items-center">
                  <button
                    @click="darkMode = 'light'"
                    :class="[
                      darkMode === 'light'
                        ? 'bg-emerald-600'
                        : 'bg-gray-200 dark:bg-gray-600',
                      'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500',
                    ]"
                    role="switch"
                    aria-checked="false"
                  >
                    <span
                      :class="[
                        darkMode === 'light'
                          ? 'translate-x-5'
                          : 'translate-x-0',
                        'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
                      ]"
                    ></span>
                  </button>
                  <span class="ml-3 text-sm text-gray-900 dark:text-white"
                    >라이트 모드</span
                  >
                </div>
                <div class="flex items-center mt-3">
                  <button
                    @click="darkMode = 'dark'"
                    :class="[
                      darkMode === 'dark'
                        ? 'bg-emerald-600'
                        : 'bg-gray-200 dark:bg-gray-600',
                      'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500',
                    ]"
                    role="switch"
                    aria-checked="false"
                  >
                    <span
                      :class="[
                        darkMode === 'dark' ? 'translate-x-5' : 'translate-x-0',
                        'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
                      ]"
                    ></span>
                  </button>
                  <span class="ml-3 text-sm text-gray-900 dark:text-white"
                    >다크 모드</span
                  >
                </div>
                <div class="flex items-center mt-3">
                  <button
                    @click="darkMode = 'system'"
                    :class="[
                      darkMode === 'system'
                        ? 'bg-emerald-600'
                        : 'bg-gray-200 dark:bg-gray-600',
                      'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500',
                    ]"
                    role="switch"
                    aria-checked="false"
                  >
                    <span
                      :class="[
                        darkMode === 'system'
                          ? 'translate-x-5'
                          : 'translate-x-0',
                        'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
                      ]"
                    ></span>
                  </button>
                  <span class="ml-3 text-sm text-gray-900 dark:text-white"
                    >시스템 설정 사용</span
                  >
                </div>
              </dd>
            </div>

            &lt;!-- 언어 설정 -->
            <div
              class="bg-white dark:bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
            >
              <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                언어
              </dt>
              <dd
                class="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2"
              >
                <select
                  v-model="language"
                  class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm rounded-md"
                >
                  <option value="ko">한국어</option>
                  <option value="en">English</option>
                  <option value="ja">日本語</option>
                  <option value="zh">中文</option>
                </select>
              </dd>
            </div>

            &lt;!-- 알림 설정 -->
            <div
              class="bg-gray-50 dark:bg-gray-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
            >
              <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                알림 설정
              </dt>
              <dd
                class="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2"
              >
                <div class="space-y-4">
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input
                        id="email-notifications"
                        v-model="notifications.email"
                        type="checkbox"
                        class="focus:ring-emerald-500 h-4 w-4 text-emerald-600 border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded"
                      />
                    </div>
                    <div class="ml-3 text-sm">
                      <label
                        for="email-notifications"
                        class="font-medium text-gray-700 dark:text-gray-300"
                        >이메일 알림</label
                      >
                      <p class="text-gray-500 dark:text-gray-400">
                        새로운 이슈 추천 및 활동 요약을 이메일로 받습니다.
                      </p>
                    </div>
                  </div>
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input
                        id="browser-notifications"
                        v-model="notifications.browser"
                        type="checkbox"
                        class="focus:ring-emerald-500 h-4 w-4 text-emerald-600 border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded"
                      />
                    </div>
                    <div class="ml-3 text-sm">
                      <label
                        for="browser-notifications"
                        class="font-medium text-gray-700 dark:text-gray-300"
                        >브라우저 알림</label
                      >
                      <p class="text-gray-500 dark:text-gray-400">
                        브라우저에서 실시간 알림을 받습니다.
                      </p>
                    </div>
                  </div>
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input
                        id="weekly-digest"
                        v-model="notifications.weeklyDigest"
                        type="checkbox"
                        class="focus:ring-emerald-500 h-4 w-4 text-emerald-600 border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded"
                      />
                    </div>
                    <div class="ml-3 text-sm">
                      <label
                        for="weekly-digest"
                        class="font-medium text-gray-700 dark:text-gray-300"
                        >주간 요약</label
                      >
                      <p class="text-gray-500 dark:text-gray-400">
                        일주일 동안의 활동 요약을 받습니다.
                      </p>
                    </div>
                  </div>
                </div>
              </dd>
            </div>
          </dl>
        </div>

        &lt;!-- GitHub 연동 설정 -->
        <div
          class="px-4 py-5 sm:px-6 border-b border-gray-200 dark:border-gray-700"
        >
          <h3
            class="text-lg leading-6 font-medium text-gray-900 dark:text-white"
          >
            GitHub 연동
          </h3>
          <p class="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">
            GitHub 계정 연동 및 권한 설정을 관리하세요.
          </p>
        </div>
        <div class="border-b border-gray-200 dark:border-gray-700">
          <dl>
            <div
              class="bg-gray-50 dark:bg-gray-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
            >
              <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                연결된 계정
              </dt>
              <dd
                class="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2"
              >
                <div class="flex items-center">
                  <GithubIcon
                    class="h-5 w-5 text-gray-400 dark:text-gray-500 mr-2"
                  />
                  <span>@devkim</span>
                  <span
                    class="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                  >
                    연결됨
                  </span>
                  <button
                    @click="disconnectGitHub"
                    class="ml-4 text-sm text-red-600 hover:text-red-500 dark:text-red-400 dark:hover:text-red-300"
                  >
                    연결 해제
                  </button>
                </div>
              </dd>
            </div>
            <div
              class="bg-white dark:bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
            >
              <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                권한 설정
              </dt>
              <dd
                class="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2"
              >
                <div class="space-y-4">
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input
                        id="read-repos"
                        v-model="githubPermissions.readRepos"
                        type="checkbox"
                        class="focus:ring-emerald-500 h-4 w-4 text-emerald-600 border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded"
                      />
                    </div>
                    <div class="ml-3 text-sm">
                      <label
                        for="read-repos"
                        class="font-medium text-gray-700 dark:text-gray-300"
                        >저장소 읽기</label
                      >
                      <p class="text-gray-500 dark:text-gray-400">
                        공개 및 비공개 저장소의 코드, 이슈, PR을 읽을 수
                        있습니다.
                      </p>
                    </div>
                  </div>
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input
                        id="write-issues"
                        v-model="githubPermissions.writeIssues"
                        type="checkbox"
                        class="focus:ring-emerald-500 h-4 w-4 text-emerald-600 border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded"
                      />
                    </div>
                    <div class="ml-3 text-sm">
                      <label
                        for="write-issues"
                        class="font-medium text-gray-700 dark:text-gray-300"
                        >이슈 작성</label
                      >
                      <p class="text-gray-500 dark:text-gray-400">
                        저장소에 이슈를 생성하고 댓글을 작성할 수 있습니다.
                      </p>
                    </div>
                  </div>
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input
                        id="write-prs"
                        v-model="githubPermissions.writePRs"
                        type="checkbox"
                        class="focus:ring-emerald-500 h-4 w-4 text-emerald-600 border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded"
                      />
                    </div>
                    <div class="ml-3 text-sm">
                      <label
                        for="write-prs"
                        class="font-medium text-gray-700 dark:text-gray-300"
                        >PR 작성</label
                      >
                      <p class="text-gray-500 dark:text-gray-400">
                        저장소에 Pull Request를 생성하고 코드를 제출할 수
                        있습니다.
                      </p>
                    </div>
                  </div>
                </div>
              </dd>
            </div>
          </dl>
        </div>

        &lt;!-- 계정 설정 -->
        <div
          class="px-4 py-5 sm:px-6 border-b border-gray-200 dark:border-gray-700"
        >
          <h3
            class="text-lg leading-6 font-medium text-gray-900 dark:text-white"
          >
            계정 설정
          </h3>
          <p class="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">
            계정 보안 및 개인정보 설정을 관리하세요.
          </p>
        </div>
        <div class="border-b border-gray-200 dark:border-gray-700">
          <dl>
            <div
              class="bg-gray-50 dark:bg-gray-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
            >
              <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                비밀번호 변경
              </dt>
              <dd
                class="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2"
              >
                <button
                  @click="showChangePasswordModal = true"
                  class="inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-600 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                >
                  비밀번호 변경
                </button>
              </dd>
            </div>
            <div
              class="bg-white dark:bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
            >
              <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                2단계 인증
              </dt>
              <dd
                class="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2"
              >
                <div class="flex items-center">
                  <button
                    @click="twoFactorAuth = !twoFactorAuth"
                    :class="[
                      twoFactorAuth
                        ? 'bg-emerald-600'
                        : 'bg-gray-200 dark:bg-gray-600',
                      'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500',
                    ]"
                    role="switch"
                    aria-checked="false"
                  >
                    <span
                      :class="[
                        twoFactorAuth ? 'translate-x-5' : 'translate-x-0',
                        'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
                      ]"
                    ></span>
                  </button>
                  <span class="ml-3 text-sm text-gray-900 dark:text-white">{{
                    twoFactorAuth ? '활성화됨' : '비활성화됨'
                  }}</span>
                </div>
                <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  2단계 인증을 활성화하면 로그인 시 추가 보안 코드가 필요합니다.
                </p>
              </dd>
            </div>
            <div
              class="bg-gray-50 dark:bg-gray-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
            >
              <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                데이터 내보내기
              </dt>
              <dd
                class="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2"
              >
                <button
                  @click="exportData"
                  class="inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-600 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                >
                  <DownloadIcon class="-ml-0.5 mr-2 h-4 w-4" />
                  데이터 내보내기
                </button>
                <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  내 활동 데이터와 설정을 JSON 형식으로 내보냅니다.
                </p>
              </dd>
            </div>
            <div
              class="bg-white dark:bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
            >
              <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                계정 삭제
              </dt>
              <dd
                class="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2"
              >
                <button
                  @click="showDeleteAccountModal = true"
                  class="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  계정 삭제
                </button>
                <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  계정을 삭제하면 모든 데이터가 영구적으로 제거됩니다. 이 작업은
                  되돌릴 수 없습니다.
                </p>
              </dd>
            </div>
          </dl>
        </div>

        &lt;!-- 설정 저장 버튼 -->
        <div class="px-4 py-3 bg-gray-50 dark:bg-gray-700 text-right sm:px-6">
          <button
            @click="saveSettings"
            class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
          >
            설정 저장
          </button>
        </div>
      </div>

      &lt;!-- 비밀번호 변경 모달 -->
      <div
        v-if="showChangePasswordModal"
        class="fixed z-10 inset-0 overflow-y-auto"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div
          class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
        >
          <div
            class="fixed inset-0 bg-gray-500 bg-opacity-75 dark:bg-gray-900 dark:bg-opacity-75 transition-opacity"
            aria-hidden="true"
            @click="showChangePasswordModal = false"
          ></div>

          <span
            class="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
            >&#8203;</span
          >

          <div
            class="inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          >
            <div
              class="bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4"
            >
              <div class="sm:flex sm:items-start">
                <div
                  class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full"
                >
                  <h3
                    class="text-lg leading-6 font-medium text-gray-900 dark:text-white"
                    id="modal-title"
                  >
                    비밀번호 변경
                  </h3>
                  <div class="mt-4">
                    <label
                      for="current-password"
                      class="block text-sm font-medium text-gray-700 dark:text-gray-300"
                      >현재 비밀번호</label
                    >
                    <input
                      type="password"
                      id="current-password"
                      v-model="passwordChange.current"
                      class="mt-1 focus:ring-emerald-500 focus:border-emerald-500 block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md"
                    />
                  </div>
                  <div class="mt-4">
                    <label
                      for="new-password"
                      class="block text-sm font-medium text-gray-700 dark:text-gray-300"
                      >새 비밀번호</label
                    >
                    <input
                      type="password"
                      id="new-password"
                      v-model="passwordChange.new"
                      class="mt-1 focus:ring-emerald-500 focus:border-emerald-500 block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md"
                    />
                  </div>
                  <div class="mt-4">
                    <label
                      for="confirm-password"
                      class="block text-sm font-medium text-gray-700 dark:text-gray-300"
                      >새 비밀번호 확인</label
                    >
                    <input
                      type="password"
                      id="confirm-password"
                      v-model="passwordChange.confirm"
                      class="mt-1 focus:ring-emerald-500 focus:border-emerald-500 block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              class="bg-gray-50 dark:bg-gray-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"
            >
              <button
                type="button"
                @click="changePassword"
                class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-emerald-600 text-base font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                변경
              </button>
              <button
                type="button"
                @click="showChangePasswordModal = false"
                class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 dark:border-gray-600 shadow-sm px-4 py-2 bg-white dark:bg-gray-800 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              >
                취소
              </button>
            </div>
          </div>
        </div>
      </div>

      &lt;!-- 계정 삭제 모달 -->
      <div
        v-if="showDeleteAccountModal"
        class="fixed z-10 inset-0 overflow-y-auto"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div
          class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
        >
          <div
            class="fixed inset-0 bg-gray-500 bg-opacity-75 dark:bg-gray-900 dark:bg-opacity-75 transition-opacity"
            aria-hidden="true"
            @click="showDeleteAccountModal = false"
          ></div>

          <span
            class="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
            >&#8203;</span
          >

          <div
            class="inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          >
            <div
              class="bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4"
            >
              <div class="sm:flex sm:items-start">
                <div
                  class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-red-900 sm:mx-0 sm:h-10 sm:w-10"
                >
                  <AlertTriangleIcon
                    class="h-6 w-6 text-red-600 dark:text-red-400"
                  />
                </div>
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3
                    class="text-lg leading-6 font-medium text-gray-900 dark:text-white"
                    id="modal-title"
                  >
                    계정 삭제
                  </h3>
                  <div class="mt-2">
                    <p class="text-sm text-gray-500 dark:text-gray-400">
                      계정을 삭제하면 모든 데이터가 영구적으로 제거됩니다. 이
                      작업은 되돌릴 수 없습니다. 계속하시겠습니까?
                    </p>
                  </div>
                  <div class="mt-4">
                    <label
                      for="delete-confirm"
                      class="block text-sm font-medium text-gray-700 dark:text-gray-300"
                      >확인을 위해 "삭제"를 입력하세요</label
                    >
                    <input
                      type="text"
                      id="delete-confirm"
                      v-model="deleteConfirmText"
                      class="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              class="bg-gray-50 dark:bg-gray-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"
            >
              <button
                type="button"
                @click="deleteAccount"
                :disabled="deleteConfirmText !== '삭제'"
                class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed sm:ml-3 sm:w-auto sm:text-sm"
              >
                계정 삭제
              </button>
              <button
                type="button"
                @click="showDeleteAccountModal = false"
                class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 dark:border-gray-600 shadow-sm px-4 py-2 bg-white dark:bg-gray-800 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              >
                취소
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from 'vue';

// 아이콘 임포트
import {
  MenuIcon,
  XIcon,
  BellIcon,
  SearchIcon,
  UserIcon,
  SettingsIcon,
  LogOutIcon,
  GitBranchIcon,
  ChevronDownIcon,
  CheckIcon,
  KeyIcon,
  ShieldIcon,
  BellOffIcon,
  BellRingIcon,
  GlobeIcon,
  MoonIcon,
  SunIcon,
  EyeIcon,
  EyeOffIcon,
  SaveIcon,
  AlignLeftIcon,
  DownloadIcon,
  TrashIcon,
  ChevronRightIcon,
} from '../utils/icons';

import AppNavbar from '../components/AppNavbar.vue';
import AppMobileMenu from '../components/AppMobileMenu.vue';
import AppProfileDropdown from '../components/AppProfileDropdown.vue';
import AppFooter from '../components/AppFooter.vue';
import AppLayout from '../components/AppLayout.vue';
import AppPageTitle from '../components/AppPageTitle.vue';
import AppCard from '../components/AppCard.vue';

// 목업 데이터 임포트
import { user, userSettings } from '../utils/mockData';

// 목업 데이터로 설정값 초기화
const darkMode = ref(userSettings.darkMode);
const language = ref(userSettings.language);
const emailNotifications = ref(userSettings.notifications.email);
const browserNotifications = ref(userSettings.notifications.browser);
const weeklyDigest = ref(userSettings.notifications.weeklyDigest);
const readReposPermission = ref(userSettings.githubPermissions.readRepos);
const writeIssuesPermission = ref(userSettings.githubPermissions.writeIssues);
const writePRsPermission = ref(userSettings.githubPermissions.writePRs);
const twoFactorAuthEnabled = ref(userSettings.twoFactorAuth);

// 모달 상태 관리
const showChangePasswordModal = ref(false);
const showDeleteAccountModal = ref(false);

// 프로필 드롭다운 상태 관리
const profileDropdownOpen = ref(false);
const mobileMenuOpen = ref(false);

// 비밀번호 변경 폼 데이터
const passwordChange = reactive({
  current: '',
  new: '',
  confirm: '',
});

// 계정 삭제 확인 텍스트
const deleteConfirmText = ref('');

onMounted(() => {
  console.log('설정 페이지가 마운트되었습니다.');
  console.log('사용자 설정:', userSettings);
});
</script>
