<template>
  <div class="home">
    <div v-if="!state.displayResult">
      <h3>{{user.name}}</h3>
      <p>{{user.email}}</p>
      <input name="city" type="text" placeholder="city" />
      <button @click="submit">Display Weather</button>
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
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
          </tr>
        </tbody>
      </table>
      <button @click="goBack">Back</button>
    </div>
  </div>
</template>
<script lang="ts">
import { reactive, onMounted } from "vue";
import { useWeatherStore } from "../stores/weather.store";
import { useAuth0 } from '@auth0/auth0-vue';
import { useRoute, useRouter } from 'vue-router';

export default {
  name: "HomeView",
  setup() {
    const { user, isAuthenticated } = useAuth0();
    const router = useRouter();
    const weatherStore = useWeatherStore();
    const state: any = reactive({
      displayResult: false,
    }); // TODO Fix typings

    const submit = async () => {
      state.displayResult = true;
      await weatherStore.loadWeather();
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
