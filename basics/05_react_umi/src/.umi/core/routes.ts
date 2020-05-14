import { ApplyPluginsType } from '/Users/fremember/projectRootDirectory/pxyGit/reactDemos/basics/05_react_umi/node_modules/_@umijs_runtime@3.1.2@@umijs/runtime';
import { plugin } from './plugin';

const routes = [
  {
    "exact": true,
    "path": "/",
    "redirect": "/login"
  },
  {
    "exact": true,
    "path": "/login",
    "component": require('@/pages/login/index').default
  },
  {
    "exact": true,
    "path": "/about",
    "component": require('@/pages/about/index').default
  },
  {
    "path": "/users",
    "component": require('@/layouts/index').default,
    "routes": [
      {
        "exact": true,
        "path": "/users/",
        "redirect": "/users/list"
      },
      {
        "exact": true,
        "path": "/users/list",
        "component": require('@/pages/users/list').default
      },
      {
        "exact": true,
        "path": "/users/admin",
        "component": require('@/pages/users/admin').default
      },
      {
        "exact": true,
        "path": "/users/:coin/index",
        "component": require('@/pages/[coin]/index').default
      },
      {
        "exact": true,
        "path": "/users/user/:id",
        "component": require('@/pages/users/[id]').default
      },
      {
        "component": require('@/pages/404').default,
        "exact": true
      }
    ]
  },
  {
    "exact": true,
    "path": "/goods",
    "component": require('@/pages/goods/index').default
  },
  {
    "component": require('@/pages/404').default,
    "exact": true
  }
];

// allow user to extend routes
plugin.applyPlugins({
  key: 'patchRoutes',
  type: ApplyPluginsType.event,
  args: { routes },
});

export { routes };
