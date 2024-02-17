import axios from "axios";
const VITE_CITY_API = import.meta.env.VITE_CITY_API;
export const axiosCities = axios.create({
  baseURL: VITE_CITY_API,
});
