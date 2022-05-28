<script setup lang="ts"></script>

<template>
  <main>
    <div>
      Welcome to the weather forecast web application. Please login with your
      Github user to use the application and view the weather in your city.
      <button @click="login">Login</button>
    </div>
  </main>
</template>
<script>
import { useAuth0 } from "@auth0/auth0-vue";

export default {
  setup() {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return {
      isAuthenticated,
      login: () => {
        loginWithRedirect();
      },
    };
  },
};
</script>


