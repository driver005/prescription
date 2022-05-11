import { Flex, Grid, IconButton, Center, Text, useColorModeValue, chakra } from '@chakra-ui/react'
import React from 'react'
import CardItem from './item';



const CardContainer = ({ label, icon, noFound, children, onClick = function () { } }) => {
    // Chakra color mode
    const textColor = useColorModeValue("gray.800", "white");
    const bgButton = useColorModeValue("gray.200", "whiteAlpha.100");
    const brandText = useColorModeValue("blue.500", "white");

    return (
        <Flex
            flexDirection={'column'}
            fontWeight={'bold'}
            w={'100%'}
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'xl'}
            rounded={'md'}
            overflow={'hidden'}
            borderColor={'blue.400'}
            borderWidth={2}
            px={10}
            pt={5}
        >
            <Flex justify='space-between' align='center' mb='24px'>
                <Text fontSize='22px' mt='5px' color={textColor}>
                    {label}
                </Text>
                <IconButton
                    w='92px'
                    h='35px'
                    borderRadius='12px'
                    aria-label='Search database'
                    variant='no-hover'
                    bg={bgButton}
                    color={brandText}
                    icon={icon}
                    onClick={onClick}
                />
            </Flex>
            {noFound ?
                <Center h={"100%"}>
                    <chakra.h1 mb={12}>No found</chakra.h1>
                </Center>
                :
                <Grid gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))">
                    {children}
                </Grid>

            }
        </Flex>
    )
}

export default CardContainer