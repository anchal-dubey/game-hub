import ApiClient from "../services/apiClient";
import { GameQuery } from "../App";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

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

const fetchGame = new ApiClient<Game>("/games");

const useGame = (gameQuery: GameQuery) =>
  useInfiniteQuery({
    queryKey: [gameQuery],
    queryFn: ({ pageParam }) =>
      fetchGame.getAll({
        params: {
          genres: gameQuery.genre?.id,
          platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam
        },
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => {
      return lastPage.count ? pages.length + 1 : undefined;
    },
  });

export default useGame;
