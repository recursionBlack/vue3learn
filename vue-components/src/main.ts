import { createApp } from 'vue'
import App from './App.vue'
import HeaderOfApp from './pages/HeaderOfApp.vue'

const app = createApp(App)

// 在这中间写组件的注册
// 全局注册
app.component('HeaderOfApp', HeaderOfApp)

app.mount('#app')
