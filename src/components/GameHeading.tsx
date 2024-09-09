import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props{
    gameQuery:GameQuery
}


function GameHeading({gameQuery}:Props){
  const heading = `${gameQuery.platformId ||''} ${gameQuery.genreId || ''} Games` 
    return <> <Heading marginBottom={3} as='h1'>{heading}</Heading></>

}

export default GameHeading;
