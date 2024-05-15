import useGame, { Game } from "../hooks/useGame";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";


interface Props{
    gameQuery:GameQuery
}

function GameGrid({gameQuery}:Props){
   const {data,error,isLoading} = useGame(gameQuery);
   const skeleton = [1,2,3,4,5,6,7,8]
   
   return<>
    {error && <Text color="red">{error.message}</Text>}
    <SimpleGrid 
         columns={{sm:1,xl:4,lg:3,md:2}}
         spacing={3}
         padding="10px"
          >
         {isLoading && skeleton.map((skeleton) => <GameCardContainer key={skeleton}>
             <GameCardSkleton />
         </GameCardContainer>)}
        {data?.results.map((game) =>(
             <GameCardContainer key={game.id}>
                 <GameCard  game={game}/>
             </GameCardContainer>
             
             ))}
    </SimpleGrid>
      
      
    </>
  


};

export default GameGrid;

