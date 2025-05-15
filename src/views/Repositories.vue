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
              저장소
            </h1>
            <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
              GitHub 저장소를 검색하고 AI로 분석하여 이슈를 탐색하세요.
            </p>
          </div>
          <div class="mt-4 md:mt-0">
            <button
              @click="showAddRepositoryModal = true"
              class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
            >
              <PlusIcon class="h-4 w-4 mr-2" />
              저장소 추가
            </button>
          </div>
        </div>

        <!-- 검색 및 필터 -->
        <div
          class="mt-6 bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg"
        >
          <div class="px-4 py-5 sm:p-6">
            <div class="flex flex-col md:flex-row md:items-center gap-4">
              <div class="flex-1">
                <label
                  for="search"
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >저장소 검색</label
                >
                <div class="mt-1 relative rounded-md shadow-sm">
                  <div
                    class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                  >
                    <SearchIcon class="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="search"
                    v-model="searchQuery"
                    class="focus:ring-emerald-500 focus:border-emerald-500 block w-full pl-10 sm:text-sm border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                    placeholder="저장소 이름 또는 키워드 입력"
                  />
                </div>
              </div>
              <div>
                <label
                  for="filter"
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >필터</label
                >
                <select
                  id="filter"
                  v-model="filter"
                  class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm rounded-md dark:bg-gray-700 dark:text-white"
                >
                  <option value="all">모든 저장소</option>
                  <option value="my">내 저장소</option>
                  <option value="starred">관심 저장소</option>
                </select>
              </div>
              <div>
                <label
                  for="sort"
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >정렬</label
                >
                <select
                  id="sort"
                  v-model="sort"
                  class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm rounded-md dark:bg-gray-700 dark:text-white"
                >
                  <option value="recent">최근 추가</option>
                  <option value="name">이름</option>
                  <option value="stars">별점</option>
                  <option value="issues">이슈 수</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <!-- 저장소 목록 -->
        <div class="mt-6">
          <h2 class="text-lg font-medium text-gray-900 dark:text-white">
            내 저장소
          </h2>
          <div
            class="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            <div
              v-for="repo in filteredRepositories"
              :key="repo.id"
              class="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg"
            >
              <div class="px-4 py-5 sm:p-6">
                <div class="flex items-center">
                  <div class="flex-shrink-0">
                    <div
                      class="h-12 w-12 rounded-md bg-emerald-500 flex items-center justify-center text-white font-bold"
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
                      {{ repo.description }}
                    </p>
                  </div>
                </div>
                <div class="mt-4">
                  <div
                    class="flex items-center text-sm text-gray-500 dark:text-gray-400"
                  >
                    <StarIcon
                      class="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400 dark:text-gray-500"
                    />
                    <span>{{ repo.stars }}</span>
                    <span class="mx-2">•</span>
                    <GitForkIcon
                      class="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400 dark:text-gray-500"
                    />
                    <span>{{ repo.forks }}</span>
                    <span class="mx-2">•</span>
                    <AlertCircleIcon
                      class="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400 dark:text-gray-500"
                    />
                    <span>{{ repo.issues }} 이슈</span>
                  </div>
                </div>
                <div class="mt-4 flex space-x-2">
                  <router-link
                    :to="`/repositories/${repo.id}`"
                    class="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-900 hover:bg-emerald-200 dark:hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                  >
                    <EyeIcon class="h-4 w-4 mr-1" />
                    보기
                  </router-link>
                  <button
                    class="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    <RefreshCwIcon class="h-4 w-4 mr-1" />
                    분석
                  </button>
                  <button
                    class="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    <StarIcon class="h-4 w-4 mr-1" />
                    관심
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 추천 저장소 -->
        <div class="mt-8">
          <h2 class="text-lg font-medium text-gray-900 dark:text-white">
            추천 저장소
          </h2>
          <div
            class="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            <div
              v-for="repo in recommendedRepositories"
              :key="repo.id"
              class="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg"
            >
              <div class="px-4 py-5 sm:p-6">
                <div class="flex items-center">
                  <div class="flex-shrink-0">
                    <div
                      class="h-12 w-12 rounded-md bg-blue-500 flex items-center justify-center text-white font-bold"
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
                      {{ repo.description }}
                    </p>
                  </div>
                </div>
                <div class="mt-4">
                  <div
                    class="flex items-center text-sm text-gray-500 dark:text-gray-400"
                  >
                    <StarIcon
                      class="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400 dark:text-gray-500"
                    />
                    <span>{{ repo.stars }}</span>
                    <span class="mx-2">•</span>
                    <GitForkIcon
                      class="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400 dark:text-gray-500"
                    />
                    <span>{{ repo.forks }}</span>
                    <span class="mx-2">•</span>
                    <AlertCircleIcon
                      class="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400 dark:text-gray-500"
                    />
                    <span>{{ repo.issues }} 이슈</span>
                  </div>
                </div>
                <div class="mt-4 flex space-x-2">
                  <button
                    @click="addRepository(repo)"
                    class="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-900 hover:bg-emerald-200 dark:hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                  >
                    <PlusIcon class="h-4 w-4 mr-1" />
                    추가
                  </button>
                  <button
                    class="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    <StarIcon class="h-4 w-4 mr-1" />
                    관심
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- 저장소 추가 모달 -->
    <div
      v-if="showAddRepositoryModal"
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
          @click="showAddRepositoryModal = false"
        ></div>

        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
          >&#8203;</span
        >

        <div
          class="inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
        >
          <div class="bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                <h3
                  class="text-lg leading-6 font-medium text-gray-900 dark:text-white"
                  id="modal-title"
                >
                  GitHub 저장소 추가
                </h3>
                <div class="mt-2">
                  <p class="text-sm text-gray-500 dark:text-gray-400">
                    GitHub 저장소 URL을 입력하거나 검색하여 추가하세요.
                  </p>
                </div>
                <div class="mt-4">
                  <label
                    for="repository-url"
                    class="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >저장소 URL</label
                  >
                  <div class="mt-1">
                    <input
                      type="text"
                      id="repository-url"
                      v-model="newRepositoryUrl"
                      class="shadow-sm focus:ring-emerald-500 focus:border-emerald-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                      placeholder="https://github.com/username/repository"
                    />
                  </div>
                </div>
                <div class="mt-4">
                  <label
                    for="repository-search"
                    class="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >또는 저장소 검색</label
                  >
                  <div class="mt-1 relative rounded-md shadow-sm">
                    <div
                      class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                    >
                      <SearchIcon class="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="repository-search"
                      v-model="repositorySearchQuery"
                      class="focus:ring-emerald-500 focus:border-emerald-500 block w-full pl-10 sm:text-sm border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                      placeholder="저장소 이름 검색"
                    />
                  </div>
                </div>
                <div
                  v-if="repositorySearchQuery"
                  class="mt-4 max-h-40 overflow-y-auto"
                >
                  <ul class="divide-y divide-gray-200 dark:divide-gray-700">
                    <li
                      v-for="repo in searchResults"
                      :key="repo.id"
                      class="py-3 flex items-center justify-between"
                    >
                      <div class="flex items-center">
                        <div
                          class="h-8 w-8 rounded-md bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 font-bold"
                        >
                          {{ repo.name.charAt(0).toUpperCase() }}
                        </div>
                        <div class="ml-3">
                          <p
                            class="text-sm font-medium text-gray-900 dark:text-white"
                          >
                            {{ repo.name }}
                          </p>
                          <p class="text-xs text-gray-500 dark:text-gray-400">
                            {{ repo.stars }} 별 • {{ repo.issues }} 이슈
                          </p>
                        </div>
                      </div>
                      <button
                        @click="selectRepository(repo)"
                        class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-900 hover:bg-emerald-200 dark:hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                      >
                        선택
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            class="bg-gray-50 dark:bg-gray-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"
          >
            <button
              type="button"
              @click="addRepositoryFromUrl"
              class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-emerald-600 text-base font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 sm:ml-3 sm:w-auto sm:text-sm"
              :disabled="!newRepositoryUrl"
            >
              저장소 추가
            </button>
            <button
              type="button"
              @click="showAddRepositoryModal = false"
              class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 dark:border-gray-600 shadow-sm px-4 py-2 bg-white dark:bg-gray-800 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              취소
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import {
  Menu as MenuIcon,
  X as XIcon,
  Bell as BellIcon,
  Search as SearchIcon,
  Plus as PlusIcon,
  Star as StarIcon,
  GitFork as GitForkIcon,
  AlertCircle as AlertCircleIcon,
  Eye as EyeIcon,
  RefreshCw as RefreshCwIcon,
  GitBranch as GitBranchIcon,
} from 'lucide-vue-next';
import { repositories, recommendedRepositories } from '../utils/mockData';

const mobileMenuOpen = ref(false);
const profileDropdownOpen = ref(false);
const showAddRepositoryModal = ref(false);
const searchQuery = ref('');
const filter = ref('all');
const sort = ref('recent');
const newRepositoryUrl = ref('');
const repositorySearchQuery = ref('');

// 검색 결과 샘플 데이터
const searchResults = computed(() => {
  if (!repositorySearchQuery.value) return [];

  // 실제로는 GitHub API를 호출하여 검색 결과를 가져와야 함
  return [
    {
      id: 'search1',
      name: 'popular/react-starter',
      stars: 3245,
      issues: 123,
    },
    {
      id: 'search2',
      name: 'trending/next-js-boilerplate',
      stars: 2187,
      issues: 87,
    },
    {
      id: 'search3',
      name: 'community/typescript-utils',
      stars: 1532,
      issues: 45,
    },
  ].filter((repo) =>
    repo.name.toLowerCase().includes(repositorySearchQuery.value.toLowerCase())
  );
});

// 필터링된 저장소 목록
const filteredRepositories = computed(() => {
  let result = repositories.value;

  // 검색어 필터링
  if (searchQuery.value) {
    result = result.filter(
      (repo) =>
        repo.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        repo.description.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  }

  // 필터 적용
  if (filter.value === 'starred') {
    result = result.filter((repo) => repo.isStarred);
  }

  // 정렬 적용
  if (sort.value === 'name') {
    result = [...result].sort((a, b) => a.name.localeCompare(b.name));
  } else if (sort.value === 'stars') {
    result = [...result].sort((a, b) => b.stars - a.stars);
  } else if (sort.value === 'issues') {
    result = [...result].sort((a, b) => b.issues - a.issues);
  }

  return result;
});

// 저장소 추가 함수
const addRepositoryFromUrl = () => {
  if (!newRepositoryUrl.value) return;

  // 실제로는 GitHub API를 호출하여 저장소 정보를 가져와야 함
  const repoName = newRepositoryUrl.value.split('/').slice(-2).join('/');

  repositories.value.push({
    id: `new-${Date.now()}`,
    name: repoName,
    description: '새로 추가된 저장소',
    stars: 0,
    forks: 0,
    issues: 0,
    isStarred: false,
  });

  // 모달 닫기 및 입력 초기화
  showAddRepositoryModal.value = false;
  newRepositoryUrl.value = '';
  repositorySearchQuery.value = '';
};

// 검색 결과에서 저장소 선택
const selectRepository = (repo) => {
  newRepositoryUrl.value = `https://github.com/${repo.name}`;
  repositorySearchQuery.value = '';
};

// 추천 저장소 추가
const addRepository = (repo) => {
  // 이미 추가된 저장소인지 확인
  const exists = repositories.value.some((r) => r.name === repo.name);
  if (exists) {
    alert('이미 추가된 저장소입니다.');
    return;
  }

  repositories.value.push({
    ...repo,
    isStarred: false,
  });

  alert(`${repo.name} 저장소가 추가되었습니다.`);
};

const logout = () => {
  // 로그아웃 로직 구현
  alert('로그아웃 기능이 구현될 예정입니다.');
  profileDropdownOpen.value = false;
};
</script>
