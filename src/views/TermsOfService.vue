<template>
  <div class="min-h-screen bg-white dark:bg-gray-900">
    <!-- 헤더 -->
    <header class="bg-white dark:bg-gray-900 shadow-sm">
      <div class="container mx-auto px-4 py-6">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <router-link
              to="/"
              class="text-2xl font-bold text-gray-800 dark:text-white flex items-center"
            >
              <span class="text-emerald-500">AI</span>ssue
              <span class="ml-2 text-emerald-500">
                <GitBranchIcon size="20" />
              </span>
            </router-link>
          </div>
          <button
            @click="goBack"
            class="flex items-center text-gray-600 hover:text-emerald-500 dark:text-gray-300 dark:hover:text-emerald-400 transition-colors"
          >
            <ArrowLeftIcon class="mr-2" size="18" />
            돌아가기
          </button>
        </div>
      </div>
    </header>

    <!-- 본문 -->
    <main class="container mx-auto px-4 py-12 max-w-4xl">
      <h1 class="text-3xl font-bold text-gray-800 dark:text-white mb-8">
        서비스 이용약관
      </h1>

      <div class="prose dark:prose-invert max-w-none">
        <p class="text-gray-600 dark:text-gray-300 mb-6">
          AIssue 서비스(이하 '서비스')를 이용해 주셔서 감사합니다. 본 약관은
          AIssue 서비스의 이용과 관련하여 회사와 회원 간의 권리, 의무 및
          책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
        </p>

        <h2
          class="text-2xl font-semibold text-gray-800 dark:text-white mt-10 mb-4"
        >
          제1조 (목적)
        </h2>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          본 약관은 AIssue(이하 '회사')가 제공하는 AI 기반 GitHub 저장소 분석 및
          개발 가이드 서비스(이하 '서비스')의 이용조건 및 절차, 회사와 회원 간의
          권리, 의무 및 책임사항 등을 규정함을 목적으로 합니다.
        </p>

        <h2
          class="text-2xl font-semibold text-gray-800 dark:text-white mt-10 mb-4"
        >
          제2조 (용어의 정의)
        </h2>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          본 약관에서 사용하는 용어의 정의는 다음과 같습니다:
        </p>
        <ul class="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-6">
          <li class="mb-2">
            '서비스'라 함은 회사가 제공하는 AIissue 웹사이트 및 관련 제반
            서비스를 의미합니다.
          </li>
          <li class="mb-2">
            '회원'이라 함은 본 약관에 동의하고 GitHub 계정을 통해 서비스 이용
            계약을 체결한 자를 의미합니다.
          </li>
          <li class="mb-2">
            'GitHub 계정'이라 함은 회원이 GitHub(github.com)에서 사용하는 계정을
            의미합니다.
          </li>
          <li class="mb-2">
            '콘텐츠'라 함은 회원이 서비스에 게시하거나 서비스를 통해 생성,
            공유하는 모든 정보(텍스트, 이미지, 코드 등)를 의미합니다.
          </li>
        </ul>

        <h2
          class="text-2xl font-semibold text-gray-800 dark:text-white mt-10 mb-4"
        >
          제3조 (약관의 효력 및 변경)
        </h2>
        <p class="text-gray-600 dark:text-gray-300 mb-6">
          1. 본 약관은 회원이 서비스 가입 시 동의함으로써 효력이 발생합니다.
          <br />
          2. 회사는 필요한 경우 관련 법령을 위배하지 않는 범위 내에서 본 약관을
          변경할 수 있습니다. 변경된 약관은 서비스 웹사이트에 공지함으로써
          효력이 발생하며, 회원은 변경된 약관에 동의하지 않을 경우 회원 탈퇴를
          통해 이용 계약을 해지할 수 있습니다.
        </p>

        <h2
          class="text-2xl font-semibold text-gray-800 dark:text-white mt-10 mb-4"
        >
          제4조 (이용계약의 체결)
        </h2>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          1. 이용계약은 이용자가 약관의 내용에 대하여 동의를 한 다음 회사가 정한
          절차에 따라 서비스 이용을 신청하고, 회사가 이를 승낙함으로써
          체결됩니다.
        </p>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          2. 회사는 다음 각 호에 해당하는 신청에 대하여는 승낙을 하지 않을 수
          있습니다:
        </p>
        <ul class="list-disc pl-10 text-gray-600 dark:text-gray-300 mb-6">
          <li class="mb-2">기술상 서비스 제공이 불가능한 경우</li>
          <li class="mb-2">실명이 아니거나 타인의 명의를 이용한 경우</li>
          <li class="mb-2">
            허위의 정보를 기재하거나, 회사가 요구하는 정보를 제공하지 않은 경우
          </li>
          <li class="mb-2">
            이용자가 이전에 이용약관 위반 등의 사유로 서비스 이용이 제한된 적이
            있는 경우
          </li>
        </ul>

        <h2
          class="text-2xl font-semibold text-gray-800 dark:text-white mt-10 mb-4"
        >
          제5조 (서비스의 제공 및 변경)
        </h2>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          1. 회사는 다음과 같은 서비스를 제공합니다:
        </p>
        <ul class="list-disc pl-10 text-gray-600 dark:text-gray-300 mb-4">
          <li class="mb-2">GitHub 저장소 분석 및 요약 서비스</li>
          <li class="mb-2">GitHub 이슈 분석 및 요약 서비스</li>
          <li class="mb-2">개발 가이드 봇 서비스</li>
          <li class="mb-2">
            기타 회사가 추가 개발하거나 다른 회사와의 제휴계약 등을 통해
            이용자에게 제공하는 일체의 서비스
          </li>
        </ul>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          2. 회사는 서비스의 내용, 이용방법, 이용시간에 대하여 변경이 있는
          경우에는 변경사유, 변경될 서비스의 내용 및 제공일자 등을 그 변경 전에
          해당 서비스 초기화면에 게시합니다.
        </p>
        <p class="text-gray-600 dark:text-gray-300 mb-6">
          3. 회사는 무료로 제공되는 서비스의 일부 또는 전부를 회사의 정책 및
          운영의 필요상 수정, 중단, 변경할 수 있으며, 이에 대하여 관련법에
          특별한 규정이 없는 한 이용자에게 별도의 보상을 하지 않습니다.
        </p>

        <h2
          class="text-2xl font-semibold text-gray-800 dark:text-white mt-10 mb-4"
        >
          제6조 (이용자의 의무)
        </h2>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          1. 이용자는 다음 행위를 하여서는 안 됩니다:
        </p>
        <ul class="list-disc pl-10 text-gray-600 dark:text-gray-300 mb-6">
          <li class="mb-2">신청 또는 변경 시 허위 내용의 등록</li>
          <li class="mb-2">타인의 정보 도용</li>
          <li class="mb-2">회사가 게시한 정보의 변경</li>
          <li class="mb-2">
            회사가 정한 정보 이외의 정보(컴퓨터 프로그램 등) 등의 송신 또는 게시
          </li>
          <li class="mb-2">
            회사와 기타 제3자의 저작권 등 지적재산권에 대한 침해
          </li>
          <li class="mb-2">
            회사 및 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위
          </li>
          <li class="mb-2">
            외설 또는 폭력적인 메시지, 화상, 음성, 기타 공서양속에 반하는 정보를
            서비스에 공개 또는 게시하는 행위
          </li>
          <li class="mb-2">
            회사의 동의 없이 영리를 목적으로 서비스를 사용하는 행위
          </li>
          <li class="mb-2">기타 불법적이거나 부당한 행위</li>
        </ul>

        <h2
          class="text-2xl font-semibold text-gray-800 dark:text-white mt-10 mb-4"
        >
          제7조 (회사의 의무)
        </h2>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          1. 회사는 관련법과 본 약관이 금지하거나 공서양속에 반하는 행위를 하지
          않으며, 계속적이고 안정적으로 서비스를 제공하기 위하여 최선을 다하여
          노력합니다.
        </p>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          2. 회사는 이용자가 안전하게 서비스를 이용할 수 있도록
          개인정보(신용정보 포함)보호를 위해 보안시스템을 갖추어야 하며
          개인정보처리방침을 공시하고 준수합니다.
        </p>
        <p class="text-gray-600 dark:text-gray-300 mb-6">
          3. 회사는 서비스 이용과 관련하여 이용자로부터 제기된 의견이나 불만이
          정당하다고 인정할 경우에는 이를 처리하여야 합니다. 이용자가 제기한
          의견이나 불만사항에 대해서는 게시판을 활용하거나 전자우편 등을 통하여
          이용자에게 처리과정 및 결과를 전달합니다.
        </p>

        <h2
          class="text-2xl font-semibold text-gray-800 dark:text-white mt-10 mb-4"
        >
          제8조 (지적재산권)
        </h2>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          1. 회사가 작성한 저작물에 대한 저작권 및 기타 지적재산권은 회사에
          귀속됩니다.
        </p>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          2. 이용자는 서비스를 이용함으로써 얻은 정보를 회사의 사전 승낙 없이
          복제, 송신, 출판, 배포, 방송, 기타 방법에 의하여 영리목적으로
          이용하거나 제3자에게 이용하게 하여서는 안 됩니다.
        </p>
        <p class="text-gray-600 dark:text-gray-300 mb-6">
          3. 이용자가 서비스 내에 게시한 게시물의 저작권은 해당 게시물의
          저작자에게 귀속됩니다. 단, 회사는 서비스의 운영, 개선 및 홍보 등의
          목적으로 이용자의 게시물을 사용할 수 있습니다.
        </p>

        <h2
          class="text-2xl font-semibold text-gray-800 dark:text-white mt-10 mb-4"
        >
          제9조 (서비스 이용제한 및 계약해지)
        </h2>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          1. 회사는 이용자가 본 약관의 의무를 위반하거나 서비스의 정상적인
          운영을 방해한 경우, 서비스 이용을 제한하거나 계약을 해지할 수
          있습니다.
        </p>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          2. 회사는 이용자가 다음 각 호에 해당하는 행위를 한 경우 사전통지 없이
          계약을 해지하거나 또는 서비스 이용을 중지할 수 있습니다:
        </p>
        <ul class="list-disc pl-10 text-gray-600 dark:text-gray-300 mb-6">
          <li class="mb-2">타인의 서비스 ID 및 비밀번호를 도용한 경우</li>
          <li class="mb-2">서비스 운영을 고의로 방해한 경우</li>
          <li class="mb-2">가입한 이름이 실명이 아닌 경우</li>
          <li class="mb-2">같은 사용자가 다른 ID로 이중등록을 한 경우</li>
          <li class="mb-2">
            공공질서 및 미풍양속에 저해되는 내용을 고의로 유포시킨 경우
          </li>
          <li class="mb-2">
            타인의 명예를 손상시키거나 불이익을 주는 행위를 한 경우
          </li>
          <li class="mb-2">
            서비스의 안정적 운영을 방해할 목적으로 다량의 정보를 전송하거나
            광고성 정보를 전송한 경우
          </li>
          <li class="mb-2">
            정보통신설비의 오작동이나 정보 등의 파괴를 유발시키는 컴퓨터
            바이러스 프로그램 등을 유포한 경우
          </li>
          <li class="mb-2">
            회사, 다른 이용자 또는 제3자의 지적재산권을 침해하는 경우
          </li>
          <li class="mb-2">
            타인의 개인정보, 이용자ID 및 비밀번호를 부정하게 사용하는 경우
          </li>
          <li class="mb-2">
            회사의 서비스 정보를 이용하여 얻은 정보를 회사의 사전 승낙 없이 복제
            또는 유통시키거나 상업적으로 이용하는 경우
          </li>
          <li class="mb-2">기타 관련 법령에 위배되는 행위를 한 경우</li>
        </ul>

        <h2
          class="text-2xl font-semibold text-gray-800 dark:text-white mt-10 mb-4"
        >
          제10조 (면책조항)
        </h2>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          1. 회사는 천재지변, 전쟁, 기간통신사업자의 서비스 중지 및 기타 이에
          준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스
          제공에 대한 책임이 면제됩니다.
        </p>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          2. 회사는 이용자의 귀책사유로 인한 서비스 이용의 장애에 대하여 책임을
          지지 않습니다.
        </p>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          3. 회사는 이용자가 서비스를 이용하여 기대하는 수익을 상실한 것에
          대하여 책임을 지지 않으며, 그 밖에 서비스를 통하여 얻은 자료로 인한
          손해에 관하여 책임을 지지 않습니다.
        </p>
        <p class="text-gray-600 dark:text-gray-300 mb-6">
          4. 회사는 이용자가 게재한 정보, 자료, 사실의 신뢰도, 정확성 등 내용에
          관해서는 책임을 지지 않습니다.
        </p>

        <h2
          class="text-2xl font-semibold text-gray-800 dark:text-white mt-10 mb-4"
        >
          제11조 (분쟁해결)
        </h2>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          1. 회사와 이용자 간에 발생한 서비스 이용에 관한 분쟁은 원만하게
          해결하기 위하여 필요한 모든 노력을 하여야 합니다.
        </p>
        <p class="text-gray-600 dark:text-gray-300 mb-6">
          2. 제1항의 노력에도 불구하고 분쟁이 해결되지 않을 경우에는 관련법에
          따라 관할 법원을 통하여 분쟁을 해결합니다.
        </p>

        <h2
          class="text-2xl font-semibold text-gray-800 dark:text-white mt-10 mb-4"
        >
          제12조 (기타)
        </h2>
        <p class="text-gray-600 dark:text-gray-300 mb-6">
          본 약관에 명시되지 않은 사항은 관련법령 및 회사가 정한 서비스의
          세부이용지침 등의 규정에 따릅니다.
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
import {
  GitBranch as GitBranchIcon,
  ArrowLeft as ArrowLeftIcon,
} from 'lucide-vue-next';
import { useRouter } from 'vue-router';

const router = useRouter();

const goBack = () => {
  // 가능한 경우 이전 페이지로, 그렇지 않으면 홈으로 이동
  if (window.history.length > 2) {
    router.go(-1);
  } else {
    router.push('/');
  }
};
</script>

<style>
/* 필요한 경우 여기에 추가 사용자 정의 스타일을 추가할 수 있습니다 */
</style>
