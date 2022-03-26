import axios from 'axios'
import { baseURLT } from '@/locales/baseURL'

// 4. 真正的方式
export function request (config) {
    // 1. 创建axios实例
    const instance = axios.create({
        baseURL: baseURLT,
        // baseURL: 'http://152.136.185.210:7878/api/m5',
        timeout: 5000
        })
    // 2.1 axios拦截器
    instance.interceptors.request.use(config => {
        return config
    }, err => {
        console.log(err)
    })
    // 2.2 响应拦截
    instance.interceptors.response.use(res => {
        return res.data
    }, err => {
        console.log(err)
    })

    // 3. 发送真正的网络请求
    return instance(config)
}
