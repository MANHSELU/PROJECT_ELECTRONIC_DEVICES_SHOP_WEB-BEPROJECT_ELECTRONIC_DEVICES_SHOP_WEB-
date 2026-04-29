import axios from "axios";

const notAuthApi = axios.create({
    baseURL: import.meta.env.VITE_API_NOT_AUTH_URL,
    headers: {"Content-Type": "application/json",},
  });
export default notAuthApi;