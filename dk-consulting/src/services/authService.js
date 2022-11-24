import http from "../http";

const authService = {
    register: async (payload)=> {
        const { data } = await http.post("/registr/", payload);
        return data;
    },

    login: async (payload)=> {
    const { data } = await http.post("/api-token-auth/", payload);
    return data;
    }
}


export default authService
