import React from 'react'
import {
    FormControl,
    FormErrorMessage,
    FormHelperText,
    FormLabel,
    HStack,
    Icon,
    InputGroup,
    InputRightElement,
    Radio,
    RadioGroup,
} from '@chakra-ui/react';

const RadioComponent = ({ id, label, values, register, name, onChange, defaultValue = null, error = null, disabled = false }) => {
    return (
        <FormControl id={id} isInvalid={error} isDisabled={disabled} as='fieldset'>
            <FormLabel>{label}</FormLabel>
            <RadioGroup name={name} {...register} defaultValue={defaultValue} onChange={onChange}>
                <HStack spacing='24px'>
                    {values.map((value, id) => (
                        <Radio
                            key={`radio-${id}`}
                            value={value}
                        >
                            {value}
                        </Radio>
                    ))}
                </HStack>
            </RadioGroup>
            <FormHelperText>{!error && "Chose value"}</FormHelperText>
            <FormErrorMessage>{error && error.message}</FormErrorMessage>
        </FormControl>
    )
}

export default RadioComponent