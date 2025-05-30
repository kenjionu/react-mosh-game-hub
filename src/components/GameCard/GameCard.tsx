import { Game } from '@/hooks/useGames'
import { Card, Heading, HStack, Image } from '@chakra-ui/react'
import PlatformIconList from '../PlatformIconList/PlatformIconList';
import CriticScore from '../CriticScore/CriticScore';
import getCroppedImageUrl from '../../services/image-url';
import Emoji from '../Emoji/Emoji';

interface Props {
    game: Game
}
const GameCard = ({game}: Props) => {
  return (
    <Card.Root width='300px' borderRadius={10} overflow='hidden' >
        <Image src={getCroppedImageUrl(game.background_image)}/>
        <Card.Body>
            <HStack justifyContent='space-between' marginBottom={3}>
              <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}/>
              <CriticScore score={game.metacritic}></CriticScore>
            </HStack>
            <Heading fontSize='2xl'>{game.name}<Emoji rating={game.rating_top}/></Heading>
        </Card.Body>
    </Card.Root>
  )
}

export default GameCard