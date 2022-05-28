import { FormControl, FormLabel, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper } from '@chakra-ui/react';
import React from 'react'
import InputComponent from '../../components/Input'
import SelectComponent from '../../components/Select'

const bool = [
    "Ja",
    "Nein",
];


const Fields = ({ form, handleTextChange, noctuInTime, sonderPZN, setSonderPZN, numberOfPacks, userIsDoctor, setNumberOfPacks = function () { } }) => {
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
                defaultValue={form.workAccident && form.workAccident}
                disabled={!userIsDoctor}
            />
            <InputComponent
                id={"workAccidentDate"}
                label={"Arbeitsunfalltag"}
                name={"workAccidentDate"}
                type={"text"}
                value={form.workAccident === "Ja" ? form.workAccidentDate : ""}
                disabled={form.workAccident === "Nein" ? true : !userIsDoctor && true}
            />
            <SelectComponent
                id={"fees"}
                label={"Gebühren (falls der Patient unter 18 ist muss hier Nein ausgewählt werden)"}
                name={"fees"}
                value={form.fees && form.fees}
                values={bool}
                onChange={(e) => handleTextChange(e, "fees")}
                defaultValue={form.fees && form.fees}
            />
            <SelectComponent
                id={"noctu"}
                label={"Noctu (nur auswehlbar zwischen 22 Uhr und 6 Uhr morgens)"}
                name={"noctu"}
                value={form.noctu && form.noctu}
                values={bool}
                onChange={(e) => handleTextChange(e, "noctu")}
                disabled={noctuInTime() || userIsDoctor}
                defaultValue={form.noctu && form.noctu}
            />
            <InputComponent
                id={"other"}
                label={"Sonstiges"}
                name={"other"}
                type={"text"}
                value={form.other}
                onChange={(e) => handleTextChange(e.target)}
                disabled={true}
            />
            <SelectComponent
                id={"subjectToJustification"}
                label={"Begründungspflichtig"}
                name={"subjectToJustification"}
                value={form.subjectToJustification && form.subjectToJustification}
                values={bool}
                onChange={(e) => handleTextChange(e, "subjectToJustification")}
                defaultValue={form.subjectToJustification && form.subjectToJustification}
                disabled={userIsDoctor}
            />

            <InputComponent
                id={"deliveryCosts"}
                label={"Lieferkosten"}
                name={"deliveryCosts"}
                icon={'€'}
                value={form.deliveryCosts}
                disabled={userIsDoctor}
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
                defaultValue={form.sonderPZN && form.sonderPZN}
                disabled={userIsDoctor}
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
                    "4 - Nichtverfügbarkeit eines rabattbegünstigten Fertigarzneimittels (§ 14 Abs. 1 S. 1 Alt. 1) sowie eines preisgünstigen Fertigarzneimittels im generischen Markt (§ 14 Abs. 1 S. 1 Alt. 2) oder Nichtverfügbarkeit eines rabattbegünstigten Fertigarzneimittels (§ 14 Abs. 1 S. 1 Alt. 1) sowie Abweichung von der Importabgabe im importrelevanten Markt aufgrund von Nichtverfüg- barkeit (§ 14 Abs. 4 i. V. m. Abs. 1 S. 1 Alt. 2)",
                    "5 - Nichtabgabe eines rabattbegünstigten Fertigarzneimittels aufgrund eines dringenden Falles zur unverzüglichen Abgabe eines Fertigarzneimittels in allen Auswahlbereichen nach § 9 Abs. 1 und 2 (§ 14 Abs. 2)",
                    "6 - Nichtabgabe eines rabattbegünstigten sowie eines preisgünstigen Fertigarzneimittels aufgrund eines dringenden Falles zur unverzüglichen Abgabe eines Fertigarzneimittels im generischen Markt (§ 14 Abs. 2 – rabattbegünstigtes Fertigarzneimittel nicht vorhanden bzw. nicht vorrätig und auch preisgünstiges Fertigarzneimittel nicht vorrätig) oder Nichtab- gabe eines rabattbegünstigten Fertigarzneimittels sowie Abweichung von der Importab- gabe aufgrund eines dringenden Falles zur unverzüglichen Abgabe eines Fertigarznei- mittels im importrelevanten Markt (§ 14 Abs. 2 sowie § 14 Abs. 4 i. V. m. Abs. 2 – rabattbe- günstigtes Fertigarzneimittel nicht vorhanden bzw. nicht vorrätig und auch preisgünstiges Importarzneimittel nicht vorrätig)",
                    "7 - Abgabe eines vom Versicherten verlangten „Wunscharzneimittels“ (§ 15)",
                    "8 - Nichtabgabe eines rabattbegünstigten Arzneimittels aufgrund sonstiger Bedenken nach § 17 Abs. 5 S. 2 Apothekenbetriebsordnung in allen Auswahlbereichen nach § 9 Abs. 1 und 2 (§ 14 Abs. 3)",
                    "9 - Nichtabgabe eines rabattbegünstigten Fertigarzneimittel sowie eines preisgünstigen Fertigarzneimittels aufgrund sonstiger Bedenken nach § 17 Abs. 5 S. 2 Apothekenbetriebs- ordnung im generischen Markt (§ 14 Abs. 3 – sonstige Bedenken gegen das rabattbe- günstigte Fertigarzneimittel (sofern vorhanden) und gegen das preisgünstige Fertigarznei- mittel) oder Nichtabgabe eines rabattbegünstigten Fertigarzneimittels sowie Abweichung von der Importabgabe aufgrund sonstiger Bedenken nach § 17 Abs. 5 S. 2 Apothekenbe- triebsordnung im importrelevanten Markt (§ 14 Abs. 4 i. V. m. Abs. 3 – sonstige Bedenken gegen das rabattbegünstigte Fertigarzneimittel (sofern vorhanden) und gegen das preis- günstige Importarzneimittel)"
                ]}
                disabled={form.sonderPZN !== "02567024" || userIsDoctor}
                onChange={(e) => handleTextChange(e.substring(0, 1), "factor")}
                defaultValue={form.factor && form.factor}
            />
            <FormControl id={"numberOfPacks"} isDisabled={userIsDoctor}>
                <FormLabel>Verpackungsanzahl</FormLabel>
                <NumberInput value={numberOfPacks} onChange={(e) => setNumberOfPacks(e)} disabled={userIsDoctor}>
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
            </FormControl>
        </React.Fragment>
    )
}

export default Fields