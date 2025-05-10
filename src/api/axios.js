import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api", // your Spring Boot backend
  withCredentials: true, // allows cookies to be sent
});

export default api;
