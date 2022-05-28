import { defineStore } from "pinia";
import weatherService from "../services/weather.service";

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
      const weather = await weatherService.getWeather();
      this.setWeather(weather);
    },
  },
});
