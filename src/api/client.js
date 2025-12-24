import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "https://fakestoreapi.com",
  timeout: 15000,
});

API.interceptors.response.use(
  (res) => res,
  (err) => {
    // Burada sadece hatayı geri fırlatıyoruz; toast'u istersen actions katmanında basarız
    return Promise.reject(err);
  }
);

export default API;
