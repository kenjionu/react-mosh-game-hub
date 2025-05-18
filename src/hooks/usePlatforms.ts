import {useQuery} from "@tanstack/react-query";
import apiClients, {FetchResponse} from "../services/api-clients.ts";
import platforms from "../data/platforms.ts";

export interface Platform{
    id: number;
    name: string;
    slug: string;
}


const usePlatforms = () => {
    return useQuery({
        queryKey: ["platforms"],
        queryFn: () => apiClients
            .get<FetchResponse<Platform>>('/platforms/lists/parents')
            .then(res => res.data),
        staleTime: 24 * 60 * 60 * 1000,
        initialData: {count: platforms.length, results: platforms},
    });
}

export default usePlatforms;