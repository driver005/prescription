import React from 'react'
import {
    FormControl,
    FormErrorMessage,
    FormHelperText,
    FormLabel,
    Icon,
    InputGroup,
    InputRightElement,
} from '@chakra-ui/react';
import {
    AutoComplete,
    AutoCompleteInput,
    AutoCompleteItem,
    AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";
import { FiChevronRight, FiChevronDown } from "react-icons/fi";

const SelectComponent = ({ id, label, values, register, name, onChange, defaultValue = null, value = null, error = null, disabled = false }) => {
    return (
        <FormControl id={id} isInvalid={error} isDisabled={disabled}>
            <FormLabel>{label}</FormLabel>
            <AutoComplete openOnFocus onChange={onChange} defaultValue={defaultValue && defaultValue} value={value && value}>
                {({ isOpen }) => (
                    <React.Fragment>
                        <InputGroup>
                            <AutoCompleteInput name={name} {...register} />
                            <InputRightElement children={<Icon as={isOpen ? FiChevronRight : FiChevronDown} />} />
                        </InputGroup>
                        <AutoCompleteList>
                            {values.map((value, id) => (
                                <AutoCompleteItem
                                    key={`option-${id}`}
                                    value={value}
                                    textTransform="capitalize"
                                    label={value}
                                    fixed
                                />
                            ))}
                        </AutoCompleteList>
                    </React.Fragment>
                )}
            </AutoComplete>
            <FormHelperText>{!error && "Select value from dropdown"}</FormHelperText>
            <FormErrorMessage>{error && error.message}</FormErrorMessage>
        </FormControl>
    )
}

export default SelectComponent