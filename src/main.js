import 'vuetify/styles'
import { createApp } from 'vue'
import { createVuetify } from 'vuetify/lib/framework'
import App from './App.vue'
import router from './router'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

const app = createApp(App)
const vuetify = createVuetify()

app.use(vuetify)
app.use(router)

app.mount('#app')