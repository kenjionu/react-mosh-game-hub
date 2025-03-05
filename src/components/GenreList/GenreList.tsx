import { Button, Heading, HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import useGenres, { Genre } from '../../hooks/useGenres';
import getCroppedImageUrl from '../../services/image-url';

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GenreList = ({onSelectGenre, selectedGenre}: Props) => {
  const { data, isLoading, error } = useGenres()

  if(error) return <div>Something went wrong</div>

  if(isLoading) return <Spinner />
  return (
    <>
    <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
    <List.Root>
        {data.map(genre => 
        <ListItem paddingY='5px' listStyleType='none' key={genre.id}>
          <HStack>
            <Image 
            boxSize="32px"
            borderRadius={8} 
            objectFit='cover'
            src={getCroppedImageUrl(genre.image_background)} /> 
            <Button 
            textAlign='left'
            whiteSpace='normal'
            fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal' 
            } onClick={() => onSelectGenre(genre)} 
            variant="plain" 
            fontSize="lg">
              {genre.name}
            </Button>
            </HStack>
          </ListItem>)}
    </List.Root>
    </>
  )
}

export default GenreList