import React from "react"

export default function SkillsClass(props) {
    const [skillNums, setSkillNums] = React.useState(0)

    function increment() {
        setSkillNums(prevSkillNums => prevSkillNums + 1)
    }
    
    function decrement() {
        setSkillNums(prevSkillNums => prevSkillNums - 1)
    }

    return (
        <div>
            {props.name}: {(skillNums > props.totalPointsAvailable) ? setSkillNums(0) : skillNums}
            <button onClick={() => increment()}>+</button>
            <button onClick={() => decrement()}>-</button> 
            (Modifier: {props.attributeModifier}): {props.modifierValue} Total: {skillNums + props.modifierValue}
        </div>
    )
}