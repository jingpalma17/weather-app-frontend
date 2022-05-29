<template>
  <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 flex justify-center">
    <div v-if="!state.displayResult" class="flex flex-col items-center">
      <h3>{{ user.name }}</h3>
      <a :href="'https://github.com/' + user.nickname"
        >https://github.com/{{ user.nickname }}</a
      >
      <input
        name="city"
        type="text"
        class="peer border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-12"
        placeholder="City"
        v-model="state.city"
      />
      <h3>Country: Phillippines</h3>
      <button
        @click="submit(state.city)"
        class="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out hover:bg-blue-500 focus:outline-none"
      >
        Display Weather
      </button>
    </div>
    <div v-else class="w-full">
      <h3>Weather in {{ state.city }}, Phillippines</h3>
      <table class="table-auto w-full divide-y divide-gray-200">
        <thead class="bg-gray-100">
          <tr class="border-gray-400">
            <th class="border-2 text-left font-medium uppercase tracking-wider">
              Date (mm/dd/yyyy)
            </th>
            <th class="border-2 text-left font-medium uppercase tracking-wider">
              Temp(F)
            </th>
            <th
              class="hidden md:table-cell border-2 text-left font-medium uppercase tracking-wider"
            >
              Description
            </th>
            <th
              class="hidden md:table-cell border-2 text-left font-medium uppercase tracking-wider"
            >
              Main
            </th>
            <th
              class="hidden md:table-cell border-2 text-left font-medium uppercase tracking-wider"
            >
              Pressure
            </th>
            <th
              class="hidden md:table-cell border-2 text-left font-medium uppercase tracking-wider"
            >
              Humidity
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr class="border-gray-400">
            <td class="border-2">{{ state.dateToday }}</td>
            <td class="border-2">{{ state.weather.main.temp }}</td>
            <td class="hidden md:table-cell border-2">
              {{ state.weather.weather[0].description }}
            </td>
            <td class="hidden md:table-cell border-2">
              {{ state.weather.weather[0].main }}
            </td>
            <td class="hidden md:table-cell border-2">
              {{ state.weather.main.pressure }}
            </td>
            <td class="hidden md:table-cell border-2">
              {{ state.weather.main.humidity }}
            </td>
          </tr>
        </tbody>
      </table>
      <button
        @click="goBack"
        class="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out hover:bg-blue-500 focus:outline-none float-right"
      >
        Back
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import { reactive, computed } from "vue";
import { useWeatherStore } from "../stores/weather.store";
import { useUserStore } from "../stores/user.store";
import { useAuth0 } from "@auth0/auth0-vue";
import { format } from "date-fns";

export default {
  name: "HomeView",
  setup() {
    const { user, getAccessTokenSilently } = useAuth0();
    const weatherStore = useWeatherStore();
    const userStore = useUserStore();
    // TODO Fix typings
    const state: any = reactive({
      displayResult: false,
      city: "",
      weather: computed(() => weatherStore.getWeather),
      dateToday: format(new Date(), "MM/dd/yyyy"),
    });

    const submit = async (city) => {
      if (!city) {
        alert("Please enter city");
        return;
      }
      const token = await getAccessTokenSilently();
      userStore.setToken(token);
      try {
        await weatherStore.loadWeather(city);
      } catch (err) {
        alert("Something went wrong. Please try again");
        return;
      }

      state.displayResult = true;
    };

    const goBack = () => {
      state.displayResult = false;
      state.city = "";
    };

    return { state, submit, goBack, user };
  },
};
</script>
<style></style>
