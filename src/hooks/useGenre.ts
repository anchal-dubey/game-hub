import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { AxiosError, CanceledError } from "axios";
import useData from "./useData";

export interface Genre{
    id:number;
    name: string;
    slug: string;
    games_count:number;
    image_background:string
}



const useGenre = (selectedGenre:Genre|null) => useData<Genre>('/genres',{params:{genres:selectedGenre?.id}},[selectedGenre?.id]);

export default useGenre;


