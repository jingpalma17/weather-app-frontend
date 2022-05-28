<script setup lang="ts"></script>

<template>
  <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6">
    <div>
      Welcome to the weather forecast web application. Please login with your
      Github user to use the application and view the weather in your city.
    </div>

    <button
      @click="login"
      class="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out hover:bg-blue-500 focus:outline-none"
    >
      Login
    </button>
  </div>
  <!--
  <main>
    <div>
      Welcome to the weather forecast web application. Please login with your
      Github user to use the application and view the weather in your city.
      <button @click="login">Login</button>
    </div>
  </main>
  -->
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
