import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:9000",
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  (config) => {
    return config;
  },
  (err) => {
    if (err.response) {
      err.message = err.response.statusText;
    }
    return Promise.reject(err);
  }
);

export default instance;
