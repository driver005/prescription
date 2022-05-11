import { Stack, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import CardContainer from '../../components/Resceipt'
import { IoIosAdd } from 'react-icons/io'
import Request from '../../components/Request'
import * as api from '../../api'
import CardItem from '../../components/Resceipt/item'
import ButtonComponent from '../../components/Button'
import { useNavigate } from 'react-router-dom'

const Dashbord = () => {
    const toast = useToast()
    const navigate = useNavigate();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
    const [prescription, setPrescription] = useState([])
    useEffect(() => {
        api.getReceiptByUserID(user._id)
            .then((data) => {
                setPrescription(data.data)
            })
            .catch(function (error) {
                toast({
                    title: error.response.data.message,
                    description: "Receipt not found",
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                })
            })
    })

    const handelClick = (id) => {
        navigate(`/receipt/${id}`)
    }

    return (
        <div>
            <Stack p={6}>
                <Stack direction={['column', 'row']} spacing={8} p={6} px={0}>
                    <CardContainer onClick={() => handelClick('create')} label={"All Prescription"} noFound={prescription.length === 0} icon={<IoIosAdd on size={25} />}>
                        {prescription.map((data) => (
                            <CardItem
                                label={"Prescription"}
                                doctor={data.doctor.name}
                                patient={data.patient.name}
                                insurance={data.insurance.name}
                                pharmacist={data.pharmacist.name}
                            >
                                {(user.type === "doctor" || user.type === "pharmacist") && <ButtonComponent label={"Edit"} onClick={() => handelClick(data._id)} />}
                            </CardItem>
                        ))}
                    </CardContainer>
                </Stack>
            </Stack>
        </div>
    )
}

export default Dashbord