import { useEffect, useState} from "react";
import apiClient from "../services/apiClient";
import useGame from "../hooks/useGame";
import { Text } from "@chakra-ui/react";
import { AxiosError, CanceledError } from "axios";

function GameGrid(){

   const {games,error} = useGame();
    if(error)
      return <>{error && <Text color="red">{error}</Text>}</>

    return<>
      <ul>
        {games.map(game => <li key={game.id}>{game.name}</li>)}
      </ul>
    </>
  
};

export default GameGrid;

