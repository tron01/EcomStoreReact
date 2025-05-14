import axios from 'axios';

export const api = axios.create({
  baseURL: "http://localhost:8080/api", // your backend URL
  withCredentials: true,             // ✪ send HTTP-only cookies automatically
});