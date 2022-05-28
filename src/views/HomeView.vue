<template>
  <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6">
    <div v-if="!state.displayResult">
      <h3>{{ user.name }}</h3>
      <p>{{ user.email }}</p>
      <input
        name="city"
        type="text"
        class="peer border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-12"
        placeholder="City"
        v-model="state.city"
      />
      <button
        @click="submit(state.city)"
        class="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out hover:bg-blue-500 focus:outline-none"
      >
        Display Weather
      </button>
    </div>
    <div v-else>
      <table>
        <thead>
          <tr>
            <th>Date (mm/dd/yyyy)</th>
            <th>Temp(F)</th>
            <th>Description</th>
            <th>Main</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>{{ state.weather.main.temp }}</td>
            <td>{{ state.weather.weather[0].description }}</td>
            <td>{{ state.weather.weather[0].main }}</td>
            <td>{{ state.weather.main.pressure }}</td>
            <td>{{ state.weather.main.humidity }}</td>
          </tr>
        </tbody>
      </table>
      <button
        @click="goBack"
        class="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out hover:bg-blue-500 focus:outline-none"
      >
        Back
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import { reactive, onMounted, computed } from "vue";
import { useWeatherStore } from "../stores/weather.store";
import { useUserStore } from "../stores/user.store";
import { useAuth0 } from "@auth0/auth0-vue";
import { useRoute, useRouter } from "vue-router";

export default {
  name: "HomeView",
  setup() {
    const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
    const router = useRouter();
    const weatherStore = useWeatherStore();
    const userStore = useUserStore();
    const state: any = reactive({
      displayResult: false,
      city: '',
      weather: computed(() => weatherStore.getWeather),
    }); // TODO Fix typings

    const submit = async (city) => {
      const token = await getAccessTokenSilently();
      userStore.setToken(token);
      state.displayResult = true;
      await weatherStore.loadWeather(city);
    };

    const goBack = () => {
      state.displayResult = false;
    };

    // onMounted(() => {
    //   if (!isAuthenticated.value) {
    //     router.push('/login');
    //   }
    // });

    return { state, submit, goBack, user, isAuthenticated };
  },
};
</script>
<style></style>
