import { Heading } from '@chakra-ui/react'
import React from 'react'
import InputComponent from '../../components/Input'

const Invoice = ({ form }) => {
    return (
        <React.Fragment>
            <Heading paddingTop={10} lineHeight={1.1} fontSize={{ base: 'xl', md: '2xl' }}>
                Rechnung
            </Heading>
            <InputComponent
                id={"additionalPayment"}
                label={"Zuzahlung"}
                name={"additionalPayment"}
                disabled={true}
                value={form.additionalPayment && form.additionalPayment}
                icon={'€'}
            />
            <InputComponent
                id={"activeIngredient"}
                label={"Aktiv-Wirkstoff maximal Preis"}
                name={"activeIngredient"}
                disabled={true}
                value={form.activeIngredient && form.activeIngredient}
                icon={'€'}
            />
            <InputComponent
                id={"additionalCosts"}
                label={"Mehrkosten"}
                name={"additionalCosts"}
                disabled={true}
                value={form.additionalCosts && form.additionalCosts}
                icon={'€'}
            />
            <InputComponent
                id={"deliveryCost"}
                label={"Lieferkosten"}
                name={"deliveryCost"}
                disabled={true}
                value={form.deliveryCosts && form.deliveryCosts}
                icon={'€'}
            />
            <InputComponent
                id={"emergencyServiceFee"}
                label={"Notfalldienstgebühr"}
                name={"emergencyServiceFee"}
                disabled={true}
                value={form.emergencyServiceFee && form.emergencyServiceFee}
                icon={'€'}
            />
            <InputComponent
                id={"tax"}
                label={"Taxe"}
                name={"tax"}
                disabled={true}
                value={form.tax && form.tax}
                icon={'€'}
            />
            <InputComponent
                id={"totalGross"}
                label={"Gesamt-Brutto"}
                name={"totalGross"}
                disabled={true}
                value={form.totalGross && form.totalGross}
                icon={'€'}
            />
            <InputComponent
                id={"patientTotal"}
                label={"Patient Total"}
                name={"patientTotal"}
                disabled={true}
                value={form.totalGross && form.fees === "(leer)" ?
                    0
                    :
                    form.noctu === "(leer)" ?
                        form.totalGross / 2 - form.emergencyServiceFee
                        : form.totalGross / 2
                }
                icon={'€'}
            />
            <InputComponent
                id={"insuranceTotal"}
                label={"Versicherung Total"}
                name={"insuranceTotal"}
                disabled={true}
                value={form.totalGross && form.fees === "(leer)" ?
                    form.noctu === "X" ?
                        form.totalGross - form.emergencyServiceFee
                        : form.totalGross
                    : form.noctu === "X" ?
                        form.totalGross / 2 - form.emergencyServiceFee
                        : form.totalGross / 2
                }
                icon={'€'}
            />
        </React.Fragment >
    )
}

export default Invoice