import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/NavBar/NavBar";
import GameGrid from "./components/GameGrid/GameGrid";



function App() {

  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}>
        <GridItem area='nav' >
          <Navbar />
        </GridItem>
        <GridItem area='aside' display={{ base: "none", lg: "block" }}>Aside</GridItem>
        <GridItem area='main'>
          <GameGrid />
        </GridItem>

    </Grid>
  )
}
export default App;