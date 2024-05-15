import ApiClient from "../services/apiClient";
import { GameQuery } from "../App";
import { useQuery } from "@tanstack/react-query";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
}

const fetchGame = new ApiClient<Game>('/games');

const useGame = (gameQuery: GameQuery) => useQuery({
    queryKey: [gameQuery],
    queryFn: () =>
        fetchGame.getAll( {
            params: {
                genres: gameQuery.genre?.id,
                platforms: gameQuery.platform?.id,
                ordering: gameQuery.sortOrder,
                search: gameQuery.searchText
            }
        }),

})

export default useGame;


