import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../../assets/logo.webp';
import ColorModeSwitch from '../ColorModeSwitch/ColorModeSwitch';
import SearchInput from '../SearchInput/SearchInput';
//Single Responsability Principle
//This component is responsible for rendering the Navbar
const Navbar = () => {
  return (
    <HStack  p={4} >
        <Image src={logo}  boxSize="60px" />
        <SearchInput />
        <ColorModeSwitch />
    </HStack>
  )
}

export default Navbar