import axios from "axios";

class WeatherService {
  private axios: any; // TODO Fix any

  constructor(token: string) {
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

  // TODO Fix any
  async getWeather(city: string): Promise<any> {
    const response = await this.axios.get(`${city}`);
    const { data } = response;

    return data;
  }
}
export default WeatherService;
