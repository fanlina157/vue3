// 登录
import $http from './axios.config'

// export function loginUser (arg) {
//   return $http.post('/loginUser', arg)
// }
const API = {
  findDirectoryByLevel (arg) {
    return $http.post(`/inventory/publish/findDirectoryByLevel?code=${arg.code}&treeType=${arg.treeType}&matterName=${arg.matterName}&currentPage=${arg.currentPage}&pageNumber=${arg.pageNumber}`, arg);
  }
}
export default API
