import axios from "axios";

const api = axios.create({
    baseURL: "http://192.168.31.122:3000"
})


export default api