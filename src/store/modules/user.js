import Axios from 'axios';
import { INCREMENT, DEREMENT } from '../mutation-types'
const state = {
  count: 0,
  number: 0,
  username: 'liu',
  nickname: 'never',
  password: 12
}

const mutations = {
  increment: state => {
    state.count++
  },
  // 或者另一种写法
  // increment(state) {
  //   state.count++
  // }
  asnyAdd: state => {
    state.number++
  },
  // 第二个参数为参数
  changePassword: (state, payload) => {
    state.password = payload.password
  },
  changeNickname: (state, payload) => {
    state.nickname = payload.nickname
  }
}
const actions = {
  asnyAdd: context => {
    context.commit('asnyAdd')
    // 这个意思是  vue 组件点击按钮dispatch asnyAdd 方法,这个方法commit mutations 中的asnyAdd
  },
  // 或者另一种写法
  // asnyAdd: ({ commit }) => {
  //   commit('asnyAdd')
  // },

  // 调用函数的写法
  // async asnyAdd1: context => {
  //   context.commit('asnyAdd')
  //   const pro = await Axios.post()

  // },
  changeNickname ({ commit }, payload) {
    commit('changeNickname', payload)
  }
}
export default {
  namespaced: true,
  //  vuex中的store分模块管理，
  // 需要在store的index.js中引入各个模块，为了解决不同模块命名冲突的问题，
  // 将不同模块的namespaced:true，
  // 之后在不同页面中引入getter、actions、mutations时，需要加上所属的模块名
  state,
  mutations,
  actions
}

// 替换成常量
// const mutations = {
//   [INCREMENT]: state => {
//     state.count++
//   },
//   [DECREMENT]: state => {
//     state.count++
//   }
// }
// const actions = {
//   asnyAdd: context => {
//     context.commit(INCREMENT)
//   },
//   changeNickname ({ commit }, payload) {
//     commit(DECREMENT, payload)
//   }
// }
