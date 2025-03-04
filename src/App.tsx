import { Box, Grid, GridItem, HStack } from "@chakra-ui/react";
import Navbar from "./components/NavBar/NavBar";
import GameGrid from "./components/GameGrid/GameGrid";
import GenreList from "./components/GenreList/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector/SortSelector";


export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)
  
  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}
    templateColumns={{
      base: '1fr',
      lg: '200px 1fr'
    }}>
        <GridItem area='nav' >
          <Navbar />
        </GridItem>
        <GridItem area='aside' paddingX={5}>
          <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}/>
        </GridItem>
        <GridItem area='main'>
          <Box paddingLeft={2}>
            <HStack spaceX={5} paddingLeft={2} marginBottom={8}>
              <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})}/>
              <SortSelector 
              sortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder})} />
            </HStack>
          <GameGrid gameQuery={gameQuery}/>
          </Box>
        </GridItem>

    </Grid>
  )
}
export default App;