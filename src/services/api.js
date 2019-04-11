import axios from "axios";
export const baseURL = "https://dropbox-backend.herokuapp.com";

const api = axios.create({
  baseURL
});

export default api;
