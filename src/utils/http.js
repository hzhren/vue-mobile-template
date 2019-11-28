import axios from 'axios'
const service = axios.create({
  timeout: 30000
})
service.defaults.headers['Content-Type'] = 'application/json'

// 响应拦截
service.interceptors.response.use(
  function (response) {
    return response.data
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default service
