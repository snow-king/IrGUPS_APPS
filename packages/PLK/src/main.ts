import { createApp, markRaw } from "vue";
import "./style.css";
import { createPinia } from "pinia";
import App from "./App.vue";
import "flowbite";
import router from "./router";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import Popper from "vue3-popper";
import Maska from "maska";

const pinia = createPinia();
const app = createApp(App);
pinia.use(piniaPluginPersistedstate);
pinia.use(({ store }) => {
  store.$router = markRaw(router);
});
app.use(router);
app.use(pinia);
app.use(Maska);
// eslint-disable-next-line vue/multi-word-component-names
app.component("Popper", Popper);
app.mount("#app");
