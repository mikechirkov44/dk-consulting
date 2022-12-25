import axios from "axios";

const BASE_URL = "http://www.dk-consult.ru:8000";

const articles = axios.create({
    baseURL: BASE_URL,
});

const articlesService = {
    getArticles: async (payload) => {
        const token = localStorage.getItem("jwt");
        console.log(token, "inservice");
        if (token) {
            const { data } = await articles.get("/api/materials/", {
                headers: { Authorization: `Token ${token}` },
            });
            return data;
        }
    },
};

export default articlesService;
