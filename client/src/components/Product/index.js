import { Center, Flex, FormControl, FormLabel, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Stack, Table, Tbody, Td, Text, Th, Thead, Tr, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import React from 'react'

import CustomCardWrapper from '../Card/Custom';
import InputComponent from '../Input';
import SelectComponent from '../Select';
import Row from './row';


const Product = ({ products, medication, form, handleTextChange, isOpen, setIsOpen, handelOnClose, handelRemoveRow }) => {
    const textColor = useColorModeValue("gray.800", "white");

    const labels = [
        "Name",
        "Preis",
        "Dosis",
    ]

    return (
        <CustomCardWrapper
            width='45%'
            label={'Products'}
            modalLabel={"Create Product"}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            handelOnClose={handelOnClose}
            modalChildren={
                <Stack
                    spacing={4}
                >
                    <SelectComponent
                        id={"arzneimittel"}
                        label={"Arzneimittel"}
                        name={"arzneimittel"}
                        values={medication.map(medication => medication.name)}
                        onChange={(e) => handleTextChange(medication.find(meds => meds.name === e), "medication")}
                    />
                    <InputComponent
                        id={"pzn"}
                        label={"PZN"}
                        name={"pzn"}
                        type={"text"}
                        addon={'Arzneimittel'}
                        placeholder={'PZN'}
                        value={form.medication && form.medication.identificationNumber}
                    />
                    <InputComponent
                        id={"price"}
                        label={"Price"}
                        name={"price"}
                        type={"text"}
                        addon={'Arzneimittel'}
                        placeholder={'Price'}
                        value={form.medication && `${form.medication.price} €`}
                    />
                    <SelectComponent
                        id={"dosage"}
                        label={"Dosierung"}
                        name={"dosage"}
                        values={[
                            "ID - nur der Patient kann das Rezept abholen und muss sie bei der Apotheke ausweisen",
                            "Dj - Dem Patient wurde eine ausreichende Dosierungsinstruktion ausgehändigt",
                        ]}
                        onChange={(e) => handleTextChange(e.substring(0, 2), "dosage")}
                    />
                    <FormControl id={"dosis"}>
                        <FormLabel>Dosis</FormLabel>
                        <NumberInput defaultValue={1} value={form.dosis} onChange={(e) => handleTextChange(e, "dosis")}>
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </FormControl>
                </Stack>
            }
        >
            <Table variant="simple" color={textColor}>
                {products && products.length !== 0 &&
                    <Thead>
                        <Tr my=".8rem" pl="0px">
                            {labels.map((label, index) => {
                                if (index === 0) {
                                    return <Th key={index} pl="0px" color="gray.400">{label}</Th>
                                } else {
                                    return <Th key={index} color="gray.400">{label}</Th>
                                }
                            })}
                        </Tr>
                    </Thead>
                }
                {products && products.length === 0 ?
                    <Flex>
                        <Center>
                            <Text>No Data</Text>
                        </Center>
                    </Flex> :
                    <Tbody>
                        {products.map((product, index) => {
                            return (
                                <Row
                                    key={index}
                                    name={product.name}
                                    price={product.price}
                                    amount={product.dosis}
                                    index={index}
                                    handelRemoveRow={handelRemoveRow}
                                />
                            );
                        })}
                    </Tbody>
                }
            </Table>
        </CustomCardWrapper>
    )
}

export default Product