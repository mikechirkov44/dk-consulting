

import axios from "axios";

const BASE_URL = "http://31.31.192.57:8000"

const jwt = localStorage.getItem("jwt")

const articles = axios.create({
    baseURL: BASE_URL,
    headers: {'Authorization' : `Token ${jwt}` }

});


const articlesService = {
    getArticles: async (payload) => {
        const { data } = await articles.get("/api/materials/");
        return data;
    },
}


export default articlesService
