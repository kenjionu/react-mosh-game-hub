import { Button, MenuContent, MenuItem, MenuRoot, MenuTrigger } from '@chakra-ui/react'
import React from 'react'

export const SortSelector = () => {
    return (
        <MenuRoot>
            <MenuTrigger asChild>
                <Button variant="outline" size="sm">
                    Order by: Relevance
                </Button>
            </MenuTrigger>
            <MenuContent>
                <MenuItem value='Relevance'>Relevance</MenuItem>
                <MenuItem value='Date Added'>Date Added</MenuItem>
                <MenuItem value='Name'>Name</MenuItem>
                <MenuItem value=''>Relevance</MenuItem>

            </MenuContent>
        </MenuRoot>
    )
}

export default SortSelector