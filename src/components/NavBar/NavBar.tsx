import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../../assets/logo.webp';
import ColorModeSwitch from '../ColorModeSwitch/ColorModeSwitch';
//Single Responsability Principle
//This component is responsible for rendering the Navbar
const Navbar = () => {
  return (
    <HStack justifyContent='space-between' p={4} >
        <Image src={logo}  boxSize="60px" />
        <ColorModeSwitch />
    </HStack>
  )
}

export default Navbar