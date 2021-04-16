import App from './App.vue'
import "./css/style.css"
import { store } from "./store"
import { createApp } from "vue"

const app = createApp(App)

app.use(store)
app.mount("#app")
