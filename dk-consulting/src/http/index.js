import axios from "axios";

const BASE_URL = "http://www.dk-consult.ru:8000"

const http = axios.create({
    baseURL: BASE_URL
});



export default http;
