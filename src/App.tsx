import { Grid, GridItem, HStack, Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import { useState } from "react"
import { Genre } from "./hooks/useGenre"
import PlatformSelector from "./components/PlatformSelector"
import { Platform } from "./hooks/useGame"
import SortSeletor from "./components/SortSelector"
import SearchInput from "./components/SearchInput"


export interface GameQuery{
  genre:Genre|null;
  platform:Platform|null;
  sortOrder:string;
  searchText:string;
}

function App() {
  const [gameQuery,setGameQuery]=useState<GameQuery>({} as GameQuery);
  return <>
  <Grid templateAreas={
    {
      base: `"nav" "main"`,
      lg:`"nav nav" "aside main"`
    }
  }
  templateColumns={{
    base:'1fr',
    lg:'220px 1fr'
  }}
  >
    <GridItem area="nav">
      <NavBar onSearch={(searchText)=> setGameQuery({...gameQuery,searchText})}/>
    </GridItem>
      <Show above="lg">
        <GridItem area="aside"  paddingX={5}>
          <GenreList selectedGenre={gameQuery.genre} onSelectedGenre={(genre) => setGameQuery({...gameQuery,genre})}/>
            </GridItem>
      </Show>
    <GridItem area="main" >
      
      <HStack paddingLeft={2} marginBottom={5}>
        <PlatformSelector selectedPlatform={gameQuery.platform} onSelectePlatform={(platform) => setGameQuery({...gameQuery,platform})}/>
        <SortSeletor selectedOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery,sortOrder})}/>
      </HStack>
      <GameGrid  gameQuery={gameQuery} />
    </GridItem>
  </Grid>
  </>
}

export default App
