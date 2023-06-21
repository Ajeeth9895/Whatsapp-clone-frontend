import axios from "axios";

//backend base url
const instance = axios.create({
  baseURL: "https://whatsapp-clone-91y8.onrender.com",
});

export default instance;
