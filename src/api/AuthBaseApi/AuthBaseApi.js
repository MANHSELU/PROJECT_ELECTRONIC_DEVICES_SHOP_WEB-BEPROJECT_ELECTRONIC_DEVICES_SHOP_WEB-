import axios from "axios";

const authApi = axios.create({
    baseURL: import.meta.env.VITE_API__URL,
    headers: {"Content-Type": "application/json",},
    withCredentials: true
  });
export default authApi;