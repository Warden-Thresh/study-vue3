import { createApp } from 'vue'
import { ElButton, ElCol, ElRow } from 'element-plus'
import App from './App.vue'
import router from './router'

// import 'element-plus/lib/theme-chalk/index.css';
import './theme/mytheme/index.css'
import store from './store'
import './index.css'

const app = createApp(App)

app.use(router).use(store)
app.use(ElButton).use(ElCol).use(ElRow)

app.mount('#app')
router.afterEach(() => {
  console.log('path::', router.currentRoute.value.path)
})
router.beforeEach(() => {
  console.log('path::', router.currentRoute.value.path)
})
