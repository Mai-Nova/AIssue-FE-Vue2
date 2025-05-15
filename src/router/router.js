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
// LoginPage 컴포넌트가 있다면 import (없다면 LandingPage.vue 에 로그인 폼을 만들거나 새로 생성)
// import LoginPage from '../views/LoginPage.vue';

// 사용자 인증 상태 확인 함수
function isAuthenticated() {
  return !!localStorage.getItem('userToken'); // userToken이 localStorage에 있는지 확인
}

// 전역에서 사용할 수 있도록 로그인/로그아웃 함수를 export 할 수도 있습니다.
// 또는 각 컴포넌트에서 직접 localStorage를 조작할 수 있습니다.
// 예시: src/auth.js 파일을 만들어 관리
/*
// src/auth.js (예시)
import router from './router/router'; // router 인스턴스 직접 접근은 순환 참조 문제가 생길 수 있으므로 주의

export function handleLogin(username, password) {
  // 실제 애플리케이션에서는 API 요청을 통해 사용자 인증
  if (username === 'testuser' && password === 'password') {
    localStorage.setItem('userToken', 'sample-jwt-token');
    localStorage.setItem('userInfo', JSON.stringify({ username: 'testuser', name: 'Test User', email: 'testuser@example.com' }));
    // router.push('/dashboard'); // 여기서 직접 사용보다는 로그인 성공 후 호출한 곳에서 이동 처리
    return true;
  } else {
    alert('로그인 실패: 아이디 또는 비밀번호를 확인하세요.');
    return false;
  }
}

export function handleLogout(routerInstance) { // router 인스턴스를 인자로 받음
  localStorage.removeItem('userToken');
  localStorage.removeItem('userInfo');
  if (routerInstance) {
    routerInstance.push('/');
  } else {
    // router 인스턴스를 가져올 수 없는 경우, fallback (예: window.location)
    window.location.href = '/';
  }
}

export function getUserInfo() {
  const userInfo = localStorage.getItem('userInfo');
  return userInfo ? JSON.parse(userInfo) : null;
}
*/

const routes = [
  {
    path: '/',
    name: 'Home',
    component: LandingPage, // LandingPage에 로그인 폼이 있다고 가정
  },
  // {
  //   path: '/login', // 별도의 로그인 페이지를 만든다면
  //   name: 'Login',
  //   component: LoginPage,
  //   beforeEnter: (to, from, next) => { // 이미 로그인된 사용자가 로그인 페이지 접근 시 대시보드로 리디렉션
  //     if (isAuthenticated()) {
  //       next('/dashboard');
  //     } else {
  //       next();
  //     }
  //   },
  // },
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
    props: true, // 라우트 파라미터를 props로 전달
    meta: { requiresAuth: true },
  },
  {
    path: '/issues/:id',
    name: 'IssueDetail',
    component: IssueDetail,
    props: true,
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
  // 정의되지 않은 모든 경로에 대한 404 페이지 (옵션)
  // {
  //   path: '/:pathMatch(.*)*',
  //   name: 'NotFound',
  //   component: () => import('../views/NotFoundPage.vue'), // NotFoundPage.vue 생성 필요
  // },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Vite 프로젝트의 경우 BASE_URL 사용 권장
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

// router.beforeEach((to, from, next) => {
//   const loggedIn = isAuthenticated();

//   if (to.matched.some((record) => record.meta.requiresAuth) && !loggedIn) {
//     // 인증이 필요한 페이지인데 로그인되지 않은 경우
//     alert('로그인이 필요한 페이지입니다. 랜딩 페이지로 이동합니다.');
//     next({ path: '/' }); // 로그인 페이지 경로로 수정 가능 (예: '/login')
//   } else if (
//     (to.name === 'Home' || to.name === 'Login') &&
//     loggedIn &&
//     to.path !== '/dashboard' &&
//     from.path !== '/dashboard'
//   ) {
//     // 로그인 페이지 또는 랜딩 페이지(로그인 폼이 있는) 접근 시, 이미 로그인 되어있다면 대시보드로 이동
//     // 단, 사용자가 명시적으로 홈으로 가려고 하거나, 대시보드에서 오는 경우가 아니라면
//     // 필요에 따라 이 로직은 조정될 수 있습니다.
//     // next({ path: '/dashboard' }); // 이 부분은 UX에 따라 주석 처리하거나 변경
//     next();
//   } else {
//     next();
//   }
// });

export default router;
