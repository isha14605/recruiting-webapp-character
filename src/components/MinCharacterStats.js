import React from "react"
import { CLASS_LIST } from "../consts"

export default function MinCharacterStats(props) {
    return (
        <div>
            <h3> {props.characterName} Minimum Requirements </h3>
            Strength: {CLASS_LIST[props.characterName].Strength} <br></br>
            Dexterity: {CLASS_LIST[props.characterName].Dexterity} <br></br>
            Constitution: {CLASS_LIST[props.characterName].Constitution} <br></br>
            Intelligence: {CLASS_LIST[props.characterName].Intelligence} <br></br>
            Wisdom: {CLASS_LIST[props.characterName].Wisdom} <br></br>
            Charisma: {CLASS_LIST[props.characterName].Charisma}
        </div>
    )
}