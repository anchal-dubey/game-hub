import axios from "axios";

const apiClient = axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"825f84e34b974f6793cac88d168c2e52"
    }
})

export default apiClient;