import { Box, Flex, FormControl, FormHelperText, FormLabel, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import ButtonComponent from '../Button'
import {
    AutoComplete,
    AutoCompleteInput,
    AutoCompleteItem,
    AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";

const Request = () => {
    const countries = [
        "nigeria",
        "japan",
        "india",
        "united states",
        "south korea",
    ];
    return (
        <Box
            w={'100%'}
            h={'50vh'}
            align={'center'}
            justify={'center'}
        >
            <Box
                maxW={'300px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'md'}
                my={6}
            >
                <Stack
                    textAlign={'center'}
                    p={6}
                    color={useColorModeValue('gray.800', 'white')}
                    align={'center'}>
                    <Text
                        fontSize={'sm'}
                        fontWeight={500}
                        bg={useColorModeValue('blue.50', 'blue.900')}
                        p={2}
                        px={3}
                        color={'blue.500'}
                        rounded={'full'}
                    >
                        Request prescription
                    </Text>
                    <Flex pt="4" justify="center" align="center" w="full">
                        <FormControl w="60">
                            <FormLabel>Olympics Soccer Winner</FormLabel>
                            <AutoComplete openOnFocus>
                                <AutoCompleteInput variant="filled" />
                                <AutoCompleteList>
                                    {countries.map((country, cid) => (
                                        <AutoCompleteItem
                                            key={`option-${cid}`}
                                            value={country}
                                            textTransform="capitalize"
                                        >
                                            {country}
                                        </AutoCompleteItem>
                                    ))}
                                </AutoCompleteList>
                            </AutoComplete>
                            <FormHelperText>Who do you support.</FormHelperText>
                        </FormControl>
                    </Flex>
                    <ButtonComponent label={"Request"} />
                </Stack>




            </Box>
        </Box>
    )
}

export default Request