import { Flex, HStack, Image, Text } from "@chakra-ui/react"
import logo from "../assets/logo.webp" ;
import ColourModeSwitch from "./ColourModeSwith";
import SearchInput from "./SearchInput";

interface Props{
  onSearch:(searchText:string) => void ;
}
function NavBar({onSearch}:Props){
  return (
      <HStack padding='10px'>
        <Image src={logo} boxSize="60px"/> {/*we have to pass object insted of path of the asset */}
        <SearchInput onSearch={onSearch}/>
        <ColourModeSwitch />
      </HStack>
  )
};

export default NavBar