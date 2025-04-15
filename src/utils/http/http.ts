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
  console.log("config headers:", config.headers);
  console.log("config", config.data);
  const { token } = store.getState().authSlice;

  if (token) {
    config.headers[`Authorization`] = `Bearer ${token}`;
  }
  return config;
});

http.interceptors.response.use(
  (response) => {
    console.log(`Response for ${response.config.url}:`, response.data);
    return response;
  },
  (error) => {
    console.error(`Error for ${error.config?.url}:`, error);
    return Promise.reject(error);
  }
);
// Response Interceptor
http.interceptors.response.use((response: AxiosResponse) => {
  console.log("response", response);
  const res = response.data;

  if (res.code != 200) {
    message.error(res.code + ": " + res.message);

    return Promise.reject(new Error(res.message));
  }
  return response.data;
});

export default http;
