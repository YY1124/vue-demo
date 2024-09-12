import axios from "../utils/request";
import path from './path';

const api = {
    // 产品详情
    getChanPing(){
        return axios.get(path.baseURl + path.chanPing)
    }

}

export default api;
