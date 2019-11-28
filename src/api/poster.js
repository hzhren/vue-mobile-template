import http from '../utils/http.js'
// 获取海报数据
export function getCollectionRate () {
  return http({
    url: '/api/weekData/getCollectionRate',
    method: 'get'
  })
}
export function getContrastData (pramas) {
  return http({
    url: '/api/weekData/getContrastData?week=' + pramas,
    method: 'get'
  })
}
