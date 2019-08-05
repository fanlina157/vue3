const getters = {
  message: state => {
    return '用户名为：' + state.users.username
  },
  msg: state => {
    return `昵称为：${state.users.nickname}`
  }
}

export default getters
