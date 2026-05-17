// Basic Axios encapsulation
import axios from "axios";
import { ElMessage } from 'element-plus'
import { useUserStore } from "@/stores/user";
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
  return Promise.reject(e);
});

export default httpInstance;