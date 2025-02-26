import apiClients from "../services/api-clients";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface Genre {
    id: number;
    name: string;
}

interface FetchGenresResponse {
    count: number;
    results: Genre[];
}


const useGenres = () => {
    const [genres, setGenre] = useState<Genre[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

      useEffect(() => {
                const controller = new AbortController()
                setIsLoading(true);


                apiClients.get<FetchGenresResponse>('/genres', {signal: controller.signal})
                .then((res) => {
                    setGenre(res.data.results);
                    setIsLoading(false)
                })
                .catch((err) => {
                    if(err instanceof CanceledError) return;
                    setError(err.message)})
;
                return () => controller.abort();
            }, [])

    return {genres, error, isLoading};
}

export default useGenres;