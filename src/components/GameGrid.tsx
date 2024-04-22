import { useEffect, useState} from "react";
import apiClient from "../services/apiClient";


interface Game{
    id:number;
    name:string;
    background_image:string
}

interface GamesData{
    count:number;
    results:Game[];
}

function GameGrid(){

    const [games,SetGame]= useState<Game[]>([]);
    const [error,setError] = useState('');
 
    useEffect(()=>{
        apiClient.get('/games')
        .then(resp=>SetGame(resp.data.results))
        .catch(err => setError(err.message));
    },[]);



    return<>
      <ul>
        {games.map(game => <li key={game.id}>{game.name}</li>)}
      </ul>
    </>
  
};

export default GameGrid;

