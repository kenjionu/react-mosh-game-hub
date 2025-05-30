
import useGames from '../../hooks/useGames';
import { SimpleGrid, Text } from '@chakra-ui/react';
import GameCard from '../GameCard/GameCard';
import GameCardSkeleton from '../GameCardSkeleton/GameCardSkeleton';
import GameCardContainer from '../GameCardContainer/GameCardContainer';
import { GameQuery } from '@/App';

interface Props {
  gameQuery: GameQuery

}

const GameGrid = ({gameQuery}: Props) => {
  const {data, error, isLoading} = useGames(gameQuery)
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error.message}</Text>;

  return (
      <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4}} 
      padding="10px"
      spaceX={6}
      spaceY={6}>
        {isLoading && 
          skeletons.map((skeleton) => 
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>)} 
        {data?.results.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard  game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
  )
}

export default GameGrid;