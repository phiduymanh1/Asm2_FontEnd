import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import router from './router/index'
import store from './router/store'  
const app = createApp(App)

app.use(store)
app.use(router)

app.mount('#app')  
