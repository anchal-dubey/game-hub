import { Platform } from "./useGame";
import ApiClient from "../services/apiClient";
import { useQuery } from "@tanstack/react-query";


const fetchPlatforms = new ApiClient<Platform>('/platforms/lists/parents');

const usePlatforms = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: fetchPlatforms.getAll,
  });

export default usePlatforms;
