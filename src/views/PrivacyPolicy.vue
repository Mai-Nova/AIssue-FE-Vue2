<template>
  <div class="min-h-screen bg-white dark:bg-gray-900">
    <!-- 헤더 -->
    <header class="bg-white dark:bg-gray-900 shadow-sm">
      <div class="container mx-auto px-4 py-6">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <router-link to="/" class="text-2xl font-bold text-gray-800 dark:text-white flex items-center">
              <span class="text-emerald-500">AI</span>ssue
              <span class="ml-2 text-emerald-500">
                <GitBranchIcon size="20" />
              </span>
            </router-link>
          </div>
          <button @click="goBack" class="flex items-center text-gray-600 hover:text-emerald-500 dark:text-gray-300 dark:hover:text-emerald-400 transition-colors">
            <ArrowLeftIcon class="mr-2" size="18" />
            돌아가기
          </button>
        </div>
      </div>
    </header>

    <!-- 본문 -->
    <main class="container mx-auto px-4 py-12 max-w-4xl">
      <h1 class="text-3xl font-bold text-gray-800 dark:text-white mb-8">개인정보 처리방침</h1>
      
      <div class="prose dark:prose-invert max-w-none">
        <p class="text-gray-600 dark:text-gray-300 mb-6">
          AIssue(이하 '회사'라 함)는 이용자의 개인정보를 중요시하며, 「개인정보 보호법」, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」 등 관련 법령을 준수하고 있습니다. 회사는 개인정보 처리방침을 통하여 이용자가 제공하는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보 보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.
        </p>

        <h2 class="text-2xl font-semibold text-gray-800 dark:text-white mt-10 mb-4">1. 수집하는 개인정보 항목</h2>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          회사는 서비스 제공을 위해 다음과 같은 개인정보를 수집하고 있습니다:
        </p>
        <ul class="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-6">
          <li class="mb-2">GitHub 계정 정보: 이름, 이메일 주소, 프로필 이미지, GitHub ID</li>
          <li class="mb-2">GitHub OAuth를 통해 접근 가능한 저장소 정보</li>
          <li class="mb-2">서비스 이용 기록, 접속 로그, 쿠키, 접속 IP 정보</li>
          <li class="mb-2">이용자가 서비스 내에서 생성한 활동 데이터 (저장소 분석 기록, 이슈 분석 기록 등)</li>
        </ul>

        <h2 class="text-2xl font-semibold text-gray-800 dark:text-white mt-10 mb-4">2. 개인정보 수집 및 이용 목적</h2>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          회사는 수집한 개인정보를 다음의 목적을 위해 이용합니다:
        </p>
        <ul class="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-6">
          <li class="mb-2">서비스 제공 및 운영: GitHub 저장소 분석, 이슈 요약, 개발 가이드 봇 서비스 제공</li>
          <li class="mb-2">회원 관리: 회원제 서비스 이용에 따른 본인확인, 개인식별, 불량회원의 부정이용 방지와 비인가 사용 방지</li>
          <li class="mb-2">서비스 개선: 서비스 이용 통계 분석, 서비스 개선 및 신규 서비스 개발</li>
          <li class="mb-2">마케팅 및 광고: 이벤트 정보 및 참여기회 제공, 서비스 안내 및 이용권유</li>
        </ul>

        <h2 class="text-2xl font-semibold text-gray-800 dark:text-white mt-10 mb-4">3. 개인정보의 보유 및 이용 기간</h2>
        <p class="text-gray-600 dark:text-gray-300 mb-6">
          회사는 이용자의 개인정보를 원칙적으로 회원 탈퇴 시까지 보유합니다. 단, 관계 법령에 의해 보존할 필요가 있는 경우 해당 법령에서 정한 기간 동안 보관합니다. 이용자가 1년 이상 서비스를 이용하지 않는 경우, 개인정보 보호를 위해 휴면계정으로 전환되며, 이후 별도 보관됩니다.
        </p>

        <h2 class="text-2xl font-semibold text-gray-800 dark:text-white mt-10 mb-4">4. 개인정보의 제3자 제공</h2>
        <p class="text-gray-600 dark:text-gray-300 mb-6">
          회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 아래의 경우에는 예외로 합니다:
        </p>
        <ul class="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-6">
          <li class="mb-2">이용자가 사전에 동의한 경우</li>
          <li class="mb-2">법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
          <li class="mb-2">통계작성, 학술연구 또는 시장조사를 위하여 필요한 경우로서 특정 개인을 식별할 수 없는 형태로 가공하여 제공하는 경우</li>
        </ul>

        <h2 class="text-2xl font-semibold text-gray-800 dark:text-white mt-10 mb-4">5. 이용자의 권리와 행사 방법</h2>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          이용자는 개인정보에 대한 다음과 같은 권리를 가지고 있습니다:
        </p>
        <ul class="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-6">
          <li class="mb-2">개인정보 열람 요구</li>
          <li class="mb-2">오류 등이 있을 경우 정정 요구</li>
          <li class="mb-2">삭제 요구</li>
          <li class="mb-2">처리정지 요구</li>
        </ul>
        <p class="text-gray-600 dark:text-gray-300 mb-6">
          이용자는 회사 웹사이트의 '설정' 메뉴를 통해 직접 개인정보를 조회, 수정할 수 있으며, 개인정보 보호책임자에게 이메일 또는 전화로 연락하여 개인정보의 열람, 정정, 삭제, 처리정지를 요청할 수 있습니다.
        </p>

        <h2 class="text-2xl font-semibold text-gray-800 dark:text-white mt-10 mb-4">6. 개인정보 보호 조치</h2>
        <p class="text-gray-600 dark:text-gray-300 mb-6">
          회사는 이용자의 개인정보를 안전하게 관리하기 위하여 다음과 같은 조치를 취하고 있습니다:
        </p>
        <ul class="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-6">
          <li class="mb-2">개인정보 암호화: 비밀번호, 중요 개인정보는 암호화하여 저장 및 관리</li>
          <li class="mb-2">해킹 등에 대비한 기술적 대책: 방화벽, 침입탐지시스템 등 보안장비 설치 운영</li>
          <li class="mb-2">접근 제한: 개인정보에 대한 접근 권한 제한 및 접근 통제</li>
          <li class="mb-2">개인정보 취급자 교육: 개인정보 보호 의무와 책임에 관한 정기적 교육 실시</li>
        </ul>

        <h2 class="text-2xl font-semibold text-gray-800 dark:text-white mt-10 mb-4">7. 개인정보 관리 책임자 및 연락처</h2>
        <p class="text-gray-600 dark:text-gray-300 mb-6">
          회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 이용자의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
        </p>
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-6">
          <p class="text-gray-700 dark:text-gray-200 mb-2"><strong>개인정보 보호책임자</strong></p>
          <p class="text-gray-600 dark:text-gray-300 mb-1">이름: [이름]</p>
          <p class="text-gray-600 dark:text-gray-300 mb-1">직위: [직위]</p>
          <p class="text-gray-600 dark:text-gray-300 mb-1">이메일: privacy@aissue.com</p>
          <p class="text-gray-600 dark:text-gray-300">전화번호: [전화번호]</p>
        </div>

        <h2 class="text-2xl font-semibold text-gray-800 dark:text-white mt-10 mb-4">8. 개인정보 처리방침 변경</h2>
        <p class="text-gray-600 dark:text-gray-300 mb-6">
          이 개인정보 처리방침은 2025년 5월 15일부터 적용됩니다. 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
        </p>

        <div class="mt-12 text-right text-gray-500 dark:text-gray-400">
          <p>최종 수정일: 2025년 5월 15일</p>
        </div>
      </div>
    </main>

    <!-- 푸터 -->
    <footer class="bg-gray-100 dark:bg-gray-800 py-8">
      <div class="container mx-auto px-4 text-center">
        <div class="text-gray-600 dark:text-gray-300">
          <p>&copy; {{ new Date().getFullYear() }} AIssue. 모든 권리 보유.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { GitBranch as GitBranchIcon, ArrowLeft as ArrowLeftIcon } from 'lucide-vue-next';

const goBack = () => {
  // 브라우저 히스토리 이전 페이지로 이동
  window.history.back();
};
</script>

<style>
/* 필요한 경우 여기에 추가 사용자 정의 스타일을 추가할 수 있습니다 */
</style>