import { HStack, Switch, Text } from '@chakra-ui/react'
import { useColorMode } from '../ui/color-mode'

const ColorModeSwitch = () => {
    const { toggleColorMode, colorMode } = useColorMode()
  return (
    <HStack>
        <Switch.Root
        colorScheme='green'
        checked={colorMode === 'dark'}
        onCheckedChange={toggleColorMode}
        >
        <Switch.HiddenInput />
        <Switch.Control>
        <Switch.Thumb/>
        </Switch.Control>
        <Switch.Label>Dark Mode</Switch.Label>
      </Switch.Root>
    </HStack>
  )
}

export default ColorModeSwitch