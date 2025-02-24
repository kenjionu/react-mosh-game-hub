import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'b04e504ebe9e4275a7f205feeacfa2c1'

    }
})