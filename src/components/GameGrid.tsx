import useGame from "../hooks/useGame";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";

function GameGrid(){
   const {games,error} = useGame();
   
   if(error)
      return <>{error && <Text color="red">{error}</Text>}</>

    return<>
    <SimpleGrid columns={{sm:1,xl:4,lg:3,md:3}} spacing={10} padding="10px" >
        {games.map(game => <GameCard key={game.id} game={game}/>)}
    </SimpleGrid>
      
      
    </>
  


};

export default GameGrid;

