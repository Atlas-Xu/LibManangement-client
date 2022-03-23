import http from '@/utils/http'
// 列表
export const getListApi = async(param) => {
  return await http.get('/api/notice/list', param)
}
// 新增
export const addApi = async(param) => {
  return await http.post('/api/notice', param)
}
// 编辑
export const editApi = async(param) => {
  return await http.put('/api/notice', param)
}
// 删除
export const deleteApi = async(param) => {
  return await http.delete('/api/notice', param)
}
// 首页用
export const getTopListApi = async() => {
  return await http.get('/api/notice/getTopList', null)
}
