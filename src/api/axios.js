import axios from "axios";

const API = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
  timeout: 15000,
});

// (T11 sonrası) token set/remove işlemi için interceptor yerine fonksiyon tercih edebilirsin.
// Şimdilik sade bırakıyoruz.

export default API;
