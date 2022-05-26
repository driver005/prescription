import { Box, Button, chakra, Flex, HStack, Link, useColorModeValue, useToast } from '@chakra-ui/react'
import React from 'react'

import { IoIosAdd } from 'react-icons/io'
import { useLocation, useNavigate } from 'react-router-dom';
import { logout } from '../../action/auth';

const Links = [];

const NavLink = ({ children }) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={'#'}>
        {children}
    </Link>
);

const Header = () => {
    const toast = useToast()
    const navigate = useNavigate();
    const location = useLocation();
    const textColor = useColorModeValue("purple.600", "white");

    const handleLogout = (e) => {
        logout(navigate).then((promis) => {
            if (promis?.message) {
                toast({
                    title: promis.message,
                    description: "Account error",
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                })
            } else {
                toast({
                    title: 'Successful Signed out',
                    description: "You successfully logged out of your account",
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                })
            }
        });
    }

    return (
        <chakra.header>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <HStack spacing={8} alignItems={'center'}>
                        <Box fontSize='22px' color={textColor} fontWeight={700}>Rezept</Box>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}>
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </HStack>
                    </HStack>
                    {location.pathname !== '/' &&
                        <Flex alignItems={'center'}>
                            <Button
                                variant={'solid'}
                                colorScheme={'red'}
                                size={'sm'}
                                mr={4}
                                onClick={handleLogout}
                            >
                                Logout
                            </Button>

                        </Flex>
                    }
                </Flex>
            </Box>
        </chakra.header>
    )
}

export default Header