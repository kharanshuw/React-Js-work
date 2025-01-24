import React from "react";
import { useParams } from "react-router";
import { Navbar } from "./Navbar";


export function User() {
    let param = useParams();
    return(
        <div>
            <Navbar></Navbar>

            {/* do not forget to pass the parameter */}
            hello {param.username}
        </div>
    );
}