import { message } from "antd";
import axios, {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
} from "axios";
import { store } from "../../store";
const http: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 10000,
});

// Request Interceptor

http.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const { token } = store.getState().authSlice;

  if (token) {
    config.headers[`Authorization`] = `Bearer ${token}`;
  }
  return config;
});

// Response Interceptor
http.interceptors.response.use((response: AxiosResponse) => {
  // console.log("response", response)
  const res = response.data;

  if (res.code != 200) {
    message.error(res.code + ": " + res.message);

    return Promise.reject(new Error(res.message));
  }
  return response.data;
});

export default http;
