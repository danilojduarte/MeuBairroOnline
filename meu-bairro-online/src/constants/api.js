import axios from "axios";


const api = axios.create({
  baseURL: "http://192.168.0.6:3001",
  timeout: 10000, // 10 seconds timeout
});

export default api;