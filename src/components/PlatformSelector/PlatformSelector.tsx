import usePlatforms from '../../hooks/usePlatforms';
import { Box, Button, MenuContent, MenuItem, MenuItemCommand, MenuRoot, MenuTrigger } from '@chakra-ui/react'
import { LuArrowRightFromLine, LuChevronsRight, LuScissors } from 'react-icons/lu'

const PlatformSelector = () => {
    const { data, error } = usePlatforms();

    if (error) return null;
    return (
        <MenuRoot>
            <MenuTrigger asChild>
                <Button variant="outline" size="sm">
                    Platforms <LuChevronsRight />
                </Button>
            </MenuTrigger>
            <MenuContent>
                {data.map(platform => (
                    <MenuItem key={platform.id} value="cut" valueText="cut">

                        <Box flex="1">{platform.name}</Box>
                    </MenuItem>
                ))}
            </MenuContent>
        </MenuRoot>
    )
}

export default PlatformSelector