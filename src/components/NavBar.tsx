import { HStack, Image, Text } from "@chakra-ui/react"
import logo from "../assets/logo.webp" ;
function NavBar(){
  return (
    <HStack>
      <Image src={logo} boxSize="60px"/> {/*we have to pass object insted of path of the asset */}
      <Text >Nav Bar</Text>
    </HStack>
  )
};

export default NavBar