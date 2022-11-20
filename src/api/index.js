import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3500",
  timeout: 60000,
  headers: {
    Accept: "aplication/json",
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

export default api;
