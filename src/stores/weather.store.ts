import { defineStore } from "pinia";
import weatherService from "../services/weather.service";
import axios from "axios";
import { useUserStore } from "./user.store";

const defaultWeatherData = {
  date: "",
  temperature: "",
  description: "",
  main: "",
  humidity: "",
};

export const useWeatherStore = defineStore({
  id: "weather",
  state: () => ({
    weather: { ...defaultWeatherData },
  }),
  getters: {
    getWeather(): any {
      // TODO Fix any
      return this.weather;
    },
  },
  actions: {
    setWeather(weather: any) {
      // TODO Fix any
      this.weather = weather;
    },
    async loadWeather(): Promise<any> {
      const useUserStore1 = useUserStore();
      const weatherService1 = new weatherService(axios, useUserStore1.getToken);
      const weather = await weatherService1.getWeather();
      this.setWeather(weather);
    },
  },
});
