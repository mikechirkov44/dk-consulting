import axios from "axios";

const BASE_URL = "http://31.31.192.57:8000"

const http = axios.create({
    baseURL: BASE_URL
});



export default http;
