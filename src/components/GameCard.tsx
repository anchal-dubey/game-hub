import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGame";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import OptimizeURL from "../services/OptimiszeURL";


interface Props{
   game: Game;

}

function GameCard({game}:Props){
  return (
        <Card>
            <Image src={OptimizeURL(game.background_image)}/>
            <CardBody>
                <Heading fontSize={'2xl'} >{game.name}</Heading>
                <HStack justifyContent="space-between">
                <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}/>
                <CriticScore  score={game.metacritic}/>
                </HStack>
            </CardBody>
        </Card>
      
  )
};

export default GameCard;
