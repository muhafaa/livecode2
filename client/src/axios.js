var axios = require('axios')
var axiosInstance = axios.create({
  baseURL: 'http://localhost:3000'
})

export default axiosInstance
