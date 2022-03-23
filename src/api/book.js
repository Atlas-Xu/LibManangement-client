import http from '@/utils/http'
// 列表
export const getListApi = async(param) => {
  return await http.get('/api/books/list', param)
}
// 查询图书列表
export const getCateListApi = async() => {
  return await http.get('/api/category/cateList', null)
}
// 新增图书
export const addBookApi = async(params) => {
  return await http.post('/api/books', params)
}
// 编辑
export const editBookApi = async(param) => {
  return await http.put('/api/books', param)
}
// 删除
export const deleteBookApi = async(param) => {
  return await http.delete('/api/books', param)
}
// 首页用
export const getHotBookApi = async() => {
  return await http.get('/api/books/getHotBook', null)
}
