let BASE_URL = ''
switch (process.env.NODE_ENV) {
  case 'development':
    BASE_URL = 'http://10.200.110.123:9090/' // 这里是本地的请求
    break
  case 'test':
    BASE_URL = 'http://10.200.110.123:9090/' // 测试环境
    break
  case 'production':
    BASE_URL = 'http://10.200.110.123:9090/' // 生产环境
    break
}
export default BASE_URL
