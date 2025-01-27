import { HStack, Icon, Text } from "@chakra-ui/react";
import { Platform } from "../hooks/useGame";
import {FaWindows,FaLinux,FaPlaystation,FaApple,FaAndroid, FaXbox} from 'react-icons/fa';
import {MdPhoneIphone} from 'react-icons/md';
import {SiNintendo} from 'react-icons/si';
import {BsGlobe} from 'react-icons/bs';
import { IconType } from "react-icons";


interface Props{
    platforms:Platform[]
}

function PlatformIconList({platforms}:Props){
    const iconMap:{[key:string]: IconType} ={
        pc:FaWindows,
        playstation:FaPlaystation,
        xbox:FaXbox,
        ios:MdPhoneIphone,
        web:BsGlobe,
        nintendo: SiNintendo,
        mac:FaApple,
        linux:FaLinux,
        android:FaAndroid
    }
  return (
    <HStack marginY={2}>
    {platforms.map((platform)=> <Icon key={platform.id} color="gray.500" as={iconMap[platform.slug]}/>)}
    </HStack>
  )
};

export default PlatformIconList;
