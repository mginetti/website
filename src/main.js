import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import "./registerServiceWorker";
import "./assets/style.scss";
Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: "",
            name: "home",
            component: () => import("./pages/Home"),
        },
    ],
});
Vue.config.productionTip = false;

new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");
