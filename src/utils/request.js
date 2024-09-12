import axios from "axios";
import qs from 'qs'

const errorHandle = (status,info)=>{
    switch(status){
        case 400:
            console.log('语义错误')
            break;
        case 401:
            console.log('服务器认证失败')
            break;
        case 403:
            console.log('服务器拒接访问')
            break;
        case 404:
            console.log('地址错误')
            break;
        case 500:
            console.log('服务器遇到意外')
            break;
        case 502:
            console.log('服务器无响应')
            break;
        default:
            console.log(info)
            break;

    }


}

const instance = axios.create({
    // 存放网络请求的公共配置
    timeout:5000
})

// 拦截器最常用
instance.interceptors.request.use(
    config =>{
        if (config.method === 'post'){
            config.data = qs.stringify(config.data)
        }
        // config 包含网络请求的所有信息
        return config
    },
    error =>{
        return Promise.reject(error)
    } 
)

instance.interceptors.response.use(
    response =>{
        return response.status == 200 ? Promise.resolve(response):Promise.reject(response)
     
    },
    error =>{
        const {response} = error;
        // 错误处理才是重中之重
        errorHandle(response.status, response.info);
    }
)

export default instance;