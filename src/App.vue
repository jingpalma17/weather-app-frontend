<template>
  <header class="bg-white shadow">
    <div class="flex mx-auto max-w-7xl px-4 py-6 sm:px-6 justify-between">
      <div class="flex items-center">
        <img src="/logo.png" style="height: 50px" />
        <h1 class="text-3xl font-bold leading-tight text-gray-900">
          Weather Forecast
        </h1>
      </div>
      <button
        v-if="isAuthenticated"
        @click="logout"
        class="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out hover:bg-blue-500 focus:outline-none"
      >
        Logout
      </button>
    </div>
  </header>
  <RouterView />
</template>
<script lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";

export default {
  setup() {
    const { logout, isAuthenticated } = useAuth0();

    return {
      logout: () => {
        logout({ returnTo: `${window.location.origin}/login` });
      },
      isAuthenticated,
    };
  },
};
</script>

<style></style>
