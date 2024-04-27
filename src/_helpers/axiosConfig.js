import axios from "axios";

const urlAPI = axios.create({
  baseURL: "https://nodejs-api-noutbasket.onrender.com",
});

export default urlAPI;
