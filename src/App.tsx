import { Box, Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/NavBar/NavBar";
import GameGrid from "./components/GameGrid/GameGrid";
import GenreList from "./components/GenreList/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector/PlatformSelector";
import { Platform } from "./hooks/useGames";



function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)
  const [selectedPlatform, setPlatform] = useState<Platform | null>(null);
  
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
          <GenreList selectedGenre={selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)}/>
        </GridItem>
        <GridItem area='main'>
          <Box paddingLeft={2}>
          <PlatformSelector selectedPlatform={selectedPlatform} onSelectPlatform={(platform) => setPlatform(platform)}/>
          <GameGrid selectedPlatform={selectedPlatform} selectedGenre={selectedGenre}/>
          </Box>
        </GridItem>

    </Grid>
  )
}
export default App;