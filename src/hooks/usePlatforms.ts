import {useQuery} from "@tanstack/react-query";
import platforms from "../data/platforms.ts";
import APIClient from "../services/api-clients.ts";

const apiClients = new APIClient<Platform>('/platforms/lists/parents')

export interface Platform{
    id: number;
    name: string;
    slug: string;
}


const usePlatforms = () => {
    return useQuery({
        queryKey: ["platforms"],
        queryFn: apiClients.getAll,
        staleTime: 24 * 60 * 60 * 1000,
        initialData: { count: platforms.length, results: platforms},
    });
}

export default usePlatforms;