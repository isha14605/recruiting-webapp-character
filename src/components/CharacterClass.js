import React from "react"
import { CLASS_LIST } from "../consts";
import _ from 'lodash';
import MinCharacterStats from "./MinCharacterStats";

export default function CharacterClass(props) {
    var meetsMinAttributes = false;

    // checks if the attributes match the minimum requirements for the character
    if (_.isEqual(props.nums, CLASS_LIST[props.name])) {
        meetsMinAttributes = true;
    }

    const [isShown, setIsShown] = React.useState(false);

    function handleClick() {
        setIsShown(current => !current)
    }

    return (
        <div>
            <h4 style={{color: meetsMinAttributes ? "red": "white"}}
                onClick={handleClick}> {props.name} </h4>
            {isShown && <MinCharacterStats characterName={props.name}/>}
            {isShown && (
                <div>
                    <button className="hidden-button" onClick={handleClick}> Close Requirements </button>
                </div>
            )}
        </div>
    )
}