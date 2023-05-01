import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './index.css'
//import '@element-plus/theme-chalk/dist/index.css'

import App from './App.vue'

const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')
