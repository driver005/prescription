import React from 'react'
import InputComponent from '../../components/Input'
import SelectComponent from '../../components/Select'

const Pharmacist = ({ pharmacist, form, handleTextChange }) => {
    return (
        <React.Fragment>
            <SelectComponent
                id={"pharmacist"}
                label={"Pharmacist"}
                name={"pharmacist"}
                value={form.pharmacist && form.pharmacist.name}
                values={pharmacist.map(user => user.name)}
                onChange={(e) => handleTextChange(pharmacist.find(user => user.name === e), "pharmacist", true)}
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
                label={"City"}
                name={"city"}
                type={"text"}
                addon={'Pharmacist address'}
                placeholder={'City'}
                value={form.pharmacist && form.pharmacist.address.city}
            />
            <InputComponent
                id={"street"}
                label={"Street"}
                name={"street"}
                type={"text"}
                addon={'Pharmacist address'}
                placeholder={'Street'}
                value={form.pharmacist && form.pharmacist.address.street}
            />
            <InputComponent
                id={"country"}
                label={"Country"}
                name={"country"}
                type={"text"}
                addon={'Pharmacist address'}
                placeholder={'Country'}
                value={form.pharmacist && form.pharmacist.address.country}
            />
            <InputComponent
                id={"zip"}
                label={"Zip"}
                name={"zip"}
                type={"text"}
                addon={'Pharmacist address'}
                placeholder={'Zip'}
                value={form.pharmacist && form.pharmacist.address.zip}
            />
        </React.Fragment>
    )
}

export default Pharmacist