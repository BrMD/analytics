import axios, { AxiosInstance } from "axios";
import { Url } from "next/dist/shared/lib/router/router";

const axiosParams = {
  baseURL:
    process.env.NODE_ENV === "development" ? "http://localhost:8000" : "/",
};
const axiosInstance = axios.create(axiosParams);

const api = (axios: AxiosInstance) => {
  return {
    get: (url: string, config = {}) => axios.get(url, config),
    delete: (url: string, config = {}) => axios.delete(url, config),
    post: (url: string, body: Body, config = {}) =>
      axios.post(url, body, config),
    patch: (url: string, body: Body, config = {}) =>
      axios.patch(url, body, config),
    put: (url: string, body: Body, config = {}) => axios.put(url, body, config),
  };
};

export default api(axiosInstance);
