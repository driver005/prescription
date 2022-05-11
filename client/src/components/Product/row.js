import { Button, Flex, Icon, Td, Text, Tr, useColorModeValue } from '@chakra-ui/react';
import React from 'react'
import { IoIosClose } from 'react-icons/io';

function Row({ name, price, amount, index, handelRemoveRow }) {
    const textColor = useColorModeValue("gray.700", "white");
    return (
        <Tr>
            <Td minWidth={{ sm: "250px" }} pl="0px">
                <Flex alignItems="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
                    <Text
                        fontSize="md"
                        color={textColor}
                        fontWeight="bold"
                        minWidth="100%"
                    >
                        {name}
                    </Text>
                </Flex>
            </Td>

            <Td>
                <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
                    {price}
                </Text>
            </Td>
            <Td>
                <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
                    {amount}
                </Text>
            </Td>
            <Td>
                <Button p="0px" bg="transparent" onClick={() => handelRemoveRow(index)}>
                    <Icon as={IoIosClose} color="red.400" cursor="pointer" boxSize={10} />
                </Button>
            </Td>
        </Tr>
    );
}

export default Row