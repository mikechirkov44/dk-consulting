import http from "../http";

const authService = {
  register: async (payload) => {
    const { data } = await http.post("/registr/", payload);
    return data;
  },

  login: async (payload) => {
    const { data } = await http.post("/api-token-auth/", payload);
    return data;
  },

  resetPassword: async (payload) => {
    const { data } = await http.post("/api/password_reset/", payload);
    return data;
  },

  resetPasswordConfirm: async (payload) => {
    const { data } = await http.post("/api/password_reset/confirm/", payload);
    return data;
  },
};


export default authService
