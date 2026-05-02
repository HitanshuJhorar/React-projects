import axios from "axios";

function resolveApiBaseUrl() {
  const envBaseUrl = import.meta.env.VITE_API_BASE_URL?.trim();

  if (envBaseUrl) {
    return envBaseUrl;
  }

  if (typeof window !== "undefined" && window.location.port === "5173") {
    return "http://localhost:5000/api";
  }

  return "/api";
}

const API_BASE_URL = resolveApiBaseUrl();
const ADMIN_TOKEN_KEY = "adminToken";

export function getAdminToken() {
  return localStorage.getItem(ADMIN_TOKEN_KEY);
}

export function setAdminToken(token) {
  if (token) {
    localStorage.setItem(ADMIN_TOKEN_KEY, token);
    return;
  }

  localStorage.removeItem(ADMIN_TOKEN_KEY);
}

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
});

apiClient.interceptors.request.use((config) => {
  const token = getAdminToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      setAdminToken(null);
      window.dispatchEvent(new CustomEvent("admin:unauthorized"));
    }

    return Promise.reject(error);
  },
);
