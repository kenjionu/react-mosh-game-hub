import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react';
import useGenres from '../../hooks/useGenres';
import getCroppedImageUrl from '../../services/image-url';

const GenreList = () => {
    const { data } = useGenres()
  return (
    <List.Root  paddingY='5px'>
        {data.map(genre => <ListItem paddingY='5px' listStyleType='none' key={genre.id}>
          <HStack>
            <Image 
            boxSize="32px"
            borderRadius={8} 
            src={getCroppedImageUrl(genre.image_background)} /> 
            <Text>
              {genre.name}
            </Text>
            </HStack>
          </ListItem>)}
    </List.Root>
  )
}

export default GenreList