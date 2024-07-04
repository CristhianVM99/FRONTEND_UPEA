import { createApp } from 'vue'
import App from './App.vue'
import index from './router'
import './assets/scss/app.scss'
import icon from './components/icon.vue'

const app = createApp(App)
app.component('icon', icon)
app.use(index)
app.mount('#app')
