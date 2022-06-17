import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    {
      path: '/user',
      layout: false,
      routes: [
        { path: '/user', routes: [{ name: '登录', path: '/user/login', component: './user/Login' }] },
        { component: './404' },
      ],
    },
    {
      path: '/material', name: '我的项目', icon: 'inbox',
      routes: [
        { path: '/material', component: '@/pages/material/index', },
        { path: '/material/info', layout: false, name: '项目', component: '@/pages/material/info/index' },
      ]
    },
    {
      path: '/admin',
      name: '管理页',
      icon: 'crown',
      access: 'canAdmin',
      component: './Admin',
      routes: [
        { path: '/admin/sub-page', name: '二级管理页', icon: 'smile', component: './Welcome' },
        { component: './404' },
      ],
    },
    { name: '查询表格', icon: 'table', path: '/list', component: './TableList' },
    { path: '/', redirect: '/material' },
    { component: './404' },
  ]
}).routes;
