// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


//Import the initialization style file
import '@/styles/common.scss'

//test API function
// import { getCategoryAPI } from "@/apis/testAPI";

// getCategoryAPI().then(res => {
//     // console.log(res);
    
// })

//Introduce the lazy loading directive plugin and register it
import { lazyPlugin } from './directives'

//Introduce global component plugin
import { componentPlugin } from'@/components'

const app = createApp(App)


app.use(createPinia())
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)
app.mount('#app')

