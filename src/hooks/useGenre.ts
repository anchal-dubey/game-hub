import ApiClient from "../services/apiClient";
import { useQuery } from "@tanstack/react-query";
import genreList from "../data/genreList";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

const fetchGenre = new ApiClient<Genre>("/genres");
const useGenre = (selectedGenre: Genre | null) =>
  useQuery({
    queryKey: selectedGenre?.id ? ["genre", selectedGenre?.id] : ["genre"],
    queryFn: () => fetchGenre.getAll({params:{
      id:selectedGenre?.id
    }}),
    initialData: genreList,
  });

export default useGenre;
