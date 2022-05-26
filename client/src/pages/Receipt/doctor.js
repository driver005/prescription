import React from 'react'
import InputComponent from '../../components/Input'
import SelectComponent from '../../components/Select'

const Doctor = ({ doctor, form, handleTextChange }) => {
    return (
        <React.Fragment>
            <SelectComponent
                id={"doctor"}
                label={"Doktor"}
                name={"doctor"}
                value={form.doctor && form.doctor.name}
                values={doctor.map(user => user.name)}
                onChange={(e) => handleTextChange(doctor.find(user => user.name === e), "doctor", true)}
                defaultValue={form.doctor && form.doctor.name}
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
                label={"Arbeitstitel"}
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
                label={"Stadt"}
                name={"city"}
                type={"text"}
                addon={'Patient address'}
                placeholder={'City'}
                value={form.doctor && form.doctor.address.city}
            />
            <InputComponent
                id={"street"}
                label={"Straße"}
                name={"street"}
                type={"text"}
                addon={'Patient address'}
                placeholder={'Straße'}
                value={form.doctor && form.doctor.address.street}
            />
            <InputComponent
                id={"country"}
                label={"Land"}
                name={"country"}
                type={"text"}
                addon={'Patient address'}
                placeholder={'Land'}
                value={form.doctor && form.doctor.address.country}
            />
            <InputComponent
                id={"zip"}
                label={"Postleitzahl"}
                name={"zip"}
                type={"text"}
                addon={'Patient address'}
                placeholder={'Postleitzahl'}
                value={form.doctor && form.doctor.address.zip}
            />
            <InputComponent
                id={"phone"}
                label={"Telefonnumer"}
                name={"phone"}
                type={"text"}
                addon={'Doctor'}
                placeholder={'Telefonnumer'}
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