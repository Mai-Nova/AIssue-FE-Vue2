import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../views/LandingPage.vue';
import Dashboard from '../views/Dashboard.vue';
import PrivacyPolicy from '../views/PrivacyPolicy.vue';
import TermsOfService from '../views/TermsOfService.vue';
import Repositories from '../views/Repositories.vue';
import RepositoryDetail from '../views/RepositoryDetail.vue';
import IssueDetail from '../views/IssueDetail.vue';
import MyActivity from '../views/MyActivity.vue';
import GuideBot from '../views/GuideBot.vue';
import Profile from '../views/Profile.vue';
import Settings from '../views/Settings.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: LandingPage,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true },
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy,
  },
  {
    path: '/terms-of-service',
    name: 'TermsOfService',
    component: TermsOfService,
  },
  {
    path: '/repositories',
    name: 'Repositories',
    component: Repositories,
    meta: { requiresAuth: true },
  },
  {
    path: '/repositories/:id',
    name: 'RepositoryDetail',
    component: RepositoryDetail,
    meta: { requiresAuth: true },
  },
  {
    path: '/issues/:id',
    name: 'IssueDetail',
    component: IssueDetail,
    meta: { requiresAuth: true },
  },
  {
    path: '/my-activity',
    name: 'MyActivity',
    component: MyActivity,
    meta: { requiresAuth: true },
  },
  {
    path: '/guide-bot',
    name: 'GuideBot',
    component: GuideBot,
    meta: { requiresAuth: true },
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: { requiresAuth: true },
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    // 페이지 이동 시 항상 맨 위로 스크롤
    return { top: 0 };
  },
});

// 인증이 필요한 라우트에 대한 네비게이션 가드
router.beforeEach((to, from, next) => {
  // 실제 구현에서는 로그인 상태를 확인하는 로직이 필요합니다
  const isAuthenticated = true; // 데모 목적으로 항상 인증된 것으로 가정

  if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !isAuthenticated
  ) {
    // 인증이 필요한 페이지인데 로그인되지 않은 경우
    next({ path: '/' });
  } else {
    next();
  }
});

export default router;
