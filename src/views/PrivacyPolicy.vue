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
            <h1 class="text-2xl font-bold text-gray-900 dark:text-white">개인정보 처리방침</h1>
            <p class="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">
              최종 업데이트: 2023년 5월 1일
            </p>
          </div>
          <div class="border-t border-gray-200 dark:border-gray-700 px-4 py-5 sm:p-6 prose dark:prose-invert max-w-none">
            <p>
              AIssue('회사' 또는 '당사')는 귀하의 개인정보를 중요하게 생각하며 보호하기 위해 최선을 다하고 있습니다. 이 개인정보 처리방침은 당사가 수집하는 정보, 해당 정보의 사용 방법, 귀하의 개인정보 보호 권리에 대해 설명합니다.
            </p>

            <h2>1. 수집하는 정보</h2>
            <p>
              당사는 서비스 제공을 위해 다음과 같은 개인정보를 수집할 수 있습니다:
            </p>
            <ul>
              <li><strong>계정 정보:</strong> GitHub 계정 연동 시 이름, 이메일 주소, 프로필 사진 등의 정보</li>
              <li><strong>GitHub 데이터:</strong> 저장소, 이슈, 커밋 등 GitHub API를 통해 접근 가능한 정보</li>
              <li><strong>사용 데이터:</strong> 서비스 사용 패턴, 기능 사용 빈도, 상호작용 데이터</li>
              <li><strong>기기 정보:</strong> IP 주소, 브라우저 유형, 기기 유형, 운영 체제 등</li>
            </ul>

            <h2>2. 정보 사용 목적</h2>
            <p>
              수집된 정보는 다음과 같은 목적으로 사용됩니다:
            </p>
            <ul>
              <li>서비스 제공 및 유지 관리</li>
              <li>계정 관리 및 인증</li>
              <li>GitHub 저장소 및 이슈 분석</li>
              <li>맞춤형 이슈 추천 제공</li>
              <li>서비스 개선 및 새로운 기능 개발</li>
              <li>사용자 지원 및 커뮤니케이션</li>
              <li>보안 및 사기 방지</li>
            </ul>

            <h2>3. 정보 공유 및 제3자 제공</h2>
            <p>
              당사는 다음과 같은 경우를 제외하고 귀하의 개인정보를 판매하거나 대여하지 않습니다:
            </p>
            <ul>
              <li><strong>서비스 제공업체:</strong> 당사는 서비스 제공을 위해 클라우드 호스팅, 분석, 고객 지원 등의 서비스를 제공하는 제3자 업체와 정보를 공유할 수 있습니다.</li>
              <li><strong>법적 요구사항:</strong> 법률, 규정, 법적 절차 또는 정부 요청을 준수하기 위해 정보를 공개할 수 있습니다.</li>
              <li><strong>비즈니스 이전:</strong> 합병, 인수, 자산 매각의 경우 개인정보가 이전될 수 있습니다.</li>
              <li><strong>동의에 따른 공유:</strong> 귀하의 동의를 받은 경우 정보를 공유할 수 있습니다.</li>
            </ul>

            <h2>4. 데이터 보안</h2>
            <p>
              당사는 귀하의 개인정보를 보호하기 위해 적절한 기술적, 관리적 보안 조치를 구현하고 있습니다. 그러나 인터넷을 통한 전송이나 전자 저장 방식은 100% 안전하지 않으며, 절대적인 보안을 보장할 수 없습니다.
            </p>

            <h2>5. 데이터 보관</h2>
            <p>
              당사는 서비스 제공에 필요한 기간 동안 또는 법적 의무를 준수하기 위해 필요한 기간 동안 개인정보를 보관합니다. 더 이상 필요하지 않은 정보는 안전하게 삭제됩니다.
            </p>

            <h2>6. 사용자 권리</h2>
            <p>
              귀하는 다음과 같은 개인정보 관련 권리를 가집니다:
            </p>
            <ul>
              <li>개인정보 접근 및 사본 요청</li>
              <li>부정확한 정보 수정 요청</li>
              <li>개인정보 삭제 요청</li>
              <li>개인정보 처리 제한 요청</li>
              <li>개인정보 이동 요청</li>
              <li>처리에 대한 이의 제기</li>
            </ul>
            <p>
              이러한 권리를 행사하려면 아래 연락처 정보를 통해 당사에 문의하시기 바랍니다.
            </p>

            <h2>7. 쿠키 및 추적 기술</h2>
            <p>
              당사는 서비스 제공, 사용자 경험 개선, 분석을 위해 쿠키 및 유사한 추적 기술을 사용합니다. 귀하는 브라우저 설정을 통해 쿠키를 관리하거나 거부할 수 있습니다.
            </p>

            <h2>8. 어린이 개인정보</h2>
            <p>
              당사의 서비스는 13세 미만의 어린이를 대상으로 하지 않습니다. 13세 미만 어린이의 개인정보를 수집한 사실을 알게 된 경우, 해당 정보를 즉시 삭제하기 위한 조치를 취할 것입니다.
            </p>

            <h2>9. 개인정보 처리방침 변경</h2>
            <p>
              당사는 필요에 따라 이 개인정보 처리방침을 업데이트할 수 있습니다. 중요한 변경사항이 있는 경우, 서비스 내 공지 또는 이메일을 통해 알려드립니다.
            </p>

            <h2>10. 연락처</h2>
            <p>
              개인정보 처리방침에 관한 질문이나 우려사항이 있으시면 다음 연락처로 문의해 주세요:
            </p>
            <p>
              이메일: privacy@aissue.com<br>
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
