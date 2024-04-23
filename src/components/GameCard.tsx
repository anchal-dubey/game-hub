import { Card, CardBody, Heading, Image, SimpleGrid } from "@chakra-ui/react";
import { Game } from "../hooks/useGame";

interface Props{
   game: Game ,
   key:number

}

function GameCard({game,key}:Props){
  return (
        <Card key={game.id} borderRadius={10} overflow="hidden">
            <Image src={game.background_image}/>
            <CardBody>
                <Heading fontSize={'xl'} >{game.name}</Heading>
            </CardBody>
        </Card>
      
  )
};

export default GameCard;
