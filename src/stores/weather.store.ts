/* eslint-disable @typescript-eslint/no-explicit-any */
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
    // TODO Fix any
    getWeather(): any {
      return this.weather;
    },
  },
  actions: {
    // TODO Fix any
    setWeather(weather: any) {
      this.weather = weather;
    },
    // TODO Fix any
    async loadWeather(city: string): Promise<any> {
      const userStore = useUserStore();
      const weatherService1 = new weatherService(axios, userStore.getToken);
      const weather = await weatherService1.getWeather(city);
      this.setWeather(weather);
    },
  },
});
