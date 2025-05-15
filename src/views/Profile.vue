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
          프로필
        </h1>
        <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
          개인 정보와 GitHub 연동 상태를 관리하세요.
        </p>
      </div>

      <div
        class="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg"
      >
        &lt;!-- 프로필 헤더 -->
        <div
          class="px-4 py-5 sm:px-6 border-b border-gray-200 dark:border-gray-700"
        >
          <div class="flex items-center">
            <img
              class="h-16 w-16 rounded-full"
              src="https://avatars.githubusercontent.com/u/12345678?v=4"
              alt="사용자 프로필"
            />
            <div class="ml-4">
              <h3
                class="text-lg leading-6 font-medium text-gray-900 dark:text-white"
              >
                김개발
              </h3>
              <p class="text-sm text-gray-500 dark:text-gray-400">
                GitHub 계정:
                <a
                  href="https://github.com/devkim"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-emerald-600 hover:text-emerald-500 dark:text-emerald-400 dark:hover:text-emerald-300"
                  >@devkim</a
                >
              </p>
            </div>
          </div>
        </div>

        &lt;!-- 프로필 정보 -->
        <div class="border-b border-gray-200 dark:border-gray-700">
          <dl>
            <div
              class="bg-gray-50 dark:bg-gray-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
            >
              <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                이름
              </dt>
              <dd
                class="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2"
              >
                김개발
              </dd>
            </div>
            <div
              class="bg-white dark:bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
            >
              <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                이메일
              </dt>
              <dd
                class="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2"
              >
                dev@example.com
              </dd>
            </div>
            <div
              class="bg-gray-50 dark:bg-gray-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
            >
              <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                GitHub 연동
              </dt>
              <dd
                class="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2 flex items-center"
              >
                <span
                  class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                >
                  <CheckCircleIcon class="mr-1 h-4 w-4" />
                  연동됨
                </span>
                <button
                  @click="disconnectGitHub"
                  class="ml-4 text-sm text-red-600 hover:text-red-500 dark:text-red-400 dark:hover:text-red-300"
                >
                  연동 해제
                </button>
              </dd>
            </div>
            <div
              class="bg-white dark:bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
            >
              <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                가입일
              </dt>
              <dd
                class="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2"
              >
                2023년 4월 15일
              </dd>
            </div>
            <div
              class="bg-gray-50 dark:bg-gray-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
            >
              <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                활동 점수
              </dt>
              <dd
                class="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2"
              >
                245점
              </dd>
            </div>
          </dl>
        </div>

        &lt;!-- 프로필 편집 버튼 -->
        <div class="px-4 py-3 bg-gray-50 dark:bg-gray-700 text-right sm:px-6">
          <button
            @click="editProfile"
            class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
          >
            프로필 편집
          </button>
        </div>
      </div>

      &lt;!-- 기술 스택 -->
      <div
        class="mt-6 bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg"
      >
        <div
          class="px-4 py-5 sm:px-6 border-b border-gray-200 dark:border-gray-700"
        >
          <h3
            class="text-lg leading-6 font-medium text-gray-900 dark:text-white"
          >
            기술 스택
          </h3>
          <p class="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">
            관심 있는 기술 스택과 경험 수준을 관리하세요.
          </p>
        </div>
        <div class="px-4 py-5 sm:p-6">
          <div class="space-y-4">
            <div
              v-for="(tech, index) in techStack"
              :key="index"
              class="flex items-center justify-between"
            >
              <div class="flex items-center">
                <div
                  class="h-10 w-10 rounded-full flex items-center justify-center"
                  :class="getTechBgColor(tech.name)"
                >
                  <component
                    :is="getTechIcon(tech.name)"
                    class="h-6 w-6 text-white"
                  />
                </div>
                <div class="ml-3">
                  <h4 class="text-sm font-medium text-gray-900 dark:text-white">
                    {{ tech.name }}
                  </h4>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    {{ tech.description }}
                  </p>
                </div>
              </div>
              <div class="flex items-center">
                <div class="mr-4">
                  <span
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                    :class="getExperienceBadgeClass(tech.experience)"
                  >
                    {{ tech.experience }}
                  </span>
                </div>
                <button
                  @click="removeTech(index)"
                  class="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                >
                  <XCircleIcon class="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          &lt;!-- 기술 스택 추가 -->
          <div class="mt-6">
            <button
              @click="showAddTechModal = true"
              class="inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-600 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
            >
              <PlusIcon class="-ml-0.5 mr-2 h-4 w-4" />
              기술 스택 추가
            </button>
          </div>
        </div>
      </div>

      &lt;!-- 기술 스택 추가 모달 -->
      <div
        v-if="showAddTechModal"
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
            @click="showAddTechModal = false"
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
                    기술 스택 추가
                  </h3>
                  <div class="mt-4">
                    <label
                      for="tech-name"
                      class="block text-sm font-medium text-gray-700 dark:text-gray-300"
                      >기술 이름</label
                    >
                    <select
                      id="tech-name"
                      v-model="newTech.name"
                      class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm rounded-md"
                    >
                      <option value="">선택하세요</option>
                      <option value="React">React</option>
                      <option value="Vue">Vue</option>
                      <option value="Angular">Angular</option>
                      <option value="Node.js">Node.js</option>
                      <option value="Python">Python</option>
                      <option value="Java">Java</option>
                      <option value="TypeScript">TypeScript</option>
                      <option value="GraphQL">GraphQL</option>
                    </select>
                  </div>
                  <div class="mt-4">
                    <label
                      for="tech-description"
                      class="block text-sm font-medium text-gray-700 dark:text-gray-300"
                      >설명</label
                    >
                    <input
                      type="text"
                      id="tech-description"
                      v-model="newTech.description"
                      class="mt-1 focus:ring-emerald-500 focus:border-emerald-500 block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md"
                    />
                  </div>
                  <div class="mt-4">
                    <label
                      for="tech-experience"
                      class="block text-sm font-medium text-gray-700 dark:text-gray-300"
                      >경험 수준</label
                    >
                    <select
                      id="tech-experience"
                      v-model="newTech.experience"
                      class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm rounded-md"
                    >
                      <option value="초보자">초보자</option>
                      <option value="중급자">중급자</option>
                      <option value="전문가">전문가</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="bg-gray-50 dark:bg-gray-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"
            >
              <button
                type="button"
                @click="addTech"
                class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-emerald-600 text-base font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                추가
              </button>
              <button
                type="button"
                @click="showAddTechModal = false"
                class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 dark:border-gray-600 shadow-sm px-4 py-2 bg-white dark:bg-gray-800 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              >
                취소
              </button>
            </div>
          </div>
        </div>
      </div>

      &lt;!-- 프로필 편집 모달 -->
      <div
        v-if="showEditProfileModal"
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
            @click="showEditProfileModal = false"
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
                    프로필 편집
                  </h3>
                  <div class="mt-4">
                    <label
                      for="profile-name"
                      class="block text-sm font-medium text-gray-700 dark:text-gray-300"
                      >이름</label
                    >
                    <input
                      type="text"
                      id="profile-name"
                      v-model="editedProfile.name"
                      class="mt-1 focus:ring-emerald-500 focus:border-emerald-500 block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md"
                    />
                  </div>
                  <div class="mt-4">
                    <label
                      for="profile-email"
                      class="block text-sm font-medium text-gray-700 dark:text-gray-300"
                      >이메일</label
                    >
                    <input
                      type="email"
                      id="profile-email"
                      v-model="editedProfile.email"
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
                @click="saveProfile"
                class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-emerald-600 text-base font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                저장
              </button>
              <button
                type="button"
                @click="showEditProfileModal = false"
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

<script setup>
import { ref } from 'vue';
import {
  Menu as MenuIcon,
  X as XIcon,
  Bell as BellIcon,
  CheckCircle as CheckCircleIcon,
  XCircle as XCircleIcon,
  Plus as PlusIcon,
  Code as CodeIcon,
  Server as ServerIcon,
  Database as DatabaseIcon,
  GitBranch as GitBranchIcon,
} from 'lucide-vue-next';

const mobileMenuOpen = ref(false);
const profileDropdownOpen = ref(false);
const showAddTechModal = ref(false);
const showEditProfileModal = ref(false);

// 샘플 데이터 - 실제 구현에서는 API에서 가져옴
</script>
