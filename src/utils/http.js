// Basic Axios encapsulation
import axios from "axios";
import { ElMessage } from 'element-plus'
import { useUserStore } from "@/stores/user";
import router from "@/router";
import 'element-plus/theme-chalk/el-message.css'

const httpInstance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000

})

// Axios request interceptor
httpInstance.interceptors.request.use(config => {
  // 1.从pinia获取token数据
  const userStore = useUserStore();
  // 2.按照后端的要求拼接数据
const token = userStore.userInfo.token
if(token){
  config.headers.Authorization = `Bearer ${token}`
}

  return config;
}, e => Promise.reject(e));

// Axios reactive interceptor
httpInstance.interceptors.response.use(res => res.data, e => {
  
  // 统一错误提示
  ElMessage({
    type: 'warning',
    message: e.response.data.message,
  })
  // 401token失效处理
  // 1. 清除本地用户数据
  const userStore = useUserStore();
  if(e.response.status === 401){
    userStore.clearUserInfo();
    // 2. 跳转到登录页
    router.push('/login')
  }
  
  
  return Promise.reject(e);
});

export default httpInstance;