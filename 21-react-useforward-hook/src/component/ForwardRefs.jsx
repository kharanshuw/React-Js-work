import React from "react";
import { useRef } from "react";
import { forwardRef } from "react";
import { useId } from "react";


/**
 * This is the parent component. 
 * It contains a form with two Childcomponent instances and a submit button. 
 * It uses useRef to create refs that it will forward to the Childcomponent instances.
 * @returns 
 */
const ForwardRefs = () => {

    const username = useRef(null);
    const password = useRef(null);


    const handlesubmit = (e) => {
        e.preventDefault();
        console.log("username :");
        console.log(username.current.value);

        console.log("password");
        console.log(password.current.value);
    }



    return (
        <form onSubmit={handlesubmit}>
            <Childcomponent label="username" ref={username} />


            <Childcomponent label="password" ref={password} />




            <button type="submit">
                submit
            </button>
        </form>
    )
}








// childcomponent with forwardref
const Childcomponent = forwardRef(
    (props, ref) => {
        const id = useId();

        return (
            <div>
                <label htmlFor={id}>{props.label}</label>
                <input type="text" ref={ref} />
            </div>
        )
    }
)


const Childcomponent2 = (props) => {
    const id = useId();

    return (
        <div>
            <label htmlFor={id}>{props.label}</label>
            <input type="text" ref={props.ref} />
        </div>
    )
}


export { ForwardRefs, Childcomponent }