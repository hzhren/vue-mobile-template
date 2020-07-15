import axios from 'axios'
import { Notify } from 'vant'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 30000
})
service.defaults.headers['Content-Type'] = 'application/json'

// 响应拦截,根据实际情况调整逻辑
service.interceptors.response.use(
  function (response) {
    if (response.data.code !== 0) {
      Notify({ type: 'warning', message: response.data.msg })
    }
    return response.data
  },
  function (error) {
    Notify({ type: 'warning', message: error })
    console.log(error)
    return Promise.reject(error)
  }
)

export default service
