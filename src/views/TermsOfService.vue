<template>
  <div class="min-h-screen bg-white dark:bg-gray-900">
    <!-- 네비게이션 바 -->
    <nav class="bg-white dark:bg-gray-800 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <div class="flex-shrink-0 flex items-center">
              <router-link to="/" class="text-2xl font-bold text-gray-800 dark:text-white flex items-center">
                <span class="text-emerald-500">AI</span>ssue
                <span class="ml-2 text-emerald-500">
                  <GitBranchIcon size="20" />
                </span>
              </router-link>
            </div>
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:items-center">
            <router-link to="/" class="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium">
              홈으로 돌아가기
            </router-link>
          </div>
        </div>
      </div>
    </nav>

    <!-- 메인 콘텐츠 -->
    <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0">
        <div class="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg">
          <div class="px-4 py-5 sm:px-6">
            <h1 class="text-2xl font-bold text-gray-900 dark:text-white">서비스 이용약관</h1>
            <p class="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">
              최종 업데이트: 2023년 5월 1일
            </p>
          </div>
          <div class="border-t border-gray-200 dark:border-gray-700 px-4 py-5 sm:p-6 prose dark:prose-invert max-w-none">
            <p>
              AIssue 서비스를 이용해 주셔서 감사합니다. 이 이용약관은 AIssue 웹사이트 및 서비스 이용에 관한 규정을 설명합니다. 서비스를 이용함으로써 귀하는 이 약관에 동의하게 됩니다.
            </p>

            <h2>1. 서비스 이용 계약</h2>
            <p>
              1.1 이 약관은 AIssue(이하 '회사')가 제공하는 모든 서비스(이하 '서비스')의 이용 조건을 규정합니다.<br>
              1.2 이 약관에 동의하고 회사가 제공하는 절차에 따라 서비스에 가입하면 이용계약이 성립됩니다.<br>
              1.3 회사는 필요한 경우 이 약관을 변경할 수 있으며, 변경 시 서비스 내 공지 또는 이메일을 통해 알려드립니다.
            </p>

            <h2>2. 서비스 이용</h2>
            <p>
              2.1 회사는 GitHub 계정 연동을 통해 서비스를 제공합니다.<br>
              2.2 서비스 이용을 위해 GitHub 계정 연동 시 필요한 권한을 부여해야 합니다.<br>
              2.3 서비스는 GitHub 저장소의 이슈를 AI로 분석하여 요약 및 추천 기능을 제공합니다.<br>
              2.4 회사는 서비스의 품질 향상을 위해 지속적으로 기능을 개선하고 업데이트할 수 있습니다.
            </p>

            <h2>3. 사용자 의무</h2>
            <p>
              3.1 사용자는 서비스 이용 시 다음 행위를 해서는 안 됩니다:
            </p>
            <ul>
              <li>타인의 GitHub 계정 무단 사용</li>
              <li>서비스의 정상적인 운영을 방해하는 행위</li>
              <li>다른 사용자의 개인정보를 수집, 저장, 공개하는 행위</li>
              <li>회사의 지식재산권을 침해하는 행위</li>
              <li>서비스를 이용한 불법 활동 수행</li>
              <li>서비스의 보안을 우회하거나 취약점을 악용하는 행위</li>
            </ul>
            <p>
              3.2 사용자는 계정 정보의 보안을 유지할 책임이 있으며, 계정 활동에 대한 모든 책임을 집니다.<br>
              3.3 서비스 이용 중 문제가 발생하면 즉시 회사에 신고해야 합니다.
            </p>

            <h2>4. 서비스 이용 제한</h2>
            <p>
              4.1 회사는 다음과 같은 경우 사용자의 서비스 이용을 제한할 수 있습니다:
            </p>
            <ul>
              <li>이용약관 위반</li>
              <li>불법 활동 수행</li>
              <li>다른 사용자의 서비스 이용 방해</li>
              <li>서비스의 보안이나 기능을 손상시키는 행위</li>
              <li>회사의 평판을 훼손하는 행위</li>
            </ul>
            <p>
              4.2 이용 제한은 일시적 중지부터 영구적 해지까지 다양한 형태로 이루어질 수 있습니다.<br>
              4.3 회사는 이용 제한 전에 사용자에게 통지하기 위해 합리적인 노력을 기울이지만, 긴급한 상황에서는 사전 통지 없이 조치를 취할 수 있습니다.
            </p>

            <h2>5. 지식재산권</h2>
            <p>
              5.1 서비스와 관련된 모든 지식재산권은 회사 또는 라이센스 제공자에게 귀속됩니다.<br>
              5.2 사용자는 서비스를 통해 제공되는 콘텐츠를 개인적, 비상업적 목적으로만 사용할 수 있습니다.<br>
              5.3 회사의 명시적 허가 없이 서비스의 어떤 부분도 복제, 수정, 배포, 판매할 수 없습니다.
            </p>

            <h2>6. 서비스 가용성 및 변경</h2>
            <p>
              6.1 회사는 서비스를 "있는 그대로" 제공하며, 서비스의 중단 없는 가용성을 보장하지 않습니다.<br>
              6.2 회사는 서비스 개선, 유지보수, 기술적 문제 해결을 위해 일시적으로 서비스를 중단할 수 있습니다.<br>
              6.3 회사는 사전 통지 없이 서비스의 기능을 변경하거나 중단할 권리를 보유합니다.
            </p>

            <h2>7. 책임 제한</h2>
            <p>
              7.1 법률이 허용하는 최대 범위 내에서, 회사는 서비스 이용으로 인한 직접적, 간접적, 부수적, 특별, 결과적 손해에 대해 책임을 지지 않습니다.<br>
              7.2 회사는 제3자 서비스나 링크된 웹사이트의 콘텐츠에 대해 책임을 지지 않습니다.<br>
              7.3 회사는 GitHub API나 관련 서비스의 변경, 중단으로 인한 서비스 장애에 대해 책임을 지지 않습니다.
            </p>

            <h2>8. 면책</h2>
            <p>
              사용자는 (i) 서비스 이용, (ii) 이용약관 위반, (iii) 타인의 권리 침해로 인해 발생하는 모든 청구, 책임, 손해, 손실, 비용에 대해 회사와 그 임직원, 대리인을 면책하는 데 동의합니다.
            </p>

            <h2>9. 준거법 및 분쟁 해결</h2>
            <p>
              9.1 이 약관은 대한민국 법률에 따라 해석되고 적용됩니다.<br>
              9.2 서비스 이용과 관련하여 발생하는 모든 분쟁은 서울중앙지방법원을 전속적 관할로 합니다.
            </p>

            <h2>10. 기타</h2>
            <p>
              10.1 이 약관의 일부가 무효 또는 집행불능으로 판명되더라도 나머지 조항은 계속해서 유효합니다.<br>
              10.2 회사가 약관의 특정 조항을 집행하지 않더라도, 이는 해당 조항이나 다른 조항에 대한 권리 포기로 간주되지 않습니다.<br>
              10.3 이 약관은 서비스 이용에 관한 사용자와 회사 간의 완전한 합의를 구성하며, 이전의 모든 합의를 대체합니다.
            </p>

            <h2>11. 연락처</h2>
            <p>
              이용약관에 관한 질문이나 우려사항이 있으시면 다음 연락처로 문의해 주세요:
            </p>
            <p>
              이메일: terms@aissue.com<br>
              주소: 서울특별시 강남구 테헤란로 123, AIssue 빌딩
            </p>
          </div>
        </div>
      </div>
    </main>

    <!-- 푸터 -->
    <footer class="bg-white dark:bg-gray-900">
      <div class="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav class="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
          <div class="px-5 py-2">
            <router-link to="/" class="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300">
              홈
            </router-link>
          </div>
          <div class="px-5 py-2">
            <router-link to="/privacy-policy" class="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300">
              개인정보 처리방침
            </router-link>
          </div>
          <div class="px-5 py-2">
            <router-link to="/terms-of-service" class="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300">
              서비스 이용약관
            </router-link>
          </div>
        </nav>
        <p class="mt-8 text-center text-base text-gray-500 dark:text-gray-400">
          &copy; 2023 AIssue. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { GitBranch as GitBranchIcon } from 'lucide-vue-next';
</script>
