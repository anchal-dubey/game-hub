import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGame";

interface Props {
  onSelectePlatform: (platform: Platform | null) => void;
  selectedPlatform: Platform | null;
}

function PlatformSelector({ selectedPlatform, onSelectePlatform }: Props) {
  const { data, error } = usePlatforms();
  if (error) { return null; }
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || 'Platfroms'}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => <MenuItem onClick={() => onSelectePlatform(platform)} key={platform?.id}>{platform?.name}</MenuItem>)}
      </MenuList>
    </Menu>
  )
};

export default PlatformSelector;
