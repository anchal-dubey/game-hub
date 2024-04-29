import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";

function SortSeletor(){
    const {data,error} = usePlatforms();
    if(error){return null;}
  return (
    <Menu>
    <MenuButton as={Button} rightIcon={<BsChevronDown />}>
     Sorted By
    </MenuButton>
    <MenuList>
      <MenuItem>Relevence</MenuItem>
      <MenuItem>Date added</MenuItem>
      <MenuItem>Name</MenuItem>
      <MenuItem>Release date</MenuItem>
      <MenuItem>Popularity</MenuItem>
      <MenuItem>Avrage rating</MenuItem>
    </MenuList>
  </Menu>
  )
};

export default SortSeletor;
