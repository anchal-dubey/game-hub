import { HStack, List, ListItem, Image, Text, Button, Heading } from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import OptimizeURL from "../services/OptimiszeURL";
import GenreListSkeleton from "./GenreListSkeleton";



interface Props {
  onSelectedGenre: (Genre: number) => void;
  selectedGenre?:number ;
}

function GenreList({ selectedGenre, onSelectedGenre }: Props) {
  const { data, isLoading } = useGenre(null);
  const genreSkeleton = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14]

  if (isLoading) return <>{genreSkeleton.map(val => <GenreListSkeleton key={val} />)}</>
  return (
    <>
      <Heading  fontSize='22px' marginBottom={3}>Genre</Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY='8px'>
            <HStack spacing={3}>
              <Image boxSize='32px' borderRadius={8} src={OptimizeURL(genre.image_background)} />
              <Button fontWeight={genre.id === selectedGenre ? 'bold' : 'normal'} variant='link' onClick={() => onSelectedGenre(genre.id)} fontSize="md" whiteSpace="wrap">{genre.name}</Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  )
};

export default GenreList;
