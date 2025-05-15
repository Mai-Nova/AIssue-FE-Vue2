// 다른 파일들에 mockData를 임포트하는 안내서

/**
 * 각 파일별로 mockData.js에서 필요한 데이터를 임포트하는 방법
 *
 * 아래는 주요 파일들에 어떤 임포트 문을 추가해야 하는지 정리한 내용입니다.
 */

// 1. RepositoryDetail.vue에 추가할 임포트:
import { getRepositoryById, getIssuesByRepositoryId } from '../utils/mockData';

// 2. Repositories.vue에 추가할 임포트:
import { repositories, recommendedRepositories } from '../utils/mockData';

// 3. MyActivity.vue에 추가할 임포트:
import {
  activitySummary,
  recentActivities,
  contributedRepositories,
  techStackStats,
} from '../utils/mockData';

// 4. Dashboard.vue에 추가할 임포트:
import { repositories, issues } from '../utils/mockData';

// 5. Profile.vue에 추가할 임포트:
import { user, userTechStack } from '../utils/mockData';

// 6. Settings.vue에 추가할 임포트:
import { userSettings, user } from '../utils/mockData';

// 7. IssueDetail.vue에 추가할 임포트:
import { getIssueById } from '../utils/mockData';

/**
 * 기존 데이터를 mockData.js에서 가져온 데이터로 교체하는 예시:
 *
 * // 기존 코드:
 * const repository = ref({
 *   id: 1,
 *   name: 'frontend-project/react-app',
 *   // ...나머지 속성들
 * });
 *
 * // 변경 코드:
 * import { getRepositoryById } from '../utils/mockData';
 *
 * const repositoryId = '1'; // 또는 라우트 파라미터에서 ID 가져오기
 * const repository = ref(getRepositoryById(repositoryId));
 *
 * // 또는 목록인 경우:
 * import { repositories } from '../utils/mockData';
 *
 * const repositoriesList = ref(repositories);
 */

/**
 * 사용 예시:
 *
 * <!-- 템플릿 내에서 사용 예시 -->
 * <div v-for="repo in repositories" :key="repo.id">
 *   {{ repo.name }}
 * </div>
 *
 * <!-- 계산된 속성 예시 -->
 * const filteredRepos = computed(() => {
 *   return repositories.filter(repo => repo.isStarred);
 * });
 */
