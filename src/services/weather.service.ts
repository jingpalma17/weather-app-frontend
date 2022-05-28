import axios from "axios";

class WeatherService {
  private axios: any; // TODO Fix any
  private token: any; // TODO Fix any

  constructor(axios: any, token) {
    // TODO Fix any
    this.axios = axios.create({
      baseURL: `${import.meta.env.VITE_AUDIENCE}weather`, // TODO Fix route to be dynamic
      responseType: "json",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
  }

  async getWeather(): Promise<any> {
    const response = await this.axios.get();
    const { data } = response;

    return data;
  }
}
export default WeatherService;

