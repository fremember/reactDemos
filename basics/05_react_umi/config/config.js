export default {
    nodeModulesTransform: {
        type: 'none',
    },
    antd: {},
    dva: {},
    routes: [
        { exact: true, path: '/', redirect: '/login' },
        { exact: true, path: '/login', component: '@/pages/login/index' },
        {
            exact: true,
            path: '/about',
            component: '@/pages/about/index'
        },
        {
            path: '/users',
            component: '@/layouts/index',
            routes: [
                { exact: true, path: '/users/', redirect: '/users/list' },
                { exact: true, path: '/users/list', component: '@/pages/users/list' },
                { exact: true, path: '/users/admin', component: '@/pages/users/admin' },
                { exact: true, path: '/users/:coin/index', component: '@/pages/[coin]/index' },
                { exact: true, path: '/users/user/:id', component: '@/pages/users/[id]' },
                { component: '@/pages/404' }
            ]
        },
        {
            exact: true,
            path: '/goods',
            component: '@/pages/goods/index'
        },
        { component: '@/pages/404' }
    ]
}