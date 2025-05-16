<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <AppLayout>
      <div class="flex flex-col h-full">
        <!-- 헤더 -->
        <div class="p-6 border-b border-gray-100 dark:border-gray-700">
          <div class="flex items-center justify-between">
            <h1 class="text-2xl font-bold text-gray-800 dark:text-white">
              개발 가이드 봇
            </h1>

            <div class="flex items-center space-x-3">
              <select
                v-model="selectedRepository"
                class="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400"
              >
                <option value="">저장소 선택 (선택사항)</option>
                <option
                  v-for="repo in repositories"
                  :key="repo.id"
                  :value="repo.id"
                >
                  {{ repo.owner }}/{{ repo.name }}
                </option>
              </select>

              <button
                @click="clearChat"
                class="text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <TrashIcon size="18" />
              </button>
            </div>
          </div>
        </div>

        <!-- 채팅 영역 -->
        <div class="flex-1 overflow-y-auto p-6" ref="chatContainer">
          <div class="max-w-3xl mx-auto space-y-6">
            <!-- 시스템 메시지 -->
            <div
              class="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-4 text-center"
            >
              <p class="text-sm text-emerald-600 dark:text-emerald-400">
                <span v-if="selectedRepository">
                  <strong>{{ getRepositoryName(selectedRepository) }}</strong>
                  저장소의 코드 컨벤션과 개발 가이드에 대해 질문해보세요.
                </span>
                <span v-else>
                  개발 가이드 봇에게 코드 컨벤션, 개발 방법론, 모범 사례 등에
                  대해 질문해보세요.
                </span>
              </p>
            </div>

            <!-- 채팅 메시지 -->
            <div
              v-for="(message, index) in chatMessages"
              :key="index"
              :class="
                message.role === 'user'
                  ? 'flex justify-end'
                  : 'flex justify-start'
              "
            >
              <div
                :class="[
                  'max-w-[80%] rounded-lg p-4',
                  message.role === 'user'
                    ? 'bg-emerald-500 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-100 dark:border-gray-700',
                ]"
              >
                <div
                  v-if="message.role === 'assistant'"
                  class="flex items-center mb-2"
                >
                  <div
                    class="w-6 h-6 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mr-2"
                  >
                    <BotIcon size="14" class="text-emerald-500" />
                  </div>
                  <span class="text-sm font-medium">개발 가이드 봇</span>
                </div>
                <div
                  class="prose dark:prose-invert max-w-none"
                  v-html="formatMessage(message.content)"
                ></div>
              </div>
            </div>

            <!-- 로딩 표시 -->
            <div v-if="isLoading" class="flex justify-start">
              <div
                class="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-100 dark:border-gray-700 flex items-center"
              >
                <div
                  class="w-6 h-6 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mr-2"
                >
                  <BotIcon size="14" class="text-emerald-500" />
                </div>
                <div class="flex space-x-1">
                  <div
                    class="w-2 h-2 bg-emerald-500 rounded-full animate-bounce"
                    style="animation-delay: 0s"
                  ></div>
                  <div
                    class="w-2 h-2 bg-emerald-500 rounded-full animate-bounce"
                    style="animation-delay: 0.2s"
                  ></div>
                  <div
                    class="w-2 h-2 bg-emerald-500 rounded-full animate-bounce"
                    style="animation-delay: 0.4s"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 입력 영역 -->
        <div class="p-4 border-t border-gray-100 dark:border-gray-700">
          <div class="max-w-3xl mx-auto">
            <form @submit.prevent="sendMessage" class="flex space-x-2">
              <input
                v-model="userInput"
                type="text"
                placeholder="메시지를 입력하세요..."
                class="flex-1 px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400"
                :disabled="isLoading"
              />
              <button
                type="submit"
                class="px-4 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                :disabled="isLoading || !userInput.trim()"
              >
                <SendIcon size="18" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </AppLayout>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, nextTick, watch } from 'vue';
import {
  Bot as BotIcon,
  Trash as TrashIcon,
  Send as SendIcon,
} from 'lucide-vue-next';
import applayout from '../components/AppLayout.vue';
import { marked } from 'marked';

// 상태 변수
const userInput = ref('');
const chatMessages = ref([]);
const isLoading = ref(false);
const selectedRepository = ref('');
const chatContainer = ref(null);

// 저장소 목록 (실제 구현에서는 API에서 가져옵니다)
const repositories = ref([
  {
    id: '201',
    name: 'next.js',
    owner: 'vercel',
  },
  {
    id: '202',
    name: 'tailwindcss',
    owner: 'tailwindlabs',
  },
]);

// 저장소 이름 가져오기
const getRepositoryName = (repoId) => {
  const repo = repositories.value.find((r) => r.id === repoId);
  return repo ? `${repo.owner}/${repo.name}` : '';
};

// 메시지 포맷팅 (마크다운 지원)
const formatMessage = (content) => {
  return marked(content);
};

// 메시지 전송
const sendMessage = async () => {
  if (!userInput.value.trim() || isLoading.value) return;

  // 사용자 메시지 추가
  chatMessages.value.push({
    role: 'user',
    content: userInput.value,
  });

  // 입력창 초기화
  const userMessage = userInput.value;
  userInput.value = '';

  // 스크롤 아래로 이동
  await nextTick();
  scrollToBottom();

  // 봇 응답 생성
  isLoading.value = true;

  try {
    // 실제 구현에서는 API 호출이 필요합니다
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // 선택된 저장소에 따라 다른 응답 생성
    let botResponse;
    if (selectedRepository.value) {
      const repoName = getRepositoryName(selectedRepository.value);
      botResponse = generateRepositorySpecificResponse(userMessage, repoName);
    } else {
      botResponse = generateGenericResponse(userMessage);
    }

    // 봇 메시지 추가
    chatMessages.value.push({
      role: 'assistant',
      content: botResponse,
    });

    // 스크롤 아래로 이동
    await nextTick();
    scrollToBottom();
  } catch (error) {
    console.error('메시지 전송 중 오류 발생:', error);

    // 오류 메시지 추가
    chatMessages.value.push({
      role: 'assistant',
      content:
        '죄송합니다. 응답을 생성하는 중에 오류가 발생했습니다. 다시 시도해주세요.',
    });
  } finally {
    isLoading.value = false;
  }
};

// 채팅 초기화
const clearChat = () => {
  chatMessages.value = [];
};

// 스크롤을 아래로 이동
const scrollToBottom = () => {
  if (chatContainer.value) {
    chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
  }
};

// 저장소별 응답 생성 (실제 구현에서는 AI 모델 호출이 필요합니다)
const generateRepositorySpecificResponse = (message, repoName) => {
  // 예시 응답 (실제 구현에서는 AI 모델 호출로 대체됩니다)
  if (repoName === 'vercel/next.js') {
    if (
      message.toLowerCase().includes('코드 컨벤션') ||
      message.toLowerCase().includes('스타일 가이드')
    ) {
      return `
## Next.js 코드 컨벤션

Next.js 프로젝트에서는 다음과 같은 코드 컨벤션을 따릅니다:

1. **TypeScript 사용**: 모든 새로운 코드는 TypeScript로 작성되어야 합니다.
2. **파일 명명 규칙**:
   - 컴포넌트 파일: PascalCase (예: \`Button.tsx\`)
   - 유틸리티 파일: camelCase (예: \`fetchData.ts\`)
   - 페이지 파일: kebab-case (예: \`blog-post.tsx\`)
3. **코드 포맷팅**: Prettier와 ESLint 설정을 준수해야 합니다.
4. **커밋 메시지**: Conventional Commits 형식을 따라야 합니다.
5. **테스트**: 모든 PR은 최소 하나의 테스트를 포함해야 합니다.

자세한 내용은 [CONTRIBUTING.md](https://github.com/vercel/next.js/blob/canary/contributing.md) 파일을 참조하세요.
      `;
    } else if (
      message.toLowerCase().includes('pr') ||
      message.toLowerCase().includes('풀 리퀘스트')
    ) {
      return `
## Next.js PR 가이드라인

Next.js 프로젝트에 PR을 제출할 때 다음 사항을 고려하세요:

1. **이슈 먼저 생성**: 기능 개발 전에 이슈를 먼저 생성하여 논의합니다.
2. **브랜치 명명**: \`fix/issue-description\` 또는 \`feature/issue-description\` 형식을 사용합니다.
3. **PR 설명**: 변경 사항, 관련 이슈, 테스트 방법을 명확히 설명합니다.
4. **테스트**: 모든 PR은 관련 테스트를 포함해야 합니다.
5. **CI 통과**: 모든 CI 검사가 통과해야 합니다.
6. **리뷰**: 최소 한 명의 코어 팀원의 승인이 필요합니다.

자세한 내용은 [CONTRIBUTING.md](https://github.com/vercel/next.js/blob/canary/contributing.md) 파일을 참조하세요.
      `;
    }
  } else if (repoName === 'tailwindlabs/tailwindcss') {
    if (
      message.toLowerCase().includes('코드 컨벤션') ||
      message.toLowerCase().includes('스타일 가이드')
    ) {
      return `
## Tailwind CSS 코드 컨벤션

Tailwind CSS 프로젝트에서는 다음과 같은 코드 컨벤션을 따릅니다:

1. **JavaScript 스타일**: StandardJS 스타일 가이드를 따릅니다.
2. **CSS 작성**: 새로운 유틸리티 클래스는 기존 패턴을 따라야 합니다.
3. **문서화**: 모든 새로운 기능은 문서화되어야 합니다.
4. **테스트**: 모든 변경 사항은 테스트를 포함해야 합니다.
5. **커밋 메시지**: 명확하고 설명적인 커밋 메시지를 작성해야 합니다.

자세한 내용은 [CONTRIBUTING.md](https://github.com/tailwindlabs/tailwindcss/blob/master/.github/CONTRIBUTING.md) 파일을 참조하세요.
      `;
    }
  }

  // 기본 응답
  return `
${repoName} 저장소에 대한 질문을 주셨군요. 제가 도울 수 있는 내용은 다음과 같습니다:

- 코드 컨벤션 및 스타일 가이드
- PR 및 이슈 제출 가이드라인
- 개발 환경 설정
- 테스트 작성 방법
- 문서화 가이드라인

더 구체적인 질문이 있으시면 알려주세요!
  `;
};

// 일반 응답 생성 (실제 구현에서는 AI 모델 호출이 필요합니다)
const generateGenericResponse = (message) => {
  // 예시 응답 (실제 구현에서는 AI 모델 호출로 대체됩니다)
  if (
    message.toLowerCase().includes('코드 컨벤션') ||
    message.toLowerCase().includes('스타일 가이드')
  ) {
    return `
## 일반적인 코드 컨벤션 가이드

효과적인 코드 컨벤션은 프로젝트의 가독성과 유지보수성을 높입니다. 다음은 일반적인 코드 컨벤션 가이드입니다:

### JavaScript/TypeScript
1. **일관된 명명 규칙 사용**:
   - 변수와 함수: camelCase
   - 클래스와 컴포넌트: PascalCase
   - 상수: UPPER_SNAKE_CASE
2. **의미 있는 이름 사용**: 변수와 함수 이름은 그 목적을 명확히 나타내야 합니다.
3. **코드 포맷팅**: ESLint와 Prettier를 사용하여 일관된 코드 스타일을 유지합니다.
4. **주석 작성**: 복잡한 로직에는 주석을 추가하되, 자명한 코드에는 불필요한 주석을 피합니다.

### React/Vue
1. **컴포넌트 구조화**: 논리적으로 관련된 코드를 함께 그룹화합니다.
2. **Props 검증**: PropTypes 또는 TypeScript를 사용하여 props를 검증합니다.
3. **상태 관리**: 상태 관리를 위한 일관된 패턴을 사용합니다.

### Git
1. **커밋 메시지**: 명확하고 설명적인 커밋 메시지를 작성합니다.
2. **브랜치 전략**: 일관된 브랜치 전략(예: Git Flow, GitHub Flow)을 사용합니다.

특정 언어나 프레임워크에 대한 더 자세한 가이드가 필요하시면 알려주세요!
    `;
  } else if (
    message.toLowerCase().includes('테스트') ||
    message.toLowerCase().includes('단위 테스트')
  ) {
    return `
## 효과적인 테스트 작성 가이드

좋은 테스트는 코드의 품질을 보장하고 리팩토링을 용이하게 합니다. 다음은 효과적인 테스트 작성을 위한 가이드입니다:

### 테스트 원칙
1. **FIRST 원칙**:
   - Fast: 테스트는 빠르게 실행되어야 합니다.
   - Independent: 각 테스트는 독립적이어야 합니다.
   - Repeatable: 테스트는 어떤 환경에서도 동일한 결과를 내야 합니다.
   - Self-validating: 테스트는 스스로 성공/실패를 판단할 수 있어야 합니다.
   - Timely: 테스트는 프로덕션 코드 작성과 가까운 시간에 작성되어야 합니다.

### 테스트 유형
1. **단위 테스트**: 개별 함수나 컴포넌트의 동작을 테스트합니다.
2. **통합 테스트**: 여러 컴포넌트나 모듈의 상호작용을 테스트합니다.
3. **E2E 테스트**: 사용자 관점에서 전체 애플리케이션의 동작을 테스트합니다.

### 테스트 도구
- **JavaScript/TypeScript**: Jest, Mocha, Chai
- **React**: React Testing Library, Enzyme
- **Vue**: Vue Test Utils
- **E2E**: Cypress, Playwright, Selenium

특정 프레임워크나 도구에 대한 더 자세한 정보가 필요하시면 알려주세요!
    `;
  } else if (
    message.toLowerCase().includes('git') ||
    message.toLowerCase().includes('깃')
  ) {
    return `
## Git 모범 사례 가이드

효과적인 Git 사용은 팀 협업의 핵심입니다. 다음은 Git 사용에 관한 모범 사례입니다:

### 커밋 메시지
1. **구조화된 커밋 메시지**:
   - 제목 줄: 50자 이내로 변경 사항 요약
   - 빈 줄
   - 본문: 변경 이유와 영향 설명
2. **Conventional Commits**: \`feat:\`, \`fix:\`, \`docs:\`, \`style:\`, \`refactor:\` 등의 접두사 사용

### 브랜치 전략
1. **Git Flow**:
   - \`main\`: 프로덕션 코드
   - \`develop\`: 개발 중인 코드
   - \`feature/*\`: 새로운 기능
   - \`hotfix/*\`: 긴급 버그 수정
2. **GitHub Flow**:
   - \`main\` 브랜치에서 직접 \`feature/*\` 브랜치 생성
   - PR을 통한 코드 리뷰 후 \`main\`에 병합

### 기타 팁
1. **자주 커밋하기**: 작은 단위로 자주 커밋하여 변경 사항을 추적하기 쉽게 합니다.
2. **Pull 전에 Commit**: 로컬 변경 사항을 커밋한 후 pull 하여 충돌을 관리합니다.
3. **Rebase vs Merge**: 상황에 따라 적절한 방법을 선택합니다.

특정 Git 워크플로우나 명령어에 대해 더 알고 싶으시면 알려주세요!
    `;
  }

  // 기본 응답
  return `
안녕하세요! 개발 가이드 봇입니다. 다음과 같은 주제에 대해 도움을 드릴 수 있습니다:

- 코드 컨벤션 및 스타일 가이드
- 테스트 작성 방법
- Git 사용 모범 사례
- 코드 리뷰 가이드라인
- 문서화 모범 사례
- 특정 언어/프레임워크 관련 가이드

어떤 주제에 대해 알고 싶으신가요?
  `;
};

// 저장소 선택 변경 시 안내 메시지 추가
watch(selectedRepository, (newValue, oldValue) => {
  if (newValue && newValue !== oldValue) {
    const repoName = getRepositoryName(newValue);
    chatMessages.value.push({
      role: 'assistant',
      content: `${repoName} 저장소를 선택하셨습니다. 이제 이 저장소의 코드 컨벤션과 개발 가이드에 대해 질문해보세요.`,
    });

    // 스크롤 아래로 이동
    nextTick(() => {
      scrollToBottom();
    });
  }
});

onMounted(() => {
  // 초기 메시지 추가
  chatMessages.value.push({
    role: 'assistant',
    content:
      '안녕하세요! 개발 가이드 봇입니다. 코드 컨벤션, 개발 방법론, 모범 사례 등에 대해 질문해보세요. 특정 저장소에 대한 가이드가 필요하시면 위에서 저장소를 선택해주세요.',
  });

  // 스크롤 아래로 이동
  nextTick(() => {
    scrollToBottom();
  });
});
</script>
