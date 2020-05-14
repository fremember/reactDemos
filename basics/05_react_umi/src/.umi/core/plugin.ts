import { Plugin } from '/Users/fremember/projectRootDirectory/pxyGit/reactDemos/basics/05_react_umi/node_modules/_@umijs_runtime@3.1.2@@umijs/runtime';

const plugin = new Plugin({
  validKeys: ['patchRoutes','rootContainer','render','onRouteChange','dva','getInitialState','request',],
});
plugin.register({
  apply: require('/Users/fremember/projectRootDirectory/pxyGit/reactDemos/basics/05_react_umi/src/.umi/plugin-dva/runtime.tsx'),
  path: '/Users/fremember/projectRootDirectory/pxyGit/reactDemos/basics/05_react_umi/src/.umi/plugin-dva/runtime.tsx',
});
plugin.register({
  apply: require('../plugin-initial-state/runtime'),
  path: '../plugin-initial-state/runtime',
});
plugin.register({
  apply: require('../plugin-model/runtime'),
  path: '../plugin-model/runtime',
});

export { plugin };
