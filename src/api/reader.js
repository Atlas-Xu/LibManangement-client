import http from '@/utils/http'
// 列表
export const getListApi = async(param) => {
  return await http.get('/api/reader/list', param)
}
// 新增
export const addReaderApi = async(param) => {
  return await http.post('/api/reader', param)
}
// 编辑
export const editReaderApi = async(param) => {
  return await http.put('/api/reader', param)
}
// 删除
export const deleteReaderApi = async(param) => {
  return await http.delete('/api/reader', param)
}
// 根据学号查询
export const getByUserNameApi = async(param) => {
  return await http.get('/api/reader/getByUserName', param)
}
// 读者注册
export const registerApi = async(param) => {
  return await http.post('/api/reader/register', param)
}
// 读者审核
export const applyReaderApi = async(param) => {
  return await http.put('/api/reader/applyReader', param)
}
// 读者总数
export const getReaderCountApi = async(param) => {
  return await http.get('/api/reader/getReaderCount', param)
}
// 待审核读者总数
export const getApplyReaderCountApi = async(param) => {
  return await http.get('/api/reader/getApplyReaderCount', param)
}
// 重置密码
export const resetPasswordApi = async(param) => {
  return await http.post('/api/reader/resetPassword', param)
}
