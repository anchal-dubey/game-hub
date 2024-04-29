import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { useState } from "react";

function PlatformSelector(){
    const {data,error} = usePlatforms();
    const [selectedPlatform,setSelectedPlatform] = useState('');
    if(error)
      return null;
  return (
    <Menu>
    <MenuButton as={Button} rightIcon={<BsChevronDown />}>
      {selectedPlatform ? selectedPlatform:'Platforms'}
    </MenuButton>
    <MenuList>
      {data.map((platform) => <MenuItem onSelect={()=>setSelectedPlatform(platform.name)} key={platform.id}>{platform.name}</MenuItem>)}
    </MenuList>
  </Menu>
  )
};

export default PlatformSelector;
