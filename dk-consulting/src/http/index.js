import axios from "axios";

const BASE_URL = "http://31.31.192.57:8000"

const http = axios.create({
    baseURL: BASE_URL
});

http.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem("jwt");
    config.headers = {
        ...config.headers,
        Authorization: `Bearer ${accessToken}`
    };
    return config;
});

export default http;
