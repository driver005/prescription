import { Box, List, ListIcon, ListItem, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { BsCheck } from 'react-icons/bs'
import ButtonComponent from '../Button'

const CardItem = ({ label, patient, doctor, insurance, pharmacist, children }) => {
    return (

        <Box
            maxW={'300px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'2xl'}
            rounded={'md'}
            my={6}
            overflow={'hidden'}>
            <Stack
                textAlign={'center'}
                p={6}
                color={useColorModeValue('gray.800', 'white')}
                align={'center'}>
                <Text
                    fontSize={'sm'}
                    fontWeight={500}
                    bg={useColorModeValue('green.50', 'green.900')}
                    p={2}
                    px={3}
                    color={'green.500'}
                    rounded={'full'}>
                    {label}
                </Text>
            </Stack>

            <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
                <List spacing={3} mb={3}>
                    <ListItem>
                        <ListIcon as={BsCheck} color="green.400" />
                        Patient: {patient}
                    </ListItem>
                    <ListItem>
                        <ListIcon as={BsCheck} color="green.400" />
                        Doctor: {doctor}
                    </ListItem>
                    <ListItem>
                        <ListIcon as={BsCheck} color="green.400" />
                        Insurance: {insurance}
                    </ListItem>
                    <ListItem>
                        <ListIcon as={BsCheck} color="green.400" />
                        Pharmacist: {pharmacist}
                    </ListItem>
                </List>
                {children}
            </Box>
        </Box>

    )
}

export default CardItem