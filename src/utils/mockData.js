// mockData.js - 프로젝트 전체에서 사용하는 임시 데이터

// 사용자 정보
export const user = {
  name: '김개발',
  email: 'dev@example.com',
  avatarUrl: 'https://avatars.githubusercontent.com/u/12345678?v=4',
};

// 저장소 목록
export const repositories = [
  {
    id: '1',
    name: 'frontend-project/react-app',
    description: 'React 기반 프론트엔드 애플리케이션',
    stars: 245,
    forks: 57,
    issues: 23,
    watchers: 23,
    isStarred: false,
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
  },
  {
    id: '2',
    name: 'backend-service/api',
    description: 'Node.js 기반 백엔드 API 서비스',
    stars: 189,
    forks: 42,
    issues: 15,
    watchers: 18,
    isStarred: true,
    languages: ['JavaScript', 'TypeScript', 'Python'],
  },
  {
    id: '3',
    name: 'ui-components/design-system',
    description: '재사용 가능한 UI 컴포넌트 라이브러리',
    stars: 312,
    forks: 78,
    issues: 31,
    watchers: 45,
    isStarred: false,
    languages: ['JavaScript', 'CSS', 'HTML'],
  },
  {
    id: '4',
    name: 'auth-service/login-flow',
    description: '인증 및 권한 관리 서비스',
    stars: 156,
    forks: 34,
    issues: 12,
    watchers: 28,
    isStarred: true,
    languages: ['TypeScript', 'JavaScript'],
  },
];

// 추천 저장소 데이터
export const recommendedRepositories = [
  {
    id: '5',
    name: 'open-source/react-native-app',
    description: 'React Native 모바일 애플리케이션 템플릿',
    stars: 1245,
    forks: 357,
    issues: 89,
  },
  {
    id: '6',
    name: 'community/node-express-starter',
    description: 'Express.js 기반 백엔드 스타터 키트',
    stars: 876,
    forks: 213,
    issues: 45,
  },
  {
    id: '7',
    name: 'popular/vue-dashboard',
    description: 'Vue.js 기반 대시보드 템플릿',
    stars: 1532,
    forks: 421,
    issues: 67,
  },
];

// 이슈 목록
export const issues = [
  {
    id: 1,
    repositoryId: '1',
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
    repositoryId: '1',
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
    repositoryId: '2',
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
    repositoryId: '3',
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
    repositoryId: '4',
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
];

// 활동 요약 데이터
export const activitySummary = {
  pullRequests: 12,
  comments: 47,
  solvedIssues: 8,
  stars: 23,
};

// 최근 활동 데이터
export const recentActivities = [
  {
    id: 1,
    type: 'pullRequest',
    title: 'React 컴포넌트 성능 최적화 PR',
    status: '병합됨',
    repository: 'frontend-project/react-app',
    date: '3일 전',
  },
  {
    id: 2,
    type: 'comment',
    title: 'API 응답 캐싱 구현 이슈에 코멘트',
    status: '활성',
    repository: 'backend-service/api',
    date: '5일 전',
  },
  {
    id: 3,
    type: 'issue',
    title: '모바일 뷰 반응형 디자인 개선 이슈 해결',
    status: '완료됨',
    repository: 'ui-components/design-system',
    date: '1주일 전',
  },
  {
    id: 4,
    type: 'star',
    title: '인증 및 권한 관리 서비스 저장소에 별 추가',
    status: '활성',
    repository: 'auth-service/login-flow',
    date: '2주일 전',
  },
  {
    id: 5,
    type: 'pullRequest',
    title: '로그인 인증 흐름 버그 수정 PR',
    status: '병합됨',
    repository: 'auth-service/login-flow',
    date: '3주일 전',
  },
];

// 기여 저장소 데이터
export const contributedRepositories = [
  {
    id: '1',
    name: 'frontend-project/react-app',
    contributions: 15,
    pullRequests: 5,
    comments: 23,
  },
  {
    id: '2',
    name: 'backend-service/api',
    contributions: 8,
    pullRequests: 3,
    comments: 12,
  },
  {
    id: '3',
    name: 'ui-components/design-system',
    contributions: 12,
    pullRequests: 4,
    comments: 18,
  },
];

// 기술 스택 통계 데이터
export const techStackStats = [
  { name: 'React', percentage: 45 },
  { name: 'JavaScript', percentage: 65 },
  { name: 'TypeScript', percentage: 35 },
  { name: 'Node.js', percentage: 30 },
  { name: 'CSS', percentage: 25 },
  { name: 'HTML', percentage: 20 },
];

// 설정 관련 데이터
export const userSettings = {
  darkMode: 'system', // 'light', 'dark', 'system'
  language: 'ko',
  notifications: {
    email: true,
    browser: true,
    weeklyDigest: true,
  },
  githubPermissions: {
    readRepos: true,
    writeIssues: true,
    writePRs: false,
  },
  twoFactorAuth: false,
};

// 프로필 기술 스택
export const userTechStack = [
  { name: 'Vue', description: 'Vue.js 프레임워크', experience: '중급자' },
  { name: 'Node.js', description: '서버 개발', experience: '전문가' },
];

// 함수: ID로 저장소 찾기
export const getRepositoryById = (id) => {
  return repositories.find((repo) => repo.id === id);
};

// 함수: ID로 이슈 찾기
export const getIssueById = (id) => {
  return issues.find((issue) => issue.id === parseInt(id));
};

// 함수: 저장소별 이슈 필터링
export const getIssuesByRepositoryId = (repositoryId) => {
  return issues.filter((issue) => issue.repositoryId === repositoryId);
};
