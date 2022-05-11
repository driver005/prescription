import React from 'react'
import InputComponent from '../../components/Input'
import SelectComponent from '../../components/Select'

const Patient = ({ patient, form, handleTextChange, userIsPatient }) => {

    return (
        <React.Fragment>
            <SelectComponent
                id={"patient"}
                label={"Patient"}
                name={"patient"}
                value={form.patient && form.patient.name}
                values={patient.map(user => user.name)}
                onChange={(e) => handleTextChange(patient.find(user => user.name === e), "patient", true)}
                defaultValue={userIsPatient && patient.map(user => user.name)[0]}
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
                label={"City"}
                name={"city"}
                type={"text"}
                addon={'Patient address'}
                placeholder={'City'}
                value={form.patient && form.patient.address.city}
            />
            <InputComponent
                id={"street"}
                label={"Street"}
                name={"street"}
                type={"text"}
                addon={'Patient address'}
                placeholder={'Street'}
                value={form.patient && form.patient.address.street}
            />
            <InputComponent
                id={"country"}
                label={"Country"}
                name={"country"}
                type={"text"}
                addon={'Patient address'}
                placeholder={'Country'}
                value={form.patient && form.patient.address.country}
            />
            <InputComponent
                id={"zip"}
                label={"Zip"}
                name={"zip"}
                type={"text"}
                addon={'Patient address'}
                placeholder={'Zip'}
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
                label={"Birthday"}
                name={"birthday"}
                type={"text"}
                addon={'Patient'}
                placeholder={'Birthday'}
                value={form.patient && form.patient.birthday}
            />
            <InputComponent
                id={"insuranceName"}
                label={"Insurance name"}
                name={"insuranceName"}
                type={"text"}
                addon={'Patient employer'}
                placeholder={'Insurance name'}
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
                label={"Number"}
                name={"number"}
                type={"text"}
                addon={'Patient employer'}
                placeholder={'Number'}
                value={form.patient && form.patient.employer.number}
            />
        </React.Fragment>
    )
}

export default Patient