import { useState } from "react";
import React from "react";

function Chai() {

    let initialValue = 5;

    let [newvalue, setNewValue] = useState(initialValue);




    function addValue() {
        console.log("hello pratik");
        newvalue = newvalue + 5;
        console.log(newvalue);
        setNewValue(newvalue);

    }

    function removeValue()
    {
        console.log("value before minus 5 is "+{newvalue});
        newvalue = newvalue - 5;
        console.log("value after minus 5 is "+{newvalue});
        setNewValue(newvalue);
    }

    return (
        <>
            <h1>INITIAL VALUE IS {newvalue}</h1>
            <button onClick={addValue}>Add 5</button>
            <br />
            <button onClick={removeValue}>Minus 5</button>
        </>
    )
}

export default Chai;