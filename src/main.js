import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { plugin, defaultConfig } from '@formkit/vue'
import config from '../Formkit.config'

import './assets/main.css';

const app = createApp(App)

app.use(router)
app.use(plugin, defaultConfig(config));
app.mount('#app')
