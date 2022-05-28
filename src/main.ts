import { createApp } from "vue";
import { createPinia } from "pinia";
import { createAuth0 } from "@auth0/auth0-vue";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.use(
  createAuth0({
    domain: `${import.meta.env.VITE_DOMAIN}`,
    client_id: `${import.meta.env.VITE_CLIENT}`,
    redirect_uri: import.meta.env.VITE_REDIRECT,
    audience: import.meta.env.VITE_AUDIENCE,
  })
);

app.use(createPinia());
app.use(router);

app.mount("#app");
