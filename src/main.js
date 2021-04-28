import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import VueAxios from 'vue-axios'
// import axios from 'axios'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueCookies from 'vue3-cookies';


// let app = createApp(App);
// app.use(store);
// app.use(router);
// app.use(VueCookies, {
    // expireTimes: "30d",
    // path: "/",
    // domain: "",
    // secure: true,
    // sameSite: "None"
// });

// app.mount('#app');

createApp(App)
    .use(store)
    .use(router)
    .use(VueCookies, {
        expireTimes: "30d",
        path: "/",
        domain: "",
        secure: true,
        sameSite: "None"
    })
    .mount('#app')
