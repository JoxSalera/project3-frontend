import axios from "axios";
import { API_URL } from "../consts";

const service = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

service.searchItineraries = async (q) => {
  try {
    const { data } = await service.get(`/itineraries?q=${q || ""}`);
    return data;
  } catch (err) {
    console.error(err);
  }
};

export default service;
