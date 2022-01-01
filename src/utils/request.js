import axios from "axios";


const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API
})

service.interceptors.request.use(config => {
    NProgress.start()
    return config // 必须返回否则没有值
})
service.interceptors.response.use(config => {
    NProgress.done()
    return config
})

export default service
