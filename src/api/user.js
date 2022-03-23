import request from '@/utils/request'
import http from '@/utils/http'

// 该登录方法是mock中的数据，需改为调用后端接口，即对接后台接口处
// export function login(data) {
//   return request({
//     url: '/vue-admin-template/user/login',
//     method: 'post',
//     data
//   })
// }

export const loginApi = async(param) => {
  return await http.post('/api/system/login', param)
}

// export function getInfo(token) {
//   return request({
//     url: '/vue-admin-template/user/info',
//     method: 'get',
//     params: { token }
//   })
// }

export const getInfo = async(param) => {
  return await http.get('/api/system/getInfo', param)
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}

// 获取用户列表
export const getListApi = async(param) => {
  return await http.get('/api/user/list', param)
}

// 新增
export const addUserApi = async(param) => {
  return await http.post('/api/user', param)
}

// 编辑
export const editUserApi = async(param) =>{
  return await http.put('/api/user', param)
}

// 删除
export const deleteUserApi = async(param) => {
  return await http.delete('/api/user', param)
}

// 获取角色列表
export const getRoleListApi = async() => {
  return await http.get('/api/user/getRoleList',null)
}
// 根据用户id查询角色
export const getRoleIdApi = async(param) => {
  return await http.get('/api/user/getRoleId', param)
}
// 获取菜单列表
export const getMenuListApi = async() => {
  return await http.get('/api/system/getMenuList',null)
}
// 修改密码
export const updatePasswordApi = async(param) => {
  return await http.post('/api/user/updatePassword',param)
}
// 重置密码
export const resetPasswordApi = async(param) => {
  return await http.post('/api/user/resetPassword', param)
}
