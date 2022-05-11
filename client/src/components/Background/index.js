import React from 'react'
import {
    Flex,
    useColorModeValue,
} from '@chakra-ui/react';

const Background = ({ children }) => {
    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}
        >
            {children}
        </Flex>
    )
}

export default Background