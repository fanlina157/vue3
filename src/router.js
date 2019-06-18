import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/layout'

Vue.use(Router)

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 *重定向 redirect: noRedirect      if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // 登录
    {
      path: '/login',
      component: () => import('@/views/login/index'),
      hidden: true
    },
    // 首页
    {
      path: '/',
      redirect: '/home',
      component: Layout,
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import(/* webpackChunkName: "about" */ './views/home/home.vue'),
          meta: {
            title: '首页'
          }
        }
      ]
    },
    // table
    {
      path: '/table',
      name: 'table',
      redirect: '/table/dynamicTable',
      component: Layout,
      meta: {
        title: 'table',
        icon: 'table'
      },
      children: [
        {
          path: 'dynamicTable',
          name: 'dynamicTable',
          component: () => import(/* webpackChunkName: "about" */ './views/table/dynamicTable.vue'),
          meta: {
            title: '动态table'
          }
        },
        {
          path: 'dragTable',
          name: 'dragTable',
          component: () => import(/* webpackChunkName: "about" */ './views/table/dragTable.vue'),
          meta: {
            title: '拖拽table'
          }
        },
        {
          path: 'editTable',
          name: 'editTable',
          component: () => import(/* webpackChunkName: "about" */ './views/table/editTable.vue'),
          meta: {
            title: '编辑table'
          }
        },
        {
          path: 'complexTable',
          name: 'complexTable',
          component: () => import(/* webpackChunkName: "about" */ './views/table/complexTable.vue'),
          meta: {
            title: '综合table'
          }
        }
      ]
    },
    // excel
    {
      path: '/excel',
      name: 'excel',
      component: Layout,
      redirect: '/excel/exportExcel',
      meta: {
        title: 'Excel',
        icon: 'excel'
      },
      children: [
        {
          path: 'exportExcel',
          name: 'exportExcel',
          component: () => import(/* webpackChunkName: "about" */ './views/excel/exportExcel.vue'),
          meta: {
            title: '导出excel'
          }
        },
        {
          path: 'exportCheckedExcel',
          name: 'exportCheckedExcel',
          component: () => import(/* webpackChunkName: "about" */ './views/excel/exportCheckedExcel.vue'),
          meta: {
            title: '导出已选择项excel'
          }
        },
        {
          path: 'exportMulExcel',
          name: 'exportMulExcel',
          component: () => import(/* webpackChunkName: "about" */ './views/excel/exportMulExcel.vue'),
          meta: {
            title: '导出多级表头'
          }
        },
        {
          path: 'exportZip',
          name: 'exportZip',
          component: () => import(/* webpackChunkName: "about" */ './views/excel/exportZip.vue'),
          meta: {
            title: '导出zip'
          }
        },
        {
          path: 'downloadPDF',
          name: 'downloadPDF',
          component: () => import(/* webpackChunkName: "about" */ './views/excel/downloadPDF.vue'),
          meta: {
            title: '下载PDF'
          }
        },
        {
          path: 'importExcel',
          name: 'importExcel',
          component: () => import(/* webpackChunkName: "about" */ './views/excel/importExcel.vue'),
          meta: {
            title: '导入excel'
          }
        }
      ]
    },
    // 综合
    {
      path: '/artical',
      name: 'artical',
      component: Layout,
      redirect: '/artical/articalList',
      meta: {
        title: 'artical',
        icon: 'artical'
      },
      children: [
        {
          path: 'createArtical',
          name: 'createArtical',
          component: () => import(/* webpackChunkName: "about" */ './views/artical/createArtical.vue'),
          meta: {
            title: '创建文章'
          }
        },
        {
          path: 'articalList',
          name: 'articalList',
          component: () => import(/* webpackChunkName: "about" */ './views/artical/articalList.vue'),
          meta: {
            title: '文章列表'
          }
        }
      ]
    },
    { path: '*', redirect: '/404', hidden: true }
  ]
})
