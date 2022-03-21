import http from '@/utils/http'

// 人脸注册
export const addFaceApi = async(parms) =>{
  return await http.post('/api/face',parms)
}
