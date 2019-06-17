import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/layout'

Vue.use(Router)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'layout',
      component: () => import(/* webpackChunkName: "about" */ './views/layout/layout.vue'),
      children: [
        // 首页
        {
          path: '/index',
          name: 'index',
          component: () => import(/* webpackChunkName: "about" */ './views/index/index.vue'),
          meta: {
            title: '首页'
          }
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
        }
      ]
    }
  ]
})
