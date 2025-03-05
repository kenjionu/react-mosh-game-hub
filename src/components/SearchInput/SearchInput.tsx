import { HStack, Input } from '@chakra-ui/react'
import { useRef } from 'react'
import { InputGroup } from '../ui/input-group'

interface Props {
    onSearch: (searchText: string) => void;
}

const SearchInput = ({onSearch}: Props) => {
    const ref = useRef<HTMLInputElement>(null)

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if (ref.current) onSearch(ref.current.value);
        }}>
            <HStack gap={10} width="full">
                <InputGroup width='100%'>
                    <Input
                        ref={ref} 
                        borderRadius={20} placeholder='Search games...'
                        variant='flushed'></Input>
                </InputGroup>
            </HStack>
        </form>
    )
}

export default SearchInput;