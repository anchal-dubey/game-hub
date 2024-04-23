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
    parent_platforms:{platform:Platform}[]
}




interface GamesData{
    count:number;
    results:Game[];
}


function useGame(){
    const [games,SetGame]= useState<Game[]>([]);
    const [error,setError] = useState("");
    const controller = new AbortController();
    
    useEffect(()=>{
        apiClient.get('/games',{signal:controller.signal})
        .then(resp=>SetGame(resp.data.results))
        .catch(err => {
            if(err instanceof CanceledError)
            setError(err.message)}
        );
    },[]);
    
    return {games,error}
};

export default useGame;


