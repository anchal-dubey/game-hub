import useGame from "../hooks/useGame";
import { HStack, SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkleton from "./GameCardSkeleton";

function GameGrid(){
   const {games,error,isLoading} = useGame();
   const skeleton = [1,2,3,4,5,6,7,8]
   
   return<>
    {error && <Text color="red">{error}</Text>}
    <SimpleGrid 
         columns={{sm:1,xl:4,lg:3,md:3}}
         spacing={10}
         padding="10px" >
         {isLoading && skeleton.map((skeleton) => <GameCardSkleton key={skeleton}/>)}
        {games.map((game) =>(
             <GameCard key={game.id} game={game}/>
             
             ))}
    </SimpleGrid>
      
      
    </>
  


};

export default GameGrid;

