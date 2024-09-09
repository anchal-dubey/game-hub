import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  onSelectePlatform: (platform?:number) => void;
  selectedPlatformId?:number ;
}

function PlatformSelector({ selectedPlatformId, onSelectePlatform }: Props) {
  const { data, error } = usePlatforms();
  const selectedplatform = data?.results.find((data) => data.id ===selectedPlatformId)
  if (error) { return null; }
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedplatform?.name || 'Platfroms'}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => <MenuItem onClick={() => onSelectePlatform(platform.id)} key={platform?.id}>{platform?.name}</MenuItem>)}
      </MenuList>
    </Menu>
  )
};

export default PlatformSelector;
