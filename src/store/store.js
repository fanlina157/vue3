import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters' // 相当于computed
import users from './modules/user'// 和users 相关的数据和方法
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    users // 使用的时候注意模块名字要加上
  },
  getters
})

// import Vue from 'vue';
// import Vuex from 'vuex';
// import getters from './getters';

// Vue.use(Vuex);

// // https://webpack.js.org/guides/dependency-management/#requirecontext
// const modulesFiles = require.context('./module', false, /\.js$/);

// // you do not need `import app from './modules/app'`
// // it will auto require all vuex module from modules file
// // 该方法将模块转为为  users: users
// const modules = modulesFiles.keys().reduce((modules, modulePath) => {
//   // set './app.js' => 'app'
//   const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
//   const value = modulesFiles(modulePath);
//   modules[moduleName] = value.default;
//   return modules;
// }, {});

// const store = new Vuex.Store({
//   modules,
//   getters
// });

// export default store;
