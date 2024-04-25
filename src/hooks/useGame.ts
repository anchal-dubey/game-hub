import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { AxiosError, CanceledError } from "axios";

export interface Platform{
    id:number;
    name:string;
    slug:string;
}

export interface Game{
    id:number;
    name:string;
    background_image:string;
    parent_platforms:{platform:Platform}[];
    metacritic:number;
}




interface GamesData{
    count:number;
    results:Game[];
}


function useGame(){
    const [games,SetGame]= useState<Game[]>([]);
    const [error,setError] = useState("");
    const [isLoading,setIsLoading] = useState(false);
    const controller = new AbortController();
    
    useEffect(()=>{
        setIsLoading(true);
        apiClient.get('/games',{signal:controller.signal})
        .then(resp=>{
            SetGame(resp.data.results)
            setIsLoading(false);
        })
        .catch(err => {
            if(err instanceof CanceledError)
            setError(err.message)
            setIsLoading(false)
        }
            
        );
    },[]);
    
    return {games,error,isLoading}
};

export default useGame;


