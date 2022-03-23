import http from '@/utils/http'
// 列表
export const getListApi = async(param) => {
  return await http.get('/api/category/list', param)
}
// 新增
export const addApi = async(param) => {
  return await http.post('/api/category', param)
}
// 编辑
export const editApi = async(param) => {
  return await http.put('/api/category', param)
}
// 删除
export const deleteApi = async(param) => {
  return await http.delete('/api/category', param)
}
// 首页用
export const categoryCountApi = async() => {
  return await http.get('/api/category/categoryCount', null)
}
