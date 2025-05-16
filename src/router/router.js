import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../views/LandingPage.vue';
import Dashboard from '../views/Dashboard.vue';
import Repositories from '../views/Repositories.vue';
import RepositoryDetail from '../views/RepositoryDetail.vue';
import IssueDetail from '../views/IssueDetail.vue';
import MyActivity from '../views/MyActivity.vue';
import GuideBot from '../views/GuideBot.vue';
import Profile from '../views/Profile.vue';
import Settings from '../views/Settings.vue';
import PrivacyPolicy from '../views/PrivacyPolicy.vue';
import TermsOfService from '../views/TermsOfService.vue';

// 인증 상태 확인 함수
const isAuthenticated = () => {
  // 실제 구현에서는 JWT 토큰 확인 등의 로직이 필요합니다
  return localStorage.getItem('auth_token') !== null;
};

// 인증이 필요한 라우트에 대한 가드
const requireAuth = (to, from, next) => {
  if (isAuthenticated()) {
    next();
  } else {
    next('/');
  }
};

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage,
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      beforeEnter: requireAuth,
    },
    {
      path: '/repositories',
      name: 'Repositories',
      component: Repositories,
      beforeEnter: requireAuth,
    },
    {
      path: '/repository/:id',
      name: 'RepositoryDetail',
      component: RepositoryDetail,
      beforeEnter: requireAuth,
    },
    {
      path: '/issue/:id',
      name: 'IssueDetail',
      component: IssueDetail,
      beforeEnter: requireAuth,
    },
    {
      path: '/my-activity',
      name: 'MyActivity',
      component: MyActivity,
      beforeEnter: requireAuth,
    },
    {
      path: '/guide-bot',
      name: 'GuideBot',
      component: GuideBot,
      beforeEnter: requireAuth,
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      beforeEnter: requireAuth,
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings,
      beforeEnter: requireAuth,
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
      path: '/auth/callback',
      name: 'AuthCallback',
      component: {
        template: '<div>인증 처리 중...</div>',
        created() {
          // GitHub OAuth 콜백 처리
          const code = this.$route.query.code;
          if (code) {
            // 실제 구현에서는 백엔드 API를 호출하여 토큰을 받아옵니다
            console.log('인증 코드:', code);
            localStorage.setItem('auth_token', 'demo_token');
            this.$router.push('/dashboard');
          } else {
            this.$router.push('/');
          }
        },
      },
    },
  ],
});

export default router;
