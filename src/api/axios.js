import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api", // your backend URL
  withCredentials: true, // required for HTTP-only cookie
});

export default api;
