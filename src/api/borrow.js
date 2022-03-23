import http from '@/utils/http'
// 借书
export const borrowApi = async(param) => {
  return await http.post('/api/borrow', param)
}
// 还书列表
export const returnBorrowApi = async(param) => {
  return await http.get('/api/borrow/getBorrowList', param)
}
// 还书
export const returnBooksApi = async(param) => {
  return await http.post('/api/borrow/returnBooks', param)
}
// 异常还书
export const exceptionBooksApi = async(param) => {
  return await http.post('/api/borrow/exceptionBooks', param)
}
// 借阅查看
export const getLookBorrowListApi = async(param) => {
  return await http.get('/api/borrow/getLookBorrowList', param)
}
export const applyBookApi = async(param) => {
  return await http.post('/api/borrow/applyBook', param)
}
// 还书续期
export const addTimeApi = async(param) => {
  return await http.post('/api/borrow/addTime', param)
}
// 待审核预借总数
export const getBorrowApplyCountApi = async(param) => {
  return await http.get('/api/borrow/getBorrowApplyCount', param)
}
// 到期待还书总数
export const getBorrowReturnCountApi = async(param) => {
  return await http.get('/api/borrow/getBorrowReturnCount', param)
}

