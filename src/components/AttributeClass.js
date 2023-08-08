import React from "react"

export default function AttributeClass(props) {
    function increment() {
        props.handleNums(prevNums => ({
            ...prevNums,
            [props.name]: prevNums[props.name] + 1
        }))
    }

    function decrement() {
        props.handleNums(prevNums => ({
            ...prevNums,
            [props.name]: prevNums[props.name] - 1
        }))
    }


    return (
        <div>
            {props.name}: {props.nums[props.name]}
            <button onClick={() => increment()}>+</button>
            <button onClick={() => decrement()}>-</button>
        </div>
    )
}