import http from "../http";

const articlesService = {
    getArticles: async ()=> {
        const { data } = await http.get("/api/materials/");
        return data;
    },
}


export default articlesService
