import { apiClient } from "./apiClient";

const productAPI = {
  get: (url, config) => apiClient.get(`/products${url}`, config),
  post: (url, data, config) => apiClient.post(`/products${url}`, data, config),
  put: (url, data, config) => apiClient.put(`/products${url}`, data, config),
  delete: (url, config) => apiClient.delete(`/products${url}`, config),
};

const uploadAPI = {
  post: (url, data, config) => apiClient.post(`/upload${url}`, data, config),
};

export async function getProducts() {
  const response = await productAPI.get("/");
  return Array.isArray(response.data) ? response.data : [];
}

export async function getProductById(id) {
  const response = await productAPI.get(`/${id}`);
  return response.data;
}

export async function addProduct(data) {
  const response = await productAPI.post("/", data);
  return response.data;
}

export async function updateProduct(id, data) {
  const response = await productAPI.put(`/${id}`, data);
  return response.data;
}

export async function deleteProduct(id) {
  const response = await productAPI.delete(`/${id}`);
  return response.data;
}

export async function uploadProductImages(files) {
  const formData = new FormData();

  files.forEach((file) => {
    formData.append("images", file);
  });

  const response = await uploadAPI.post("/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return Array.isArray(response.data?.urls) ? response.data.urls : [];
}
