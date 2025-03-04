import { Platform } from '@/hooks/useGames';
import usePlatforms from '../../hooks/usePlatforms';
import { Box, Button, MenuContent, MenuItem, MenuItemCommand, MenuRoot, MenuTrigger } from '@chakra-ui/react'
import { LuArrowRightFromLine, LuChevronsRight, LuScissors } from 'react-icons/lu'

interface Props {
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
    const { data, error } = usePlatforms();

    if (error) return null;
    return (
        <MenuRoot>
            <MenuTrigger asChild>
                <Button variant="outline" size="sm">
                    {selectedPlatform?.name || 'Platforms'} <LuChevronsRight />
                </Button>
            </MenuTrigger>
            <MenuContent>
                {data.map(platform => (
                    <MenuItem
                    onClick={() => onSelectPlatform(platform)}
                    key={platform.id} value="cut" valueText="cut">

                        <Box flex="1">{platform.name}</Box>
                    </MenuItem>
                ))}
            </MenuContent>
        </MenuRoot>
    )
}

export default PlatformSelector