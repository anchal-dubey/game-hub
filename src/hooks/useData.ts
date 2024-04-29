import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { AxiosError, AxiosRequestConfig, CanceledError } from "axios";

interface FetchResponse<T>{
    count:number;
    results:T[]
}

function useData<T>(endpont:string,requestConfig?:AxiosRequestConfig,deps?:any[]){
    const [data,SetData]= useState<T[]>([]);
    const [error,setError] = useState("");
    const [isLoading,setIsLoading] = useState(false);
    const controller = new AbortController();
    
    useEffect(()=>{
        setIsLoading(true);
        apiClient.get<FetchResponse<T>>(endpont,{signal:controller.signal, ...requestConfig})
        .then(resp=>{
            SetData(resp.data.results)
            setIsLoading(false)
        })
        .catch(err => {
            if(err instanceof CanceledError)
            setError(err.message)
            setIsLoading(false)
        }
            
        );
    },deps?[...deps]:[]);
    
    return {data,isLoading,error}
};

export default useData;


