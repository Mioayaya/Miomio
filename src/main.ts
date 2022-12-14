import { createApp } from 'vue'
import './style.css'
import './common/css/global.less'
import App from './App.vue'
import router from './route'
import store from './store'

const app = createApp(App);

app.use(store)
  .use(router)
  .mount('#app');
