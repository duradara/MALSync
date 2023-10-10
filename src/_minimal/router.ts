import { createRouter, createWebHashHistory, Router, RouteRecordRaw } from 'vue-router';
import Bookmarks from './views/bookmarks.vue';
import Overview from './views/overview.vue';
import Settings from './views/settings.vue';
import Search from './views/search.vue';
import Install from './views/install.vue';
import NotFound from './views/notFound.vue';
import { getUrlObj, setUrlObj } from './utils/state';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: () => {
      return '/settings/';
    },
  },
  {
    path: '/book/:type/:state',
    name: 'Bookmarks',
    redirect: () => {
      return '/settings/';
    },
  },
  {
    path: '/:type/:slug',
    name: 'Overview',
    redirect: () => {
      return '/settings/';
    },
  },
  {
    path: '/settings/:path*',
    name: 'Settings',
    component: Settings,
  },
  {
    path: '/search',
    redirect: () => {
      return '/settings/';
    },
  },
  {
    path: '/search/:type',
    name: 'Search',
    redirect: () => {
      return '/settings/';
    },
  },
  {
    path: '/install',
    name: 'Install',
    redirect: () => {
      return '/settings/';
    },
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
];

let scrollUntilDebounce;
const scrollUntilTrue = (scrollPosition: number) => {
  let count = 0;
  scrollUntilDebounce = setInterval(() => {
    count++;
    if (count > 50 || scrollPosition - 50 < window.scrollY) {
      clearInterval(scrollUntilDebounce);
    } else {
      $(window).scrollTop(scrollPosition);
    }
  }, 100);
};

let tempRouter: Router | null = null;

export function router() {
  if (!tempRouter) {
    tempRouter = createRouter({
      history: createWebHashHistory(),
      routes,
      scrollBehavior(to, from, savedPosition) {
        clearInterval(scrollUntilDebounce);
        if (savedPosition) {
          if (to.name === 'Bookmarks' && savedPosition.top) {
            scrollUntilTrue(savedPosition.top);
          }
          return savedPosition;
        }
        return { top: 0 };
      },
    });

    tempRouter.afterEach((to, from, failure) => {
      if (!failure && to.name !== 'Install') setUrlObj(to.fullPath);
    });
  }
  return tempRouter;
}
