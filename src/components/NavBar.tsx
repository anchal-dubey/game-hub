import { HStack, Image, Text } from "@chakra-ui/react"
import logo from "../assets/logo.webp" ;
import ColourModeSwitch from "./ColourModeSwith";
function NavBar(){
  return (
    <HStack justifyContent='space-between' padding="10px">
      <Image src={logo} boxSize="60px"/> {/*we have to pass object insted of path of the asset */}
      <ColourModeSwitch />
    </HStack>
  )
};

export default NavBar