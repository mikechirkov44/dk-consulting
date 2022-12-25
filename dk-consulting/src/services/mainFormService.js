import axios from "axios";

const BASE_URL = "http://www.dk-consult.ru:8000"

const jwt = localStorage.getItem("jwt")

const mainForm = axios.create({
  baseURL: BASE_URL,
  headers: { 'Authorization': `Token ${jwt}` }

});


const mainFormService = {
  postForm: async (payload) => {
    const { data } = await mainForm.post("/api/customers/", payload);
    return data;
  },
};


export default mainFormService
