<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- 네비게이션 바 (Dashboard와 동일) -->
    <nav class="bg-white dark:bg-gray-800 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <div class="flex-shrink-0 flex items-center">
              <router-link to="/dashboard" class="text-2xl font-bold text-gray-800 dark:text-white flex items-center">
                <span class="text-emerald-500">AI</span>ssue
                <span class="ml-2 text-emerald-500">
                  <GitBranchIcon size="20" />
                </span>
              </router-link>
            </div>
            <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
              <router-link to="/dashboard" class="border-transparent text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                대시보드
              </router-link>
              <router-link to="/repositories" class="border-transparent text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                저장소
              </router-link>
              <router-link to="/my-activity" class="border-transparent text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                나의 활동
              </router-link>
              <router-link to="/guide-bot" class="border-emerald-500 text-gray-900 dark:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                개발 가이드 봇
              </router-link>
            </div>
          </div>
          <!-- 프로필 드롭다운 등 (Dashboard와 동일) -->
          <div class="hidden sm:ml-6 sm:flex sm:items-center">
            <button type="button" class="bg-white dark:bg-gray-800 p-1 rounded-full text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500">
              <span class="sr-only">알림 보기</span>
              <BellIcon class="h-6 w-6" />
            </button>

            <div class="ml-3 relative">
              <div>
                <button @click="profileDropdownOpen = !profileDropdownOpen" type="button" class="bg-white dark:bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                  <span class="sr-only">프로필 메뉴 열기</span>
                  <img class="h-8 w-8 rounded-full" src="https://avatars.githubusercontent.com/u/12345678?v=4" alt="사용자 프로필">
                </button>
              </div>
              <div v-if="profileDropdownOpen" class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                <router-link to="/profile" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600" role="menuitem">프로필</router-link>
                <router-link to="/settings" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600" role="menuitem">설정</router-link>
                <button @click="logout" class="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600" role="menuitem">로그아웃</button>
              </div>
            </div>
          </div>
          <div class="-mr-2 flex items-center sm:hidden">
            <!-- 모바일 메뉴 버튼 -->
            <button @click="mobileMenuOpen = !mobileMenuOpen" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500" aria-controls="mobile-menu" aria-expanded="false">
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
          <router-link to="/dashboard" class="border-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
            대시보드
          </router-link>
          <router-link to="/repositories" class="border-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
            저장소
          </router-link>
          <router-link to="/my-activity" class="border-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
            나의 활동
          </router-link>
          <router-link to="/guide-bot" class="bg-emerald-50 dark:bg-emerald-900 border-emerald-500 text-emerald-700 dark:text-emerald-200 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
            개발 가이드 봇
          </router-link>
        </div>
        <!-- 모바일 프로필 메뉴 -->
        <div class="pt-4 pb-3 border-t border-gray-200 dark:border-gray-600">
          <div class="flex items-center px-4">
            <div class="flex-shrink-0">
              <img class="h-10 w-10 rounded-full" src="https://avatars.githubusercontent.com/u/12345678?v=4" alt="사용자 프로필">
            </div>
            <div class="ml-3">
              <div class="text-base font-medium text-gray-800 dark:text-white">김개발</div>
              <div class="text-sm font-medium text-gray-500 dark:text-gray-400">dev@example.com</div>
            </div>
            <button type="button" class="ml-auto flex-shrink-0 bg-white dark:bg-gray-800 p-1 rounded-full text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500">
              <span class="sr-only">알림 보기</span>
              <BellIcon class="h-6 w-6" />
            </button>
          </div>
          <div class="mt-3 space-y-1">
            <router-link to="/profile" class="block px-4 py-2 text-base font-medium text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              프로필
            </router-link>
            <router-link to="/settings" class="block px-4 py-2 text-base font-medium text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              설정
            </router-link>
            <button @click="logout" class="block w-full text-left px-4 py-2 text-base font-medium text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              로그아웃
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- 메인 콘텐츠 -->
    <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 sm:px-0">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between">
          <div class="flex-1">
            <h1 class="text-2xl font-bold text-gray-900 dark:text-white">개발 가이드 봇</h1>
            <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
              AI 개발 가이드 봇에게 저장소와 이슈에 대한 질문을 하고 도움을 받으세요.
            </p>
          </div>
        </div>

        <!-- 저장소 선택 -->
        <div class="mt-6 bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg">
          <div class="px-4 py-5 sm:p-6">
            <div class="flex flex-col md:flex-row md:items-center gap-4">
              <div class="flex-1">
                <label for="repository" class="block text-sm font-medium text-gray-700 dark:text-gray-300">저장소 선택</label>
                <select id="repository" v-model="selectedRepository" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm rounded-md dark:bg-gray-700 dark:text-white">
                  <option v-for="repo in repositories" :key="repo.id" :value="repo.id">{{ repo.name }}</option>
                </select>
              </div>
              <div class="flex-1">
                <label for="issue" class="block text-sm font-medium text-gray-700 dark:text-gray-300">이슈 선택 (선택사항)</label>
                <select id="issue" v-model="selectedIssue" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm rounded-md dark:bg-gray-700 dark:text-white">
                  <option value="">이슈 선택 안함</option>
                  <option v-for="issue in issues" :key="issue.id" :value="issue.id">{{ issue.title }}</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <!-- 채팅 인터페이스 -->
        <div class="mt-6 bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg">
          <div class="px-4 py-5 sm:p-6 flex flex-col h-[600px]">
            <!-- 채팅 메시지 영역 -->
            <div class="flex-1 overflow-y-auto mb-4 space-y-4" ref="chatContainer">
              <div v-for="(message, index) in messages" :key="index" :class="message.sender === 'bot' ? 'flex' : 'flex justify-end'">
                <div :class="[
                  'max-w-[80%] rounded-lg px-4 py-2 text-sm',
                  message.sender === 'bot' 
                    ? 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200' 
                    : 'bg-emerald-500 text-white'
                ]">
                  <div v-if="message.sender === 'bot' && index === 0" class="flex items-center mb-2">
                    <div class="flex-shrink-0 bg-emerald-100 dark:bg-emerald-900 rounded-full p-1">
                      <BotIcon class="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <span class="ml-2 font-medium">개발 가이드 봇</span>
                  </div>
                  <div v-html="message.text"></div>
                  <div v-if="message.code" class="mt-2 bg-gray-800 text-gray-200 p-3 rounded overflow-x-auto text-xs">
                    <pre><code>{{ message.code }}</code></pre>
                  </div>
                </div>
              </div>
              <div v-if="isTyping" class="flex">
                <div class="max-w-[80%] rounded-lg px-4 py-2 text-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                  <div class="flex space-x-1">
                    <div class="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500 animate-bounce"></div>
                    <div class="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500 animate-bounce" style="animation-delay: 0.2s"></div>
                    <div class="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500 animate-bounce" style="animation-delay: 0.4s"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 입력 영역 -->
            <div class="border-t border-gray-200 dark:border-gray-700 pt-4">
              <form @submit.prevent="sendMessage" class="flex">
                <input 
                  type="text" 
                  v-model="newMessage" 
                  class="shadow-sm focus:ring-emerald-500 focus:border-emerald-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white" 
                  placeholder="질문을 입력하세요..."
                  :disabled="!selectedRepository"
                >
                <button 
                  type="submit" 
                  class="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                  :disabled="!selectedRepository || !newMessage.trim()"
                >
                  <SendIcon class="h-4 w-4" />
                  <span class="ml-1">전송</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        <!-- 추천 질문 -->
        <div class="mt-6">
          <h2 class="text-lg font-medium text-gray-900 dark:text-white">추천 질문</h2>
          <div class="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
            <button 
              v-for="question in suggestedQuestions" 
              :key="question"
              @click="useQuestion(question)"
              class="text-left px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              {{ question }}
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick, watch } from 'vue';
import { useRoute } from 'vue-router';
import { 
  Menu as MenuIcon, 
  X as XIcon, 
  Bell as BellIcon,
  Send as SendIcon,
  Bot as BotIcon,
  GitBranch as GitBranchIcon
} from 'lucide-vue-next';

const route = useRoute();
const mobileMenuOpen = ref(false);
const profileDropdownOpen = ref(false);
const chatContainer = ref(null);

// 저장소 및 이슈 데이터
const repositories = ref([
  { id: '1', name: 'frontend-project/react-app' },
  { id: '2', name: 'backend-service/api' },
  { id: '3', name: 'ui-components/design-system' },
  { id: '4', name: 'auth-service/login-flow' }
]);

const issues = ref([
  { id: '1', title: 'React 컴포넌트 성능 최적화' },
  { id: '2', title: 'API 응답 캐싱 구현' },
  { id: '3', title: '모바일 뷰 반응형 디자인 개선' }
]);

// 채팅 관련 상태
const selectedRepository = ref('');
const selectedIssue = ref('');
const messages = ref([]);
const newMessage = ref('');
const isTyping = ref(false);

let initialIssue = null;

// URL에서 이슈 ID를 가져와 초기화
onMounted(() => {
  if (route && route.query && route.query.issue) {
    initialIssue = route.query.issue;
    selectedIssue.value = initialIssue;
    // 실제로는 이슈 ID로 저장소 ID를 찾아야 함
    selectedRepository.value = '1';
    
    // 초기 메시지 설정
    initializeChat();
  } else {
    // 기본 환영 메시지
    messages.value = [
      {
        sender: 'bot',
        text: '안녕하세요! 저는 AIssue의 개발 가이드 봇입니다. 저장소를 선택하고 질문해주세요. 코드 이해, 이슈 해결 방법, 기술 스택 등에 대해 도움을 드릴 수 있습니다.'
      }
    ];
  }
});

// 저장소나 이슈가 변경되면 채팅 초기화
watch([selectedRepository, selectedIssue], () => {
  if (selectedRepository.value) {
    initializeChat();
  }
});

// 채팅 초기화
function initializeChat() {
  messages.value = [];
  
  // 저장소 정보 메시지
  const repoName = repositories.value.find(r => r.id === selectedRepository.value)?.name || '';
  let welcomeMessage = `<strong>${repoName}</strong> 저장소에 대해 질문해주세요.`;
  
  // 이슈가 선택된 경우 추가 정보
  if (selectedIssue.value) {
    const issueTitle = issues.value.find(i => i.id === selectedIssue.value)?.title || '';
    welcomeMessage += `<br><br>현재 선택된 이슈: <strong>${issueTitle}</strong><br><br>이 이슈에 대한 질문이나 해결 방법에 대해 물어보세요.`;
  }
  
  messages.value.push({
    sender: 'bot',
    text: welcomeMessage
  });
  
  // 스크롤 조정
  scrollToBottom();
}

// 메시지 전송
function sendMessage() {
  if (!newMessage.value.trim() || !selectedRepository.value) return;
  
  // 사용자 메시지 추가
  messages.value.push({
    sender: 'user',
    text: newMessage.value
  });
  
  // 입력창 초기화 및 스크롤
  const userQuestion = newMessage.value;
  newMessage.value = '';
  scrollToBottom();
  
  // 봇 응답 시뮬레이션
  isTyping.value = true;
  setTimeout(() => {
    isTyping.value = false;
    
    // 샘플 응답 (실제로는 AI 응답 로직 필요)
    let botResponse = getBotResponse(userQuestion);
    messages.value.push(botResponse);
    
    scrollToBottom();
  }, 1500);
}

// 추천 질문 사용
function useQuestion(question) {
  newMessage.value = question;
}

// 스크롤을 항상 아래로 유지
function scrollToBottom() {
  nextTick(() => {
    if (chatContainer.value) {
      chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
    }
  });
}

// 샘플 봇 응답 (실제로는 AI 응답 로직으로 대체)
function getBotResponse(question) {
  // 질문에 따른 샘플 응답
  if (question.includes('성능') || question.includes('최적화')) {
    return {
      sender: 'bot',
      text: 'React 컴포넌트 성능 최적화를 위한 몇 가지 방법을 알려드릴게요:',
      code: `// 1. React.memo를 사용하여 불필요한 리렌더링 방지
const MemoizedComponent = React.memo(function MyComponent(props) {
  // 컴포넌트 로직
});

// 2. useCallback으로 함수 메모이제이션
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);

// 3. useMemo로 계산 결과 메모이제이션
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);`
    };
  } else if (question.includes('가상화') || question.includes('virtualized')) {
    return {
      sender: 'bot',
      text: 'react-window를 사용한 목록 가상화 구현 방법입니다:',
      code: `import { FixedSizeList } from 'react-window';

function VirtualizedList({ items }) {
  const Row = ({ index, style }) => (
    <div style={style}>
      <Item data={items[index]} />
    </div>
  );

  return (
    <FixedSizeList
      height={500}
      width="100%"
      itemCount={items.length}
      itemSize={50}
    >
      {Row}
    </FixedSizeList>
  );
}`
    };
  } else if (question.includes('시작') || question.includes('첫 단계')) {
    return {
      sender: 'bot',
      text: '이 이슈를 해결하기 위한 첫 단계는 다음과 같습니다:<br><br>1. 현재 성능 문제를 정확히 측정하세요. React DevTools의 Profiler를 사용하여 어떤 컴포넌트가 자주 리렌더링되는지 확인하세요.<br>2. 대규모 목록을 렌더링하는 컴포넌트에 React.memo를 적용하여 불필요한 리렌더링을 방지하세요.<br>3. 목록 아이템 수가 많다면 react-window나 react-virtualized 같은 가상화 라이브러리 도입을 고려하세요.'
    };
  } else {
    return {
      sender: 'bot',
      text: '질문에 대한 답변을 찾기 위해 저장소 코드를 분석했습니다. 이 문제는 주로 대규모 데이터셋을 효율적으로 렌더링하는 것과 관련이 있습니다. 최신 React 패턴과 최적화 기법을 적용하면 해결할 수 있습니다. 더 구체적인 질문이 있으시면 알려주세요.'
    };
  }
}

// 추천 질문 목록
const suggestedQuestions = ref([
  '이 이슈를 해결하기 위한 첫 단계는 무엇인가요?',
  'React 컴포넌트 성능 최적화를 위한 방법을 알려주세요',
  'react-window를 사용한 가상화 구현 예제가 있나요?',
  '이 코드의 문제점은 무엇인가요?',
  '이 이슈 해결에 필요한 기술 스택은 무엇인가요?',
  '비슷한 문제를 해결한 사례가 있나요?'
]);

const logout = () => {
  // 로그아웃 로직 구현
  alert('로그아웃 기능이 구현될 예정입니다.');
  profileDropdownOpen.value = false;
};
</script>
