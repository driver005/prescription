import React, { useEffect, useState } from 'react'
import { Center, chakra, Grid, Heading, HStack, Stack, useColorModeValue, useToast } from '@chakra-ui/react'
import Background from '../../components/Background'
import ButtonComponent from '../../components/Button'
import InputComponent from '../../components/Input'
import SelectComponent from '../../components/Select'
import * as api from '../../api'
import Product from '../../components/Product'
import RadioComponent from '../../components/Radio'
import Patient from './patient'
import Doctor from './doctor'
import Pharmacist from './pharmacist'
import Insurance from './insurance'
import Invoice from './invoice'
import Fields from './fields'
import { generateReceipt, updateReceipt } from '../../action/receipt'
import { useNavigate, useParams } from 'react-router-dom'


function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

//create your forceUpdate hook
function useForceUpdate() {
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
}

const initialState = {
    date: new Date(),
    workAccidentDate: new Date(),
    fees: null,
    noctu: null,
    other: null,
    subjectToJustification: null,

    deliveryCosts: null,
    sonderPZN: null,
    factor: null,
    numberOfPacks: 0,
    workAccident: null,
    additionalPayment: null,
    payment: null,
    additionalCosts: null,
    activeIngredient: null,
    emergencyServiceFee: null,
    tax: null,
    totalGross: null,
    patient: null,
    insurance: null,
    doctor: null,
    pharmacist: null,
};

const initialStateProducts = {
    medication: null,
    dosis: 1,
    dosage: null,
    aut_Idem: null,
};

const Receipt = () => {
    const bg = useColorModeValue('white', 'gray.700')
    const toast = useToast()
    const navigate = useNavigate();
    let { id } = useParams();
    const [loading, setLoading] = useState(true)
    const userIsPatient = JSON.parse(localStorage.getItem('user')).type === "doctor"
    const [form, setForm] = React.useState(initialState);
    const [formProducts, setFormProducts] = React.useState(initialStateProducts);
    const [patient, setPatient] = useState([])
    const [insurance, setInsurance] = useState([])
    const [doctor, setDoctor] = useState(userIsPatient ? [JSON.parse(localStorage.getItem('user'))] : [])
    const [medication, setMedication] = useState([])
    const [products, setProducts] = useState([])
    const [pharmacist, setPharmacist] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const [sonderPZN, setSonderPZN] = useState(["02567024", "09999637"])
    const [numberOfPacks, setNumberOfPacks] = useState()
    const forceUpdate = useForceUpdate();

    useEffect(() => {
        api.fetchUsers().then((data) => {
            const users = data.data
            setInsurance(users.filter(user => user.type === 'insurance'))
            setPatient(users.filter(user => user.type === 'patient'))
            setPharmacist(users.filter(user => user.type === 'pharmacist'))


            if (!userIsPatient) {
                setDoctor(users.filter(user => user.type === 'doctor'))
            } else {
                handleTextChange(doctor[0], "doctor", true)
            }
        })

        api.fetchMedication().then((data) => {
            const medications = data.data
            setMedication(medications)
        })

        if (id) {
            api.fetchReceiptByID(id)
                .then((data) => {
                    const values = {
                        patient: data.data.patient,
                        doctor: data.data.doctor,
                        insurance: data.data.insurance,
                        pharmacist: data.data.pharmacist,
                        workAccident: data.data.workAccident === true ? "X" : "(leer)",
                        date: data.data.date,
                        workAccidentDate: data.data.workAccidentDate,
                        fees: data.data.fees === true ? "X" : "(leer)",
                        noctu: data.data.noctu,
                        other: data.data.other,
                        subjectToJustification: data.data.subjectToJustification === true ? "X" : "(leer)r)",
                        deliveryCosts: data.data.deliveryCosts,
                        sonderPZN: data.data.sonderPZN,
                        factor: data.data.factor,
                        numberOfPacks: data.data.numberOfPacks,
                        additionalPayment: data.data.additionalPayment,
                        activeIngredient: data.data.activeIngredient,
                        additionalCosts: data.data.additionalCosts,
                        emergencyServiceFee: data.data.emergencyServiceFee,
                        tax: data.data.tax,
                        totalGross: data.data.totalGross,
                    }
                    setForm(values)
                    setProducts(data.data.medications.map(product => ({
                        dosis: product.dosis,
                        dosage: product.dosage,
                        aut_Idem: product.aut_Idem,
                        ...product.medication
                    })))
                    forceUpdate()
                })
                .catch(function (error) {
                    toast({
                        title: error.response.data,
                        description: "Id not found",
                        status: 'error',
                        duration: 5000,
                        isClosable: true,
                    })
                })
        }
        setLoading(false)
    }, [])

    useEffect(() => {
        var totalGross = 0
        var price = 0
        var priceIngredient = 0
        var priceEmergencyServiceFee = 0
        products.map(product => {
            price = price + product.price
            priceIngredient = priceIngredient + product.activeIngredient
            return null
        })

        var pricetax = price
        var additionalprice = price
        var pricePayment = price
        var additionalCosts = price - priceIngredient

        if (additionalprice * 0.1 > 10) {
            additionalprice = 10
        } else if (additionalprice * 0.1 < 5) {
            additionalprice = 5
        } else {
            additionalprice = additionalprice * 0.1
        }

        if (!noctuInTime()) {
            priceEmergencyServiceFee = 2.5
        }

        if (pricetax < additionalprice) {
            pricetax = 0
        }

        if (price - priceIngredient < 0) {
            additionalCosts = 0
        }

        totalGross = additionalprice + priceIngredient + additionalCosts + form.deliveryCosts + priceEmergencyServiceFee
        handleTextChange(
            [additionalprice, priceIngredient, pricePayment, additionalCosts, priceEmergencyServiceFee, pricetax, totalGross],
            ["additionalPayment", "activeIngredient", "payment", "additionalCosts", "emergencyServiceFee", "tax", "totalGross"]
        )
    }, [products])

    function handleTextChange(text, name = null, ausname = false) {
        if (typeof text === 'object' && name !== null && !ausname) {
            const string = text.map((txt, index) => {
                return {
                    [name[index]]: txt,
                }
            })
            setForm({
                ...form,
                ...Object.assign({}, ...string),
            });
        } else if (name) {
            setForm({
                ...form,
                [name]: text,
            });
        } else {
            setForm({
                ...form,
                [text.name]: text.value,
            });
        }
    }

    function handleTextChangeProducts(text, name = null) {
        if (text === "clear") {
            setFormProducts(initialStateProducts);
        } else if (name) {
            setFormProducts({
                ...formProducts,
                [name]: text,
            });
        } else {
            setFormProducts({
                ...formProducts,
                [text.name]: text.value,
            });
        }
    }

    const noctuInTime = () => {
        const hours = new Date().getHours()
        if (hours > 6 && hours < 20) {
            return true
        } else {
            return false
        }
    }


    const handelOnClose = () => {
        if (formProducts.medication && formProducts.dosis && formProducts.dosage && formProducts.aut_Idem) {
            setProducts(product => [
                ...product,
                {
                    ...formProducts.medication,
                    dosis: formProducts.dosis,
                    dosage: formProducts.dosage,
                    aut_Idem: formProducts.aut_Idem,
                }
            ])
            // setNumberOfPacks(numberOfPacks + parseInt(formProducts.dosis))


        }
        setIsOpen(false)
        handleTextChangeProducts("clear")
    }

    const handelRemoveRow = (index) => {
        const product = products.splice(index, 1)
        product.length === 0 && setProducts([])
        product.length > 1 && setProducts([...product])
        forceUpdate()
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (form && form.patient && form.doctor && form.pharmacist) {
            const product = products.map(product => ({
                "medication": product._id,
                "dosis": product.dosis,
                "dosage": product.dosage,
                "formProducts": product.aut_Idem,
            }))
            const data = {
                patient: form.patient._id,
                doctor: form.doctor._id,
                insurance: form.workAccident === "X" ? form.patient.insuranceState : form.patient.insurance,
                pharmacist: form.pharmacist._id,
                workAccident: form.workAccident === "X" ? true : false || false,
                date: form.date || new Date(),
                workAccidentDate: form.workAccidentDate,
                fees: form.fees === "X" ? true : false || false,
                noctu: form.noctu || '',
                other: form.other || '',
                subjectToJustification: form.subjectToJustification === "X" ? true : false || '',
                deliveryCosts: form.deliveryCosts || '',
                sonderPZN: form.sonderPZN || '',
                factor: form.factor || '',
                numberOfPacks: form.numberOfPacks || '',
                additionalPayment: form.additionalPayment || '',
                activeIngredient: form.activeIngredient || '',
                additionalCosts: form.additionalCosts || '',
                emergencyServiceFee: form.emergencyServiceFee || '',
                tax: form.tax || '',
                totalGross: form.totalGross || '',
                medications: [...product] || []
            }
            if (!id) {
                generateReceipt(data, navigate).then((promis) => {
                    if (promis?.message) {
                        toast({
                            title: promis.message,
                            description: "Value error",
                            status: 'error',
                            duration: 5000,
                            isClosable: true,
                        })
                    } else {
                        toast({
                            title: 'Receipt successful generated',
                            description: "You successful generated a new Receipt",
                            status: 'success',
                            duration: 5000,
                            isClosable: true,
                        })
                    }
                });
            } else {
                updateReceipt(id, data, navigate).then((promis) => {
                    if (promis?.message) {
                        toast({
                            title: promis.message,
                            description: "Value error",
                            status: 'error',
                            duration: 5000,
                            isClosable: true,
                        })
                    } else {
                        toast({
                            title: 'Receipt successful updated',
                            description: "You successful updated your Receipt",
                            status: 'success',
                            duration: 5000,
                            isClosable: true,
                        })
                    }
                });
            }
        } else {
            toast({
                title: "Please select patient, doctor, insurance and pharmacist",
                description: "Value error",
                status: 'error',
                duration: 5000,
                isClosable: true,
            })
        }
    }
    // if (idError) {
    //     return <h1>{idError}</h1>
    // }
    if (id) {
        if (loading || (form.patient == null && form.doctor == null && form.pharmacist == null)) {
            return (
                <Center>Loading ...</Center>
            )
        }
    }
    return (
        <Background>
            <chakra.form w={"100vw"} d={"flex"} onSubmit={onSubmit}>
                <Stack spacing={8} direction='row' w={"100%"} mx={6} my={10}>
                    <Stack w={"100%"}>
                        <Stack
                            spacing={4}
                            px={10}
                            bg={bg}
                            w={"100%"}
                            borderColor={'blue.400'}
                            borderWidth={2}
                            borderRadius={"lg"}
                            py={6}
                        >
                            <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
                                Zugehörigkeit
                            </Heading>
                            <Patient
                                form={form}
                                patient={patient}
                                handleTextChange={handleTextChange}
                                getAge={getAge}
                            />
                            <Doctor
                                doctor={doctor}
                                form={form}
                                userIsDoctor={userIsPatient}
                                handleTextChange={handleTextChange}
                            />
                            <Pharmacist
                                pharmacist={pharmacist}
                                form={form}
                                handleTextChange={handleTextChange}
                            />
                        </Stack>
                        <Stack
                            spacing={4}
                            px={10}
                            bg={bg}
                            w={"100%"}
                            borderColor={'blue.400'}
                            borderWidth={2}
                            borderRadius={"lg"}
                            py={6}
                        >
                            <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
                                Situation
                            </Heading>
                            <Fields
                                form={form}
                                handleTextChange={handleTextChange}
                                noctuInTime={noctuInTime}
                                numberOfPacks={numberOfPacks}
                                setNumberOfPacks={setNumberOfPacks}
                                setSonderPZN={setSonderPZN}
                                sonderPZN={sonderPZN}
                                userIsDoctor={userIsPatient}
                            />
                        </Stack>
                        <Stack
                            spacing={4}
                            px={10}
                            bg={bg}
                            w={"100%"}
                            borderColor={'blue.400'}
                            borderWidth={2}
                            borderRadius={"lg"}
                            py={6}
                        >
                            <Invoice
                                form={form}
                            />
                            <Stack spacing={6} direction={['column', 'row']}>
                                <ButtonComponent
                                    label={"Cancel"}
                                    color={'red.400'}
                                    hoverColor={'red.500'}
                                    onClick={() => navigate("/dash")}
                                />
                                <ButtonComponent
                                    label={"Submit"}
                                    type={"submit"}
                                />
                            </Stack>
                        </Stack>
                    </Stack>
                    <Product
                        medication={medication}
                        form={formProducts}
                        handleTextChange={handleTextChangeProducts}
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        handelOnClose={handelOnClose}
                        products={products}
                        handelRemoveRow={handelRemoveRow}
                    />
                </Stack>
            </chakra.form>
        </Background>
    )
}

export default Receipt