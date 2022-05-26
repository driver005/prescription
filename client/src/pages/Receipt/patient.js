import React from 'react'
import InputComponent from '../../components/Input'
import SelectComponent from '../../components/Select'

const Patient = ({ patient, form, handleTextChange, getAge }) => {
    return (
        <React.Fragment>
            <SelectComponent
                id={"patient"}
                label={"Patient"}
                name={"patient"}
                value={form.patient && form.patient.name}
                values={patient.map(user => user.name)}
                onChange={(e) => handleTextChange(patient.find(user => user.name === e), "patient", true)}
                defaultValue={form.patient && form.patient.name}
            />
            <InputComponent
                id={"name"}
                label={"Name"}
                name={"name"}
                type={"text"}
                addon={'Patient'}
                placeholder={'Name'}
                value={form.patient && form.patient.name}
            />
            <InputComponent
                id={"kvnr"}
                label={"KVNR"}
                name={"kvnr"}
                type={"text"}
                addon={'Patient'}
                placeholder={'KVNR'}
                value={form.patient && form.patient.identificationNumber}
            />
            <InputComponent
                id={"city"}
                label={"Stadt"}
                name={"city"}
                type={"text"}
                addon={'Patient address'}
                placeholder={'City'}
                value={form.patient && form.patient.address.city}
            />
            <InputComponent
                id={"street"}
                label={"Straße"}
                name={"street"}
                type={"text"}
                addon={'Patient address'}
                placeholder={'Straße'}
                value={form.patient && form.patient.address.street}
            />
            <InputComponent
                id={"country"}
                label={"Land"}
                name={"country"}
                type={"text"}
                addon={'Patient address'}
                placeholder={'Land'}
                value={form.patient && form.patient.address.country}
            />
            <InputComponent
                id={"zip"}
                label={"Postleitzahl"}
                name={"zip"}
                type={"text"}
                addon={'Patient address'}
                placeholder={'Postleitzahl'}
                value={form.patient && form.patient.address.zip}
            />
            <InputComponent
                id={"status"}
                label={"Status"}
                name={"status"}
                type={"text"}
                addon={'Patient'}
                placeholder={'Status'}
                value={form.patient && form.patient.status}
            />
            <InputComponent
                id={"birthday"}
                label={"Geburtstag"}
                name={"birthday"}
                type={"text"}
                addon={'Patient'}
                placeholder={'Geburtstag'}
                value={form.patient && form.patient.birthday}
            />
            <InputComponent
                id={"birthday"}
                label={"Alter"}
                name={"age"}
                type={"text"}
                addon={'Patient'}
                placeholder={'Alter'}
                value={form.patient && getAge(form.patient.birthday)}
            />
            <InputComponent
                id={"insuranceName"}
                label={"Versicherung"}
                name={"insuranceName"}
                type={"text"}
                addon={'Patient employer'}
                placeholder={'Versicherung'}
                value={form.patient && form.patient.employer.insurance.name}
            />
            <InputComponent
                id={"name"}
                label={"Name"}
                name={"name"}
                type={"text"}
                addon={'Patient employer'}
                placeholder={'Name'}
                value={form.patient && form.patient.employer.name}
            />
            <InputComponent
                id={"number"}
                label={"Nummer"}
                name={"number"}
                type={"text"}
                addon={'Patient employer'}
                placeholder={'Nummer'}
                value={form.patient && form.patient.employer.number}
            />
        </React.Fragment>
    )
}

export default Patient