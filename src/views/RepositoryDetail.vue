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
                class="border-emerald-500 text-gray-900 dark:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
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
            class="bg-emerald-50 dark:bg-emerald-900 border-emerald-500 text-emerald-700 dark:text-emerald-200 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
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
      &lt;!-- 저장소 헤더 -->
      <div class="px-4 sm:px-0 mb-6">
        <div
          class="flex flex-col sm:flex-row sm:items-center sm:justify-between"
        >
          <div class="flex items-center">
            <div
              class="flex-shrink-0 h-12 w-12 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-xl"
            >
              {{ repository.name.split('/')[0].charAt(0).toUpperCase() }}
            </div>
            <div class="ml-4">
              <h1
                class="text-2xl font-semibold text-gray-900 dark:text-white flex items-center"
              >
                {{ repository.name }}
                <a
                  :href="`https://github.com/${repository.name}`"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="ml-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                >
                  <ExternalLinkIcon class="h-5 w-5" />
                </a>
              </h1>
              <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                {{ repository.description }}
              </p>
            </div>
          </div>
          <div class="mt-4 sm:mt-0 flex space-x-3">
            <div
              class="flex items-center text-sm text-gray-500 dark:text-gray-400"
            >
              <StarIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-yellow-400" />
              <p>{{ repository.stars }}</p>
            </div>
            <div
              class="flex items-center text-sm text-gray-500 dark:text-gray-400"
            >
              <GitForkIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-blue-400" />
              <p>{{ repository.forks }}</p>
            </div>
            <div
              class="flex items-center text-sm text-gray-500 dark:text-gray-400"
            >
              <EyeIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-purple-400" />
              <p>{{ repository.watchers }}</p>
            </div>
          </div>
        </div>
        <div class="mt-4 flex flex-wrap gap-2">
          <span
            v-for="(lang, index) in repository.languages"
            :key="index"
            class="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium"
            :class="getLanguageClass(lang)"
          >
            {{ lang }}
          </span>
        </div>
      </div>

      &lt;!-- 저장소 분석 탭 -->
      <div
        class="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-md"
      >
        <div class="border-b border-gray-200 dark:border-gray-700">
          <nav class="-mb-px flex" aria-label="Tabs">
            <button
              @click="activeTab = 'overview'"
              :class="[
                activeTab === 'overview'
                  ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400'
                  : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300',
                'w-1/3 py-4 px-1 text-center border-b-2 font-medium text-sm',
              ]"
            >
              개요
            </button>
            <button
              @click="activeTab = 'issues'"
              :class="[
                activeTab === 'issues'
                  ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400'
                  : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300',
                'w-1/3 py-4 px-1 text-center border-b-2 font-medium text-sm',
              ]"
            >
              이슈 분석
            </button>
            <button
              @click="activeTab = 'convention'"
              :class="[
                activeTab === 'convention'
                  ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400'
                  : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300',
                'w-1/3 py-4 px-1 text-center border-b-2 font-medium text-sm',
              ]"
            >
              코드 컨벤션
            </button>
          </nav>
        </div>

        &lt;!-- 개요 탭 -->
        <div v-if="activeTab === 'overview'" class="p-4 sm:p-6">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            &lt;!-- README 요약 -->
            <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 sm:p-6">
              <h3
                class="text-lg font-medium text-gray-900 dark:text-white mb-4 flex items-center"
              >
                <FileTextIcon class="mr-2 h-5 w-5 text-emerald-500" />
                README 요약
              </h3>
              <div class="prose dark:prose-invert max-w-none">
                <p class="text-gray-600 dark:text-gray-300">
                  {{ repository.readmeSummary }}
                </p>
                <a
                  :href="`https://github.com/${repository.name}#readme`"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="mt-4 inline-flex items-center text-sm font-medium text-emerald-600 hover:text-emerald-500 dark:text-emerald-400 dark:hover:text-emerald-300"
                >
                  원본 README 보기
                  <ExternalLinkIcon class="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>

            &lt;!-- 주요 기술 스택 -->
            <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 sm:p-6">
              <h3
                class="text-lg font-medium text-gray-900 dark:text-white mb-4 flex items-center"
              >
                <LayersIcon class="mr-2 h-5 w-5 text-emerald-500" />
                주요 기술 스택
              </h3>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="(tech, index) in repository.techStack"
                  :key="index"
                  class="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-200"
                >
                  {{ tech }}
                </span>
              </div>
            </div>

            &lt;!-- 최근 중요 이슈 -->
            <div
              class="lg:col-span-2 bg-gray-50 dark:bg-gray-700 rounded-lg p-4 sm:p-6"
            >
              <div class="flex items-center justify-between mb-4">
                <h3
                  class="text-lg font-medium text-gray-900 dark:text-white flex items-center"
                >
                  <AlertCircleIcon class="mr-2 h-5 w-5 text-emerald-500" />
                  최근 중요 이슈
                </h3>
                <button
                  @click="activeTab = 'issues'"
                  class="text-sm font-medium text-emerald-600 hover:text-emerald-500 dark:text-emerald-400 dark:hover:text-emerald-300"
                >
                  모든 이슈 보기
                </button>
              </div>
              <div class="space-y-4">
                <div
                  v-for="(issue, index) in importantIssues"
                  :key="index"
                  class="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-md"
                >
                  <div class="px-4 py-4 sm:px-6">
                    <div class="flex items-center justify-between">
                      <router-link
                        :to="`/issues/${issue.id}`"
                        class="text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 truncate"
                      >
                        {{ issue.title }}
                      </router-link>
                      <div class="ml-2 flex-shrink-0 flex">
                        <span
                          class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
                          :class="
                            issue.priority === '높음'
                              ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                              : issue.priority === '중간'
                              ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                              : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                          "
                        >
                          {{ issue.priority }}
                        </span>
                      </div>
                    </div>
                    <div class="mt-2 sm:flex sm:justify-between">
                      <div class="sm:flex">
                        <p
                          class="flex items-center text-sm text-gray-500 dark:text-gray-400"
                        >
                          <UserIcon
                            class="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400 dark:text-gray-500"
                          />
                          {{ issue.author }}
                        </p>
                      </div>
                      <div
                        class="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400 sm:mt-0"
                      >
                        <ClockIcon
                          class="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400 dark:text-gray-500"
                        />
                        <p>
                          {{ issue.createdAt }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        &lt;!-- 이슈 분석 탭 -->
        <div v-if="activeTab === 'issues'" class="p-4 sm:p-6">
          <div
            class="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between"
          >
            <h3 class="text-lg font-medium text-gray-900 dark:text-white">
              이슈 목록
            </h3>
            <div class="mt-3 sm:mt-0 flex flex-col sm:flex-row sm:space-x-3">
              <div class="flex items-center mb-2 sm:mb-0">
                <label for="status-filter" class="sr-only">상태 필터</label>
                <select
                  id="status-filter"
                  v-model="issueStatusFilter"
                  class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm rounded-md"
                >
                  <option value="all">모든 상태</option>
                  <option value="open">Open</option>
                  <option value="closed">Closed</option>
                </select>
              </div>
              <div class="relative flex items-center">
                <input
                  type="text"
                  v-model="issueSearchQuery"
                  placeholder="이슈 검색"
                  class="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md leading-5 bg-white dark:bg-gray-700 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                />
                <div
                  class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                >
                  <SearchIcon class="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
          </div>

          <div
            class="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-md"
          >
            <ul
              role="list"
              class="divide-y divide-gray-200 dark:divide-gray-700"
            >
              <li v-for="(issue, index) in filteredIssues" :key="index">
                <router-link
                  :to="`/issues/${issue.id}`"
                  class="block hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <div class="px-4 py-4 sm:px-6">
                    <div class="flex items-center justify-between">
                      <p
                        class="text-sm font-medium text-emerald-600 dark:text-emerald-400 truncate"
                      >
                        {{ issue.title }}
                      </p>
                      <div class="ml-2 flex-shrink-0 flex">
                        <p
                          class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
                          :class="
                            issue.status === 'open'
                              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                              : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                          "
                        >
                          {{ issue.status === 'open' ? 'Open' : 'Closed' }}
                        </p>
                      </div>
                    </div>
                    <div class="mt-2">
                      <p
                        class="text-sm text-gray-600 dark:text-gray-300 line-clamp-2"
                      >
                        {{ issue.summary }}
                      </p>
                    </div>
                    <div class="mt-2 flex flex-wrap gap-2">
                      <span
                        v-for="(tag, tagIndex) in issue.tags"
                        :key="tagIndex"
                        class="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium"
                        :class="getTagClass(tag)"
                      >
                        {{ tag }}
                      </span>
                      <span
                        class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200"
                      >
                        AI 점수: {{ issue.score }}
                      </span>
                    </div>
                    <div class="mt-2 sm:flex sm:justify-between">
                      <div class="sm:flex">
                        <p
                          class="flex items-center text-sm text-gray-500 dark:text-gray-400"
                        >
                          <UserIcon
                            class="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400 dark:text-gray-500"
                          />
                          {{ issue.author }}
                        </p>
                      </div>
                      <div
                        class="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400 sm:mt-0"
                      >
                        <ClockIcon
                          class="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400 dark:text-gray-500"
                        />
                        <p>
                          {{ issue.createdAt }}
                        </p>
                      </div>
                    </div>
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
        </div>

        &lt;!-- 코드 컨벤션 탭 -->
        <div v-if="activeTab === 'convention'" class="p-4 sm:p-6">
          <div
            class="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between"
          >
            <h3
              class="text-lg font-medium text-gray-900 dark:text-white flex items-center"
            >
              <BookOpenIcon class="mr-2 h-5 w-5 text-emerald-500" />
              코드 컨벤션 문서
            </h3>
            <router-link
              to="/guide-bot"
              class="mt-3 sm:mt-0 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
            >
              <MessageSquareIcon class="-ml-1 mr-2 h-5 w-5" />
              개발 가이드 봇에게 질문하기
            </router-link>
          </div>

          <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 sm:p-6">
            <div v-if="repository.conventionFiles.length > 0">
              <div
                v-for="(file, index) in repository.conventionFiles"
                :key="index"
                class="mb-6"
              >
                <h4
                  class="text-md font-medium text-gray-900 dark:text-white mb-2"
                >
                  {{ file.name }}
                </h4>
                <div
                  class="prose dark:prose-invert max-w-none bg-white dark:bg-gray-800 p-4 rounded-md shadow-sm"
                >
                  <p
                    class="text-gray-600 dark:text-gray-300 whitespace-pre-line"
                  >
                    {{ file.content }}
                  </p>
                </div>
              </div>
            </div>
            <div v-else class="text-center py-8">
              <BookIcon class="mx-auto h-12 w-12 text-gray-400" />
              <h3
                class="mt-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                코드 컨벤션 문서 없음
              </h3>
              <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
                이 저장소에는 CONTRIBUTING.md 또는 STYLE_GUIDE.md 파일이
                없습니다.
              </p>
              <div class="mt-6">
                <router-link
                  to="/guide-bot"
                  class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                >
                  <MessageSquareIcon class="-ml-1 mr-2 h-5 w-5" />
                  개발 가이드 봇에게 질문하기
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import {
  Menu as MenuIcon,
  X as XIcon,
  Bell as BellIcon,
  Search as SearchIcon,
  Star as StarIcon,
  GitFork as GitForkIcon,
  Eye as EyeIcon,
  FileText as FileTextIcon,
  Layers as LayersIcon,
  AlertCircle as AlertCircleIcon,
  User as UserIcon,
  Clock as ClockIcon,
  ExternalLink as ExternalLinkIcon,
  BookOpen as BookOpenIcon,
  MessageSquare as MessageSquareIcon,
  Book as BookIcon,
  GitBranch as GitBranchIcon,
} from 'lucide-vue-next';

const mobileMenuOpen = ref(false);
const profileDropdownOpen = ref(false);
const activeTab = ref('overview');
const issueStatusFilter = ref('all');
const issueSearchQuery = ref('');

// 샘플 데이터 - 실제 구현에서는 API에서 가져옴
const repository = ref({
  id: 1,
  name: 'frontend-project/react-app',
  description: 'React 기반 프론트엔드 애플리케이션',
  stars: 45,
  forks: 12,
  watchers: 23,
  languages: ['JavaScript', 'TypeScript', 'CSS'],
  readmeSummary:
    '이 프로젝트는 React와 TypeScript를 사용하여 구축된 모던 웹 애플리케이션입니다. 컴포넌트 기반 아키텍처를 사용하며, 상태 관리를 위해 Redux를 활용합니다. 사용자 인증, 데이터 시각화, 반응형 디자인 등의 기능을 제공합니다. 개발 환경은 Webpack과 Babel을 통해 구성되어 있으며, Jest와 React Testing Library를 사용하여 테스트를 수행합니다. 이 애플리케이션은 RESTful API와 통신하여 데이터를 가져오고 업데이트합니다.',
  techStack: [
    'React',
    'TypeScript',
    'Redux',
    'Webpack',
    'Jest',
    'Styled Components',
    'React Router',
  ],
  conventionFiles: [
    {
      name: 'CONTRIBUTING.md',
      content:
        '# 기여 가이드라인\n\n## 코드 스타일\n\n- 들여쓰기는 2칸 공백을 사용합니다.\n- 문자열에는 작은따옴표를 사용합니다.\n- 세미콜론은 항상 사용합니다.\n- 변수명과 함수명은 camelCase를 사용합니다.\n- 컴포넌트명은 PascalCase를 사용합니다.\n\n## 커밋 메시지\n\n커밋 메시지는 다음 형식을 따릅니다:\n\n```\n<type>(<scope>): <subject>\n\n<body>\n\n<footer>\n```\n\n- type: feat, fix, docs, style, refactor, test, chore 중 하나\n- scope: 변경된 코드의 범위 (선택 사항)\n- subject: 변경 사항에 대한 간결한 설명\n- body: 변경 사항에 대한 자세한 설명 (선택 사항)\n- footer: 관련 이슈 참조 (선택 사항)\n\n## 풀 리퀘스트 프로세스\n\n1. 작업할 이슈에 대한 브랜치를 생성합니다.\n2. 코드 변경 후 테스트를 실행합니다.\n3. 변경 사항을 커밋하고 푸시합니다.\n4. GitHub에서 풀 리퀘스트를 생성합니다.\n5. 코드 리뷰 후 승인되면 병합됩니다.',
    },
    {
      name: 'STYLE_GUIDE.md',
      content:
        "# 스타일 가이드\n\n## 컴포넌트 구조\n\n```jsx\nimport React from 'react';\nimport PropTypes from 'prop-types';\nimport styles from './Component.module.css';\n\nconst Component = ({ prop1, prop2 }) => {\n  return (\n    <div className={styles.container}>\n      <h1>{prop1}</h1>\n      <p>{prop2}</p>\n    </div>\n  );\n};\n\nComponent.propTypes = {\n  prop1: PropTypes.string.isRequired,\n  prop2: PropTypes.string.isRequired,\n};\n\nexport default Component;\n```\n\n## 스타일링 규칙\n\n- CSS 모듈을 사용하여 스타일을 컴포넌트에 국한시킵니다.\n- 색상은 변수로 정의하여 일관성을 유지합니다.\n- 미디어 쿼리를 사용하여 반응형 디자인을 구현합니다.\n- 클래스 이름은 camelCase를 사용합니다.\n\n## 상태 관리\n\n- Redux 액션 타입은 대문자와 밑줄로 작성합니다 (예: USER_LOGIN_REQUEST).\n- 리듀서는 순수 함수로 작성합니다.\n- 비동기 작업은 Redux Thunk를 사용합니다.\n- 상태 구조는 정규화된 형태로 유지합니다.",
    },
  ],
});

const issues = ref([
  {
    id: 1,
    title: 'React 컴포넌트 성능 최적화',
    status: 'open',
    summary:
      '대규모 목록 렌더링 시 성능 문제 발생. React.memo, useCallback, 가상화 기법 적용 필요. 사용자 경험 개선을 위한 중요 이슈.',
    author: 'frontend-dev',
    createdAt: '3일 전',
    tags: ['React', '성능', '중간 난이도'],
    score: 85,
    priority: '중간',
  },
  {
    id: 2,
    title: 'API 응답 캐싱 구현',
    status: 'open',
    summary:
      '자주 요청되는 API 엔드포인트에 대한 캐싱 레이어 구현 필요. Redis 또는 인메모리 캐싱 솔루션 검토. 서버 부하 감소 및 응답 시간 개선 목표.',
    author: 'backend-dev',
    createdAt: '1주일 전',
    tags: ['Backend', '성능', '높은 우선순위'],
    score: 92,
    priority: '높음',
  },
  {
    id: 3,
    title: '모바일 뷰 반응형 디자인 개선',
    status: 'open',
    summary:
      '작은 화면에서 UI 컴포넌트 레이아웃 문제 해결 필요. 미디어 쿼리 최적화 및 모바일 우선 접근 방식 적용. 사용자 경험 일관성 유지 중요.',
    author: 'ui-designer',
    createdAt: '2주일 전',
    tags: ['CSS', 'UI/UX', '초보자 친화적'],
    score: 78,
    priority: '낮음',
  },
  {
    id: 4,
    title: '로그인 인증 흐름 버그 수정',
    status: 'closed',
    summary:
      '소셜 로그인 후 리디렉션 과정에서 상태 손실 문제 발생. 세션 스토리지 활용하여 인증 상태 유지 필요. 사용자 로그인 경험 개선 중요.',
    author: 'auth-expert',
    createdAt: '1달 전',
    tags: ['인증', '버그', '중간 난이도'],
    score: 88,
    priority: '높음',
  },
  {
    id: 5,
    title: '접근성 개선: 스크린 리더 지원',
    status: 'open',
    summary:
      '스크린 리더 사용자를 위한 ARIA 속성 추가 필요. 키보드 네비게이션 개선 및 색상 대비 확인. 웹 접근성 표준 준수 목표.',
    author: 'a11y-advocate',
    createdAt: '5일 전',
    tags: ['접근성', 'UI/UX', '중간 난이도'],
    score: 90,
    priority: '중간',
  },
]);

// 중요 이슈 (점수가 높은 순으로 3개)
const importantIssues = computed(() => {
  return [...issues.value].sort((a, b) => b.score - a.score).slice(0, 3);
});

// 필터링된 이슈 목록
const filteredIssues = computed(() => {
  let result = [...issues.value];

  // 상태 필터링
  if (issueStatusFilter.value !== 'all') {
    result = result.filter((issue) => issue.status === issueStatusFilter.value);
  }

  // 검색어 필터링
  if (issueSearchQuery.value) {
    const query = issueSearchQuery.value.toLowerCase();
    result = result.filter(
      (issue) =>
        issue.title.toLowerCase().includes(query) ||
        issue.summary.toLowerCase().includes(query)
    );
  }

  return result;
});

// 언어별 클래스 반환
const getLanguageClass = (language) => {
  switch (language) {
    case 'JavaScript':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
    case 'TypeScript':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
    case 'CSS':
      return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
    case 'HTML':
      return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
    case 'Python':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
  }
};

// 태그별 클래스 반환
const getTagClass = (tag) => {
  if (
    tag.includes('React') ||
    tag.includes('Backend') ||
    tag.includes('CSS') ||
    tag.includes('인증')
  ) {
    return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
  } else if (
    tag.includes('성능') ||
    tag.includes('UI/UX') ||
    tag.includes('접근성')
  ) {
    return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
  } else if (tag.includes('버그')) {
    return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
  } else if (
    tag.includes('높은') ||
    tag.includes('중간') ||
    tag.includes('낮음') ||
    tag.includes('초보자')
  ) {
    return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
  } else {
    return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
  }
};

const logout = () => {
  // 로그아웃 로직 구현
  alert('로그아웃 기능이 구현될 예정입니다.');
  profileDropdownOpen.value = false;
};
</script>
