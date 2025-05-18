import { GameQuery } from "@/App";
import {useQuery} from "@tanstack/react-query";
import apiClients, {FetchResponse} from "../services/api-clients.ts";
import {Platform} from "../hooks/usePlatforms.ts";


export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform}[];
    metacritic: number;
    rating_top: number;
    rating: number;
}

const useGames = (gameQuery: GameQuery)=> useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
        queryFn: () => apiClients
            .get<FetchResponse<Game>>('/games', {
                params: {
                    genres: gameQuery?.genre?.id,
                    parent_platforms: gameQuery.platform?.id,
                    ordering: gameQuery.sortOrder,
                    search: gameQuery.searchText
                }
            })
            .then((res) => res.data),
            staleTime: 24 * 60 * 60 * 1000,



})
     

export default useGames;