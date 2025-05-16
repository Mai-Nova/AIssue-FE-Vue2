<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <AppLayout>
      <div class="p-6">
        <h1 class="text-2xl font-bold text-gray-800 dark:text-white mb-6">
          설정
        </h1>

        <!-- 일반 설정 -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-6">
          <h2
            class="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4"
          >
            일반 설정
          </h2>

          <div class="space-y-4">
            <!-- 테마 설정 -->
            <div class="flex items-center justify-between">
              <div>
                <h3
                  class="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  테마
                </h3>
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  애플리케이션의 테마를 선택합니다.
                </p>
              </div>
              <select
                v-model="settings.theme"
                class="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400"
              >
                <option value="light">라이트 모드</option>
                <option value="dark">다크 모드</option>
                <option value="system">시스템 설정 따르기</option>
              </select>
            </div>

            <!-- 언어 설정 -->
            <div class="flex items-center justify-between">
              <div>
                <h3
                  class="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  언어
                </h3>
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  애플리케이션의 언어를 선택합니다.
                </p>
              </div>
              <select
                v-model="settings.language"
                class="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400"
              >
                <option value="ko">한국어</option>
                <option value="en">English</option>
                <option value="ja">日本語</option>
                <option value="zh">中文</option>
              </select>
            </div>

            <!-- 시간대 설정 -->
            <div class="flex items-center justify-between">
              <div>
                <h3
                  class="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  시간대
                </h3>
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  날짜와 시간 표시에 사용할 시간대를 선택합니다.
                </p>
              </div>
              <select
                v-model="settings.timezone"
                class="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400"
              >
                <option value="Asia/Seoul">서울 (GMT+9)</option>
                <option value="America/New_York">뉴욕 (GMT-5/4)</option>
                <option value="Europe/London">런던 (GMT+0/1)</option>
                <option value="Asia/Tokyo">도쿄 (GMT+9)</option>
              </select>
            </div>
          </div>
        </div>

        <!-- 알림 설정 -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-6">
          <h2
            class="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4"
          >
            알림 설정
          </h2>

          <div class="space-y-4">
            <!-- 이메일 알림 -->
            <div class="flex items-center justify-between">
              <div>
                <h3
                  class="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  이메일 알림
                </h3>
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  중요 업데이트 및 알림을 이메일로 받습니다.
                </p>
              </div>
              <label class="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  v-model="settings.emailNotifications"
                  class="sr-only peer"
                />
                <div
                  class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 dark:peer-focus:ring-emerald-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-emerald-500"
                ></div>
              </label>
            </div>

            <!-- 브라우저 알림 -->
            <div class="flex items-center justify-between">
              <div>
                <h3
                  class="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  브라우저 알림
                </h3>
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  브라우저 내 알림을 받습니다.
                </p>
              </div>
              <label class="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  v-model="settings.browserNotifications"
                  class="sr-only peer"
                />
                <div
                  class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 dark:peer-focus:ring-emerald-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-emerald-500"
                ></div>
              </label>
            </div>

            <!-- 마케팅 이메일 -->
            <div class="flex items-center justify-between">
              <div>
                <h3
                  class="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  마케팅 이메일
                </h3>
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  새로운 기능 및 프로모션 정보를 받습니다.
                </p>
              </div>
              <label class="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  v-model="settings.marketingEmails"
                  class="sr-only peer"
                />
                <div
                  class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 dark:peer-focus:ring-emerald-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-emerald-500"
                ></div>
              </label>
            </div>
          </div>
        </div>

        <!-- 개인정보 및 보안 -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-6">
          <h2
            class="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4"
          >
            개인정보 및 보안
          </h2>

          <div class="space-y-4">
            <!-- 비밀번호 변경 -->
            <div class="flex items-center justify-between">
              <div>
                <h3
                  class="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  비밀번호 변경
                </h3>
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  계정 보안을 위해 비밀번호를 변경합니다.
                </p>
              </div>
              <button
                class="px-4 py-2 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                변경
              </button>
            </div>

            <!-- 2단계 인증 -->
            <div class="flex items-center justify-between">
              <div>
                <h3
                  class="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  2단계 인증
                </h3>
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  추가 보안을 위해 2단계 인증을 설정합니다.
                </p>
              </div>
              <button
                class="px-4 py-2 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                설정
              </button>
            </div>

            <!-- 데이터 내보내기 -->
            <div class="flex items-center justify-between">
              <div>
                <h3
                  class="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  데이터 내보내기
                </h3>
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  계정 데이터를 JSON 형식으로 내보냅니다.
                </p>
              </div>
              <button
                class="px-4 py-2 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                내보내기
              </button>
            </div>

            <!-- 계정 삭제 -->
            <div class="flex items-center justify-between">
              <div>
                <h3
                  class="text-sm font-medium text-text-red-500 dark:text-red-400"
                >
                  계정 삭제
                </h3>
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  계정과 모든 관련 데이터를 영구적으로 삭제합니다.
                </p>
              </div>
              <button
                class="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
              >
                계정 삭제
              </button>
            </div>
          </div>
        </div>

        <!-- 저장 버튼 -->
        <div class="flex justify-end">
          <button
            @click="saveSettings"
            class="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-colors"
          >
            설정 저장
          </button>
        </div>
      </div>
    </AppLayout>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import AppLayout from '../components/AppLayout.vue';

// 설정 정보 (실제 구현에서는 API에서 가져옵니다)
const settings = ref({
  theme: 'system',
  language: 'ko',
  timezone: 'Asia/Seoul',
  emailNotifications: true,
  browserNotifications: true,
  marketingEmails: false,
});

// 설정 저장
const saveSettings = async () => {
  // 실제 구현에서는 API 호출이 필요합니다
  alert('설정이 저장되었습니다.');

  // 테마 설정 적용 (실제 구현에서는 더 복잡한 로직이 필요합니다)
  if (settings.value.theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else if (settings.value.theme === 'light') {
    document.documentElement.classList.remove('dark');
  } else {
    // 시스템 설정 따르기
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
};

onMounted(() => {
  // 실제 구현에서는 API에서 데이터를 가져옵니다
  console.log('설정 컴포넌트가 마운트되었습니다.');
});
</script>
