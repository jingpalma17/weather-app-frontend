import axios from "axios";

class WeatherService {
  private axios: any; // TODO Fix any

  constructor(axios: any) {
    // TODO Fix any
    this.axios = axios.create({
      baseURL: "http://localhost:3001/api/weather", // TODO Fix route to be dynamic
      responseType: "json",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async getWeather(): Promise<any> {
    return this.axios.get();
  }
}
export default new WeatherService(axios);
