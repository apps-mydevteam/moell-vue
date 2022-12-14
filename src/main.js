import { createApp } from 'vue'
import router from "./router/index"
import './style.css'

import App from './App.vue'


// createApp(App).mount('#app')
createApp(App).use(router).mount('#app')