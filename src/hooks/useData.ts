import apiClients from "../services/api-clients";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface FetchResponse<T> {
    count: number;
    results: T[];
}


const useData = <T>(endpoint: string) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

      useEffect(() => {
                const controller = new AbortController()
                setIsLoading(true);


                apiClients.get<FetchResponse<T>>(endpoint, {signal: controller.signal})
                .then((res) => {
                    setData(res.data.results);
                    setIsLoading(false)
                })
                .catch((err) => {
                    if(err instanceof CanceledError) return;
                    setError(err.message)})
;
                return () => controller.abort();
            }, [])

    return {data, error, isLoading};
}

export default useData;