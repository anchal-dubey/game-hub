import { HStack, List, ListItem,Image,Text, Button } from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import OptimizeURL from "../services/OptimiszeURL";
import GenreListSkeleton from "./GenreListSkeleton";



interface Props{
  selectedGenre: (Genre:Genre) => void;
}

function GenreList({selectedGenre}:Props){
    const {data,isLoading} = useGenre(null);
    const genreSkeleton = [1,2,3,4,5,6,7,8,10,11,12,13,14]
    
  return (
        <>
          {isLoading && genreSkeleton.map(val => <GenreListSkeleton key={val}/>)}
          <List>
          {data.map((genre)=> (
            <ListItem key={genre.id} paddingY='8px'>
                    <HStack >
                      <Image boxSize='32px' borderRadius={8} src={OptimizeURL(genre.image_background)}/>
                      <Button variant='link' onClick={()=>selectedGenre(genre)} fontSize="large">{genre.name}</Button>
                  </HStack>
              </ListItem>
          ))}
        </List>
        </>
  )
};

export default GenreList;
