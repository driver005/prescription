import { Flex, IconButton, Text, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import { IoIosAdd } from 'react-icons/io'
import ModalWrapper from '../Modal'
import Card from './Card'
import CardBody from './CardBody'
import CardHeader from './CardHeader'

const CustomCardWrapper = ({ children, label, modalChildren, modalLabel, isOpen, setIsOpen, handelOnClose, modalCloseLabel = "Create", width = '100%', ...rest }) => {
    const textColor = useColorModeValue("gray.800", "white");
    const bgButton = useColorModeValue("gray.200", "whiteAlpha.100");
    const brandText = useColorModeValue("blue.500", "white");

    return (
        <Card
            my="22px"
            overflowX={{ sm: "scroll", xl: "hidden" }}
            fontWeight={'bold'}
            minW={width}
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'xl'}
            rounded={'md'}
            overflow={'hidden'}
            borderColor={'blue.400'}
            borderWidth={2}
            px={10}
            py={5}
            height={'fit-content'}
        >
            <CardHeader as={Flex} justify='space-between' align='center' mb='24px'>
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
                    icon={<IoIosAdd size={25} />}
                    onClick={(() => setIsOpen(true))}
                />
                <ModalWrapper closeLabel={modalCloseLabel} isOpen={isOpen} label={modalLabel} onClose={handelOnClose}>
                    {modalChildren}
                </ModalWrapper>
            </CardHeader>
            <CardBody>
                {children}
            </CardBody>
        </Card>
    )
}

export default CustomCardWrapper