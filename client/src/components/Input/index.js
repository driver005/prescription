import React from 'react'

import {
    FormControl,
    FormErrorMessage,
    FormHelperText,
    FormLabel,
    Input,
    InputGroup,
    InputLeftAddon,
    InputRightElement,
} from '@chakra-ui/react';

const InputComponent = ({ id, label, type, register, name, value = null, disabled = false, onChange = function () { }, placeholder = null, error = null, icon = null, addon = null, onClick = function () { } }) => {
    return (
        <FormControl id={id} isInvalid={error} isDisabled={addon || disabled}>
            {!addon && <FormLabel>{label}</FormLabel>}
            <InputGroup>
                {addon && <InputLeftAddon children={label} />}
                <Input type={type} {...register} name={name} onChange={onChange} value={value} placeholder={placeholder} />
                {icon && <InputRightElement onClick={onClick} children={icon} />}
            </InputGroup>
            {!addon && <FormHelperText>{!error && "Fill in the requierd value"}</FormHelperText>}
            <FormErrorMessage>{error && error.message}</FormErrorMessage>
        </FormControl>
    )
}

export default InputComponent