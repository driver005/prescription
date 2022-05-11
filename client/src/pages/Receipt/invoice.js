import { Heading } from '@chakra-ui/react'
import React from 'react'
import InputComponent from '../../components/Input'

const Invoice = ({ form }) => {
    return (
        <React.Fragment>
            <Heading paddingTop={10} lineHeight={1.1} fontSize={{ base: 'xl', md: '2xl' }}>
                Invoice
            </Heading>
            <InputComponent
                id={"additionalPayment"}
                label={"Zuzahlung"}
                name={"additionalPayment"}
                disabled={true}
                value={form.additionalPayment && form.additionalPayment}
            />
            <InputComponent
                id={"activeIngredient"}
                label={"Active ingredient"}
                name={"activeIngredient"}
                disabled={true}
                value={form.activeIngredient && form.activeIngredient}
            />
            <InputComponent
                id={"additionalCosts"}
                label={"Mehrkosten"}
                name={"additionalCosts"}
                disabled={true}
                value={form.additionalCosts && form.additionalCosts}
            />
            <InputComponent
                id={"deliveryCost"}
                label={"Lieferkosten"}
                name={"deliveryCost"}
                disabled={true}
                value={form.deliveryCosts && form.deliveryCosts}
            />
            <InputComponent
                id={"emergencyServiceFee"}
                label={"Emergency service fee"}
                name={"emergencyServiceFee"}
                disabled={true}
                value={form.emergencyServiceFee && form.emergencyServiceFee}
            />
            <InputComponent
                id={"tax"}
                label={"Tax"}
                name={"tax"}
                disabled={true}
                value={form.tax && form.tax}
            />
            <InputComponent
                id={"totalGross"}
                label={"Total gross"}
                name={"totalGross"}
                disabled={true}
                value={form.totalGross && form.totalGross}
            />
            <InputComponent
                id={"patientTotal"}
                label={"Patient total"}
                name={"patientTotal"}
                disabled={true}
                value={form.totalGross && form.fees === "Yes" ? 0 : form.totalGross / 2}
            />
            <InputComponent
                id={"insuranceTotal"}
                label={"Insurance total"}
                name={"insuranceTotal"}
                disabled={true}
                value={form.totalGross && form.fees === "Yes" ? form.totalGross : form.totalGross / 2}
            />
        </React.Fragment >
    )
}

export default Invoice