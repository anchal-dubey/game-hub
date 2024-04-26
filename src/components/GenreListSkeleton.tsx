import { HStack, List, ListItem, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

function GenreListSkeleton(){
  return (
    <>
      <List>
        <ListItem  paddingY='8px'>
                <HStack>
                    <SkeletonCircle boxSize='32px' borderRadius={8}/>
                    <SkeletonText width='40px' noOfLines={1} skeletonHeight={2}/>
                </HStack>
        </ListItem>
      </List>
    </>
  )
};

export default GenreListSkeleton;
