import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";

interface Props{
  onSelectSortOrder: (order:string) => void;
  selectedOrder:string;
}



function SortSeletor({onSelectSortOrder,selectedOrder}:Props){
    const sortOrders = [
      {key:'',value:'Relevence'},
      {key:'-name',value:'Name'},
      {key:'-released',value:'Release date'},
      {key:'-added',value:'Date Added'},
      {key:'-rating',value:'Avrage Rating'},
      {key:'-metacritic',value:'Popularity'},
      
    ]

    const currentSelectedOrder = sortOrders.find((order)=> selectedOrder === order.key)
   
  return (
    <Menu>
    <MenuButton as={Button} rightIcon={<BsChevronDown />}>
     Sorted By: {currentSelectedOrder?.value || 'Relevence'}
    </MenuButton>
    <MenuList>
      {sortOrders.map(order => <MenuItem onClick={() => onSelectSortOrder(order.key)} key={order.key} value={order.value}> {order.value}</MenuItem>)}
    </MenuList>
  </Menu>
  )
};

export default SortSeletor;
