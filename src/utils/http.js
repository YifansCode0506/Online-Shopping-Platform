// Basic Axios encapsulation
import axios from "axios";

const httpInstance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000

})

// Axios request interceptor
httpInstance.interceptors.request.use(config => {
  return config;
}, e => Promise.reject(e));

// Axios reactive interceptor
httpInstance.interceptors.response.use(res => res.data, e => {
  return Promise.reject(e);
});

export default httpInstance;