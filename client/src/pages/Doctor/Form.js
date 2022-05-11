import { Box, Heading, Stack, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import Background from '../../components/Background'
import ButtonComponent from '../../components/Button'
import InputComponent from '../../components/Input'

const Form = () => {
    return (
        <Background>
            <Stack
                spacing={4}
                w={'full'}
                maxW={'lg'}
                bg={useColorModeValue('white', 'gray.700')}
                rounded={'xl'}
                boxShadow={'lg'}
                p={6}
                my={12}
            >
                <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
                    Change Values
                </Heading>

                <InputComponent id={"test"} label={"Test:"} type={"text"} />
                <InputComponent id={"test"} label={"Test:"} type={"text"} />
                <InputComponent id={"test"} label={"Test:"} type={"text"} />
                <InputComponent id={"test"} label={"Test:"} type={"text"} />
                <InputComponent id={"test"} label={"Test:"} type={"text"} />
                <InputComponent id={"test"} label={"Test:"} type={"text"} />
                <InputComponent id={"test"} label={"Test:"} type={"text"} />
                <Stack spacing={6} direction={['column', 'row']}>
                    <ButtonComponent
                        label={"Cancel"}
                        color={'red.400'}
                        hoverColor={'red.500'}
                    />
                    <ButtonComponent
                        label={"Submit"}
                    />
                </Stack>
            </Stack>
        </Background>
    )
}

export default Form