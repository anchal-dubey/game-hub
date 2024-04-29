import useGame, { Platform } from "../hooks/useGame";
import { HStack, SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenre";


interface Props{
    selectedGenre:Genre|null;
    selectedPlatform:Platform|null;
}

function GameGrid({selectedGenre,selectedPlatform}:Props){
   const {data,error,isLoading} = useGame(selectedGenre,selectedPlatform);
   const skeleton = [1,2,3,4,5,6,7,8]
   
   return<>
    {error && <Text color="red">{error}</Text>}
    <SimpleGrid 
         columns={{sm:1,xl:4,lg:3,md:2}}
         spacing={3}
         padding="10px"
          >
         {isLoading && skeleton.map((skeleton) => <GameCardContainer key={skeleton}>
             <GameCardSkleton />
         </GameCardContainer>)}
        {data.map((game) =>( 
             <GameCardContainer key={game.id}>
                 <GameCard  game={game}/>
             </GameCardContainer>
             
             ))}
    </SimpleGrid>
      
      
    </>
  


};

export default GameGrid;

