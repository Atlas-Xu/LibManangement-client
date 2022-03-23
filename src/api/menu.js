import http from '@/utils/http'

// 列表
export const getMenuListApi = async() => {
  return await http.get('/api/menu/list', null)
}

// 上级列表
export const getParentMenuListApi = async() => {
  return await http.get('/api/menu/parent', null)
}

// 新增
export const addMenuApi = async(param) => {
  return await http.post('/api/menu', param)
}
// 编辑
export const editMenuApi = async(param) => {
  return await http.put('/api/menu', param)
}
// 删除
export const deleteMenuApi = async(param) => {
  return await http.delete('/api/menu', param)
}
