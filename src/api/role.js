import http from '@/utils/http'
// 列表
export const getListApi = async(param) => {
  return await http.get('/api/role/list', param)
}
// 新增
export const addRoleApi = async(param) => {
  return await http.post('/api/role', param)
}
// 编辑
export const editRoleApi = async(param) => {
  return await http.put('/api/role', param)
}
// 删除
export const deleteRoleApi = async(param) => {
  return await http.delete('/api/role', param)
}
// 角色权限树
export const getAssingShowApi = async(param) => {
  return await http.get('/api/role/getAssignShow', param)
}
// 保存角色分配的权限
export const saveAssignApi = async(param) => {
  return await http.post('/api/role/assignSave', param)
}
