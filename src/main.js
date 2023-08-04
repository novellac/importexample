import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// import IconTooling from './components/icons/IconTooling.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// app.component('IconTooling', IconTooling) // The components we call in IconResolver.vue will work if we import manually here.

app.mount('#app')
