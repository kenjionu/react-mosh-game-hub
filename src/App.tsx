import { Box, Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/NavBar/NavBar";
import GameGrid from "./components/GameGrid/GameGrid";
import GenreList from "./components/GenreList/GenreList";



function App() {

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
          <GenreList />
        </GridItem>
        <GridItem area='main'>
          <Box paddingLeft={2}>

          <GameGrid />
          </Box>
        </GridItem>

    </Grid>
  )
}
export default App;