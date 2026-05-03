const LOCAL_HOSTS = new Set(["localhost", "127.0.0.1", "::1"]);

function getApiBaseUrl() {
  const primaryApiUrl = import.meta.env.VITE_API_URL?.trim();
  const devApiUrl = import.meta.env.VITE_API_URL_DEV?.trim();

  if (typeof window !== "undefined" && LOCAL_HOSTS.has(window.location.hostname)) {
    return devApiUrl || "http://localhost:5000";
  }

  return primaryApiUrl || devApiUrl || "http://localhost:5000";
}

const API = getApiBaseUrl();

export default API;
