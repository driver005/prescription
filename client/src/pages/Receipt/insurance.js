import React from 'react'
import InputComponent from '../../components/Input'
import SelectComponent from '../../components/Select'

const Insurance = ({ insurance, form, handleTextChange }) => {
    return (
        <React.Fragment>
            <SelectComponent
                id={"insurance"}
                label={"Insurance"}
                name={"insurance"}
                value={form.insurance && form.insurance.name}
                values={insurance.filter(user => user.insuranceIsOfState === (form.workAccident === 'Yes' ? true : false)).map(user => user.name)}
                onChange={(e) => handleTextChange(insurance.find(user => user.name === e), "insurance", true)}
            />
            <InputComponent
                id={"name"}
                label={"Name"}
                name={"name"}
                type={"text"}
                addon={'Insurance'}
                placeholder={'Name'}
                value={form.insurance && form.insurance.name}
            />
            <InputComponent
                id={"indentifiuierungsnummer"}
                label={"Indentifiuierungsnummer"}
                name={"indentifiuierungsnummer"}
                type={"text"}
                addon={'Insurance'}
                placeholder={'Indentifiuierungsnummer'}
                value={form.insurance && form.insurance.identificationNumber}
            />
            <InputComponent
                id={"insuranceIsOfState"}
                label={"Is Insurance of state"}
                name={"insuranceIsOfState"}
                type={"text"}
                addon={'Insurance'}
                placeholder={'Ist die Versicherung staatlich'}
                value={form.insurance && `Ist die Versicherung staatlich: ${form.insurance.insuranceIsOfState}`}
            />
        </React.Fragment>
    )
}

export default Insurance