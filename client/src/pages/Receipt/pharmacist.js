import React from 'react'
import InputComponent from '../../components/Input'
import SelectComponent from '../../components/Select'

const Pharmacist = ({ pharmacist, form, handleTextChange }) => {
    return (
        <React.Fragment>
            <SelectComponent
                id={"pharmacist"}
                label={"Apotheke"}
                name={"pharmacist"}
                value={form.pharmacist && form.pharmacist.name}
                values={pharmacist.map(user => user.name)}
                onChange={(e) => handleTextChange(pharmacist.find(user => user.name === e), "pharmacist", true)}
                defaultValue={form.pharmacist && form.pharmacist.name}
            />
            <InputComponent
                id={"name"}
                label={"Name"}
                name={"name"}
                type={"text"}
                addon={'Pharmacist'}
                placeholder={'Name'}
                value={form.pharmacist && form.pharmacist.name}
            />
            <InputComponent
                id={"ik"}
                label={"IK"}
                name={"ik"}
                type={"text"}
                addon={'Pharmacist'}
                placeholder={'IK'}
                value={form.pharmacist && form.pharmacist.identificationNumber}
            />
            <InputComponent
                id={"city"}
                label={"Stadt"}
                name={"city"}
                type={"text"}
                addon={'Patient address'}
                placeholder={'City'}
                value={form.pharmacist && form.pharmacist.address.city}
            />
            <InputComponent
                id={"street"}
                label={"Straße"}
                name={"street"}
                type={"text"}
                addon={'Patient address'}
                placeholder={'Straße'}
                value={form.pharmacist && form.pharmacist.address.street}
            />
            <InputComponent
                id={"country"}
                label={"Land"}
                name={"country"}
                type={"text"}
                addon={'Patient address'}
                placeholder={'Land'}
                value={form.pharmacist && form.pharmacist.address.country}
            />
            <InputComponent
                id={"zip"}
                label={"Postleitzahl"}
                name={"zip"}
                type={"text"}
                addon={'Patient address'}
                placeholder={'Postleitzahl'}
                value={form.pharmacist && form.pharmacist.address.zip}
            />
        </React.Fragment>
    )
}

export default Pharmacist