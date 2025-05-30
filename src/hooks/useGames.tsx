import { GameQuery } from "@/App";
import {useQuery} from "@tanstack/react-query";
import {FetchResponse} from "../services/api-clients.ts";
import {Platform} from "../hooks/usePlatforms.ts";
import APIClient from "../services/api-clients.ts";

const apiClient = new APIClient<Game>('/games');

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
        queryFn: () =>
            apiClient.getAll({
                params: {
                    genres: gameQuery?.genre?.id,
                    parent_platforms: gameQuery.platform?.id,
                    ordering: gameQuery.sortOrder,
                    search: gameQuery.searchText
                }
            })



})
     

export default useGames;