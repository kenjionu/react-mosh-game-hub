import { HStack, Image } from '@chakra-ui/react'
import logo from '../../assets/logo.webp';
import ColorModeSwitch from '../ColorModeSwitch/ColorModeSwitch';
import SearchInput from '../SearchInput/SearchInput';
//Single Responsability Principle
//This component is responsible for rendering the Navbar
interface Props {
  onSearch: (searchText: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
  return (
    <HStack  p={4} >
        <Image src={logo}  boxSize="60px" />
        <SearchInput onSearch={onSearch} />
        <ColorModeSwitch />
    </HStack>
  )
}

export default Navbar