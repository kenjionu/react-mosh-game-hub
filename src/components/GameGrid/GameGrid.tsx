
import useGames from '../../hooks/useGames';
import { SimpleGrid, Text } from '@chakra-ui/react';
import GameCard from '../GameCard/GameCard';
import GameCardSkeleton from '../GameCardSkeleton/GameCardSkeleton';
import GameCardContainer from '../GameCardContainer/GameCardContainer';


const GameGrid = () => {
  const {data, error, isLoading} = useGames()
  const skeletons = [1, 2, 3, 4, 5, 6];

  {error && <Text>{error}</Text>}

  return (
      <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4}} 
      padding="10px"
      spaceX={6}
      spaceY={6}>
        {isLoading && 
          skeletons.map((skeleton) => 
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton key={skeleton} />
          </GameCardContainer>)} 
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard key={game.id} game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
  )
}

export default GameGrid;