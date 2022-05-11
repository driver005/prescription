import React from 'react'
import InputComponent from '../../components/Input'
import SelectComponent from '../../components/Select'

const Doctor = ({ doctor, form, handleTextChange }) => {
    return (
        <React.Fragment>
            <SelectComponent
                id={"doctor"}
                label={"Doctor"}
                name={"doctor"}
                value={form.doctor && form.doctor.name}
                values={doctor.map(user => user.name)}
                onChange={(e) => handleTextChange(doctor.find(user => user.name === e), "doctor", true)}
            />
            <InputComponent
                id={"lanr"}
                label={"LANR"}
                name={"lanr"}
                type={"text"}
                addon={'Doctor'}
                placeholder={'LANR'}
                value={form.doctor && form.doctor.identificationNumber}
            />
            <InputComponent
                id={"jobTitle"}
                label={"Job title"}
                name={"jobTitle"}
                type={"text"}
                addon={'Doctor'}
                placeholder={'Job title'}
                value={form.doctor && form.doctor.jobTitle}
            />
            <InputComponent
                id={"name"}
                label={"Name"}
                name={"name"}
                type={"text"}
                addon={'Doctor'}
                placeholder={'Name'}
                value={form.doctor && form.doctor.name}
            />
            <InputComponent
                id={"city"}
                label={"City"}
                name={"city"}
                type={"text"}
                addon={'Doctor address'}
                placeholder={'City'}
                value={form.doctor && form.doctor.address.city}
            />
            <InputComponent
                id={"street"}
                label={"Street"}
                name={"street"}
                type={"text"}
                addon={'Doctor address'}
                placeholder={'Street'}
                value={form.doctor && form.doctor.address.street}
            />
            <InputComponent
                id={"country"}
                label={"Country"}
                name={"country"}
                type={"text"}
                addon={'Doctor address'}
                placeholder={'Country'}
                value={form.doctor && form.doctor.address.country}
            />
            <InputComponent
                id={"zip"}
                label={"Zip"}
                name={"zip"}
                type={"text"}
                addon={'Doctor address'}
                placeholder={'Zip'}
                value={form.doctor && form.doctor.address.zip}
            />
            <InputComponent
                id={"phone"}
                label={"Phone"}
                name={"phone"}
                type={"text"}
                addon={'Doctor'}
                placeholder={'Phone'}
                value={form.doctor && form.doctor.phone}
            />
            <InputComponent
                id={"phone"}
                label={"Phone"}
                name={"phone"}
                type={"text"}
                addon={'Doctor'}
                placeholder={'Phone'}
                value={form.doctor && form.doctor.phone}
            />
            <InputComponent
                id={"bsnr"}
                label={"BSNR"}
                name={"bsnr"}
                type={"text"}
                addon={'Doctor'}
                placeholder={'BSNR'}
                value={form.doctor && form.doctor.businessPlace}
            />
        </React.Fragment>
    )
}

export default Doctor