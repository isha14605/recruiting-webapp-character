import React from "react"

export default function AttributeClass(props) {
    function checkMaximum() {
        const attributeValues = Object.values(props.nums)
        var totalAttributes = 0
        for (let i=0; i < attributeValues.length; i++) {
            totalAttributes += attributeValues[i]
        }
        return totalAttributes
    }

    var canIncrement = true;
    function increment() {
        if (checkMaximum() === 70) {
            alert("The total of all attributes is 70. It cannot be higher.")
            canIncrement = false;
        }

        if (canIncrement) {
            props.handleNums(prevNums => ({
                ...prevNums,
                [props.name]: prevNums[props.name] + 1
            }))
        }
    }

    function decrement() {
        props.handleNums(prevNums => ({
            ...prevNums,
            [props.name]: prevNums[props.name] - 1
        }))
    }

    function getModifier(attributeVal) {
        return Math.floor((attributeVal - 10) / 2)
    }


    return (
        <div>
            {props.name}: {props.nums[props.name]} (Modifier: {getModifier(props.nums[props.name])})
            <button onClick={() => increment()}>+</button>
            <button onClick={() => decrement()}>-</button>
        </div>
    )
}