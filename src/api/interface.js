import http from '../utils/http.js'
// import qs from 'qs'

// 获取审核列表
export function getAuditList (pramas) {
  return http({
    url: '/api/app/getAuditList?userId=' + pramas,
    method: 'get'
  })
}
// 获取系统配置参数
export function getSysParam (pramas) {
  return http({
    url: '/api/sys/getSysParam',
    method: 'get'
  })
}
