import { Card, CardBody, Image, Skeleton, SkeletonText } from "@chakra-ui/react";

function GameCardSkleton(){
  return (
      
      <Card  width="400px"  borderRadius={10} overflow="hidden">
        <Skeleton height="300px" >
          <CardBody>
              <SkeletonText/>
          </CardBody>
        </Skeleton>  
      </Card>      
  )
};

export default GameCardSkleton;
