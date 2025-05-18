import axios, {AxiosRequestConfig} from "axios";

export interface FetchResponse <T> {
    count: number;
    results: T[];
}

const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'b04e504ebe9e4275a7f205feeacfa2c1'

    }
})

class APIClient<T> {
    endpoint: string;
    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = async(config: AxiosRequestConfig) => {
        return axiosInstance
            .get<FetchResponse<T>>
            (this.endpoint, config)
            .then(res => res.data);
    }
}

export default APIClient;