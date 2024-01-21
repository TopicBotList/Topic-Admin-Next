import { Button, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { AddRounded, HomeOutlined, LoginRounded } from "@mui/icons-material";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React from 'react';

export default function NotFound(){
    const router = useRouter()
    return(<>
    <VStack h={'100vh'} w={'100vw'} justifyContent={'center'}>
        <VStack bg={'whiteAlpha.50'} h={'80vh'} w={'100vw'} justifyContent={'center'}>
            <Heading color={'brandColor.400'} fontSize={'8xl'}>404</Heading>
            <Text color={'whiteAlpha.700'} fontSize={'xl'}>Yo.. Are you lost? This page doesn&apos;t exist, or has been moved.</Text>
            <HStack mt={'20px !important'}>
                <Button onClick={()=> router.push('/')} leftIcon={<HomeOutlined/>} colorScheme={'brandColor'}>Home</Button>
                {Cookies.get('token') ?
                <Button onClick={()=> router.push('/add')} leftIcon={<AddRounded/>}>Add Server</Button>
                :
                <Button onClick={()=> router.push(`${process.env.apiUrl}/login?branch=${process.env.NEXT_PUBLIC_BRANCH}`)} leftIcon={<LoginRounded/>}>Login</Button>
                }
            </HStack>
        </VStack>
    </VStack>
    </>)
}