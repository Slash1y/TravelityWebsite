import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import VueSmoothScroll from 'v-smooth-scroll'
import { createRouter, createWebHistory} from 'vue-router'
import Main from '../src/components/Main.vue'

const routes = [
  { path: '/', name: 'Home', component: Main},
  { path: '/terms', name: 'Terms', component: () => import('../src/components/Terms.vue')}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

loadFonts()

createApp(App)
  .use(vuetify)
  .use(VueSmoothScroll)
  .use(router)
  .mount('#app')
