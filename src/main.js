// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import '@/styles/common.scss'

import { useIntersectionObserver } from '@vueuse/core'

//test API function
// import { getCategoryAPI } from "@/apis/testAPI";

// getCategoryAPI().then(res => {
//     // console.log(res);
    
// })

const app = createApp(App)


app.use(createPinia())
app.use(router)

app.mount('#app')

// define global instruction
app.directive('img-lazy',{
    mounted(el, binding) {
        // el: Element bound by directive img
        // binding: binding.value The value of the expression bound after the equals sign in the instruction
        // img url
        // console.log(el, binding.value);
        // const { stop } = useIntersectionObserver(
        useIntersectionObserver(
          el,
          ([{ isIntersecting }]) => {
            // console.log(isIntersecting)
            if (isIntersecting) {
              // The image enters the viewport area
              el.src = binding.value
            //   stop()
            }
          },
        )
    }
})