import React from 'react'
import { Platform } from '../../hooks/useGames';
import { Text, Icon, HStack } from '@chakra-ui/react';
import { FaAndroid, FaApple, FaLinux, FaPlaystation, FaWindows, FaXbox } from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo, SiNintendo3Ds } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { IconType } from 'react-icons';
interface Props {
    platforms: Platform[]
}

const PlatformIconList = ({ platforms }: Props) => {
    const iconMap: { [key: string]: IconType} = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        ios: MdPhoneIphone,
        web: BsGlobe,
    }

  return (
    <>
        <HStack marginY={1}>
            {platforms.map((platform)=> (
                <Icon key={platform.id} color='gray.500' as={iconMap[platform.slug]}>{platform.name}</Icon>
            ))}
        </HStack>
    </>
  )
}

export default PlatformIconList