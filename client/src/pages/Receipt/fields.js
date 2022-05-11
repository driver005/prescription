import React from 'react'
import InputComponent from '../../components/Input'
import SelectComponent from '../../components/Select'

const bool = [
    "Yes",
    "No",
];


const Fields = ({ form, handleTextChange, noctuInTime, sonderPZN, setSonderPZN, numberOfPacks }) => {
    return (
        <React.Fragment>
            <InputComponent
                id={"date"}
                label={"Datum"}
                name={"date"}
                type={"text"}
                value={form.date}
                disabled={true}
            />
            <SelectComponent
                id={"workAccident"}
                label={"Arbeitsunfall"}
                name={"workAccident"}
                value={form.workAccident && form.workAccident}
                values={bool}
                onChange={(e) => handleTextChange(e, "workAccident")}
            />
            <SelectComponent
                id={"fees"}
                label={"Gebühren"}
                name={"fees"}
                value={form.fees && form.fees}
                values={bool}
                onChange={(e) => handleTextChange(e, "fees")}
            />
            <SelectComponent
                id={"noctu"}
                label={"Noctu"}
                name={"noctu"}
                value={form.noctu && form.noctu}
                values={["Der Patient hat die Medizin in einer dringlichen Situation geholt. Es entspricht dem Zweck des nächtlichen Apothekennotdienstes."]}
                onChange={(e) => handleTextChange(e, "noctu")}
                disabled={noctuInTime()}
            />
            <InputComponent
                id={"other"}
                label={"Sonstiges"}
                name={"other"}
                type={"text"}
                value={form.other}
                onChange={(e) => handleTextChange(e.target)}
            />
            <SelectComponent
                id={"subjectToJustification"}
                label={"Begründungspflichtig"}
                name={"subjectToJustification"}
                value={form.subjectToJustification && form.subjectToJustification}
                values={bool}
                onChange={(e) => handleTextChange(e, "subjectToJustification")}
            />
            <SelectComponent
                id={"aut_Idem"}
                label={"aut. Idem"}
                name={"aut_Idem"}
                value={form.aut_Idem && form.aut_Idem}
                values={["Die Verweigerung der Supplimentierung darf auschließlich aufgrund von ärztlichen Bedenken geschehen.", "Die Verweigerung der Supplimentierung ist erlaubt."]}
                onChange={(e) => handleTextChange(e, "aut_Idem")}
            />
            <InputComponent
                id={"workAccidentDate"}
                label={"Arbeitsunfalltag"}
                name={"workAccidentDate"}
                type={"text"}
                value={form.workAccidentDate}
                disabled={true}
            />
            <InputComponent
                id={"deliveryCosts"}
                label={"Lieferkosten"}
                name={"deliveryCosts"}
                value={form.deliveryCosts}
                onChange={async (e) => {
                    handleTextChange(e.target)

                    if (e.target.value.length >= 1) {
                        setSonderPZN(["09999637"])
                    } else {
                        setSonderPZN(["02567024"])
                    }
                }}
            />
            <SelectComponent
                id={"sonderPZN"}
                label={"Sonder-PZN"}
                name={"sonderPZN"}
                value={form.sonderPZN && form.sonderPZN}
                values={[sonderPZN[0]]}
                onChange={(e) => handleTextChange(e, "sonderPZN")}
            />
            <SelectComponent
                id={"factor"}
                label={"Faktor"}
                name={"factor"}
                value={form.factor && form.factor}
                values={[
                    "1 - Abgabe nach Maßgabe des Rahmenvertrages nach § 129 SGB V oder leere Verordnungszeile",
                    "2 - Nichtverfügbarkeit eines rabattbegünstigten Fertigarzneimittels in allen Auswahl- bereichen nach § 9 Abs. 1 und 2 (§ 14 Abs. 1 S. 1 Alt. 1)",
                    "3 - Nichtverfügbarkeit eines preisgünstigen Fertigarzneimittels im generischen Markt (§ 14 Abs. 1 S. 1 Alt. 2) bzw. Abweichung von der Importabgabe im importrelevanten Markt aufgrund von Nichtverfügbarkeit (§ 14 Abs. 4 i. V. m. Abs. 1 S. 1 Alt. 2)",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9"
                ]}
                disabled={form.sonderPZN !== "02567024"}
                onChange={(e) => handleTextChange(e.substring(0, 1), "factor")}
            />
            <InputComponent
                id={"numberOfPacks"}
                label={"Verpackungsanzahl"}
                name={"numberOfPacks"}
                value={numberOfPacks}
                disabled={true}
            />
        </React.Fragment>
    )
}

export default Fields