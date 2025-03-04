import { HStack, Input } from '@chakra-ui/react'
import React from 'react'
import { InputGroup } from '../ui/input-group'
import { BsSearch } from 'react-icons/bs'

const SearchInput = () => {
  return (
    <HStack gap={10} width="full">
    <InputGroup width='100%'>
        <Input borderRadius={20} placeholder='Search games...'
    variant='flushed'></Input>
    </InputGroup>
 
    </HStack>
    
  )
}

export default SearchInput