import axios from "axios";
import { apiKey } from "../constants";

const apiCall = async (params) => {
  const options = {
    method: "POST",
    url: "https://api.yaryelker.tech/",
    params: {
      location: params.cityName
    }
  };
  try {
    const response = await axios.request(options);
    console.log(response)
    return response.data;
  } catch (err) {
    console.log("error: ", err);
    return null;
  }
};

export const fetchWeatherForecast = async (params) => {
  return await apiCall(params);
};

export const fetchLocations = async (params) => {
  return await apiCall(params);
};
