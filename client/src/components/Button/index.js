import React from 'react'

import {
    Button,
} from '@chakra-ui/react';

const ButtonComponent = ({ label, onClick = function () { }, color = 'blue.400', hoverColor = 'blue.500', width = "full", type = "button" }) => {
    return (
        <Button
            bg={color}
            w={width}
            type={type}
            onClick={onClick}
            color={'white'}
            _hover={{
                bg: hoverColor,
            }}>
            {label}
        </Button>
    )
}

export default ButtonComponent