import {
    Box,
    Stack,
    Heading,
    useColorModeValue,
    useToast,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import Background from '../../components/Background';
import ButtonComponent from '../../components/Button';
import InputComponent from '../../components/Input';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { signin } from '../../action/auth';

const initialState = {
    email: '',
    password: '',
};

const Login = () => {
    const toast = useToast()
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'))?.type
    const [form, setForm] = React.useState(initialState);
    const [showPassword, setShowPassword] = React.useState(false);
    const handleShowPassword = () => setShowPassword(!showPassword);
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    useEffect(() => {
        if (user) {
            navigate("/dash")
        }
    }, [])

    function handleChange(text) {
        setForm({
            ...form,
            [text.name]: text.value,
        });
    }

    const onSubmit = (e) => {
        signin(form, navigate).then((promis) => {
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
                    title: 'Successful Signed up',
                    description: "You logged successfully into your account",
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                })
            }
        });
    }
    return (
        <Background>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Sign in to your account</Heading>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Stack spacing={4}>
                            <InputComponent
                                id={"email"}
                                label={"Email"}
                                type={"name"}
                                name={'email'}
                                onChange={(e) => handleChange(e.target)}
                                register={
                                    register(
                                        "email",
                                        {
                                            required: 'email is required',
                                            pattern: {
                                                value:
                                                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                                message: 'Invalid email address',
                                            },
                                        }
                                    )}
                                error={errors.email}

                            />
                            <InputComponent
                                id={"password"}
                                label={"Password"}
                                name={'password'}
                                type={showPassword ? 'text' : 'password'}
                                onChange={(e) => handleChange(e.target)}
                                onClick={handleShowPassword}
                                icon={showPassword ? <FaEye /> : <FaEyeSlash />}
                                register={register("password", { required: 'password is required', minLength: { value: 8, message: 'password needs to be at least 8 letters' } })}
                                error={errors.password}


                            />
                            <Box marginTop={10}>
                                <ButtonComponent label={"Sign in"} type={'submit'} />
                            </Box>
                        </Stack>
                    </form>
                </Box>
            </Stack>
        </Background>
    );
}


export default Login;