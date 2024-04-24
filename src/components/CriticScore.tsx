import { Badge } from "@chakra-ui/react";

interface Prop{
    score:number;
}


function CriticScore({score}:Prop){
  const color = score > 75 ? "green": score > 60 ? "yellow" : score > 50 ? "red":"";
    return (
    <>
      <Badge fontSize="14px" paddingX={2} borderRadius={4} colorScheme={color} >{score}</Badge>
    </>
  )
};

export default CriticScore;
