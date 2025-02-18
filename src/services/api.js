import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACK_URL, // Cambia según tu servidor
});

// Interceptor para añadir el token a las solicitudes protegidas
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
