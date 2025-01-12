import React, { useCallback, useEffect, useState } from 'react'

function Test() {


    let [state, setState] = useState(0);


    // increase state start
    function increseState() {
        setState((prevState) => {
            return prevState + 1;
        });
    }
    // increase state end

    // decrease state start 
    function decreaseState() {
        setState((prevState) => {
            return prevState - 1;
        });
    }
    // decrease state end



    // callback function for giving message counter mounted
    let counterMounted = useCallback(() => {
        console.log("counter mounted");

    }, []);


    // use effect for component at mount start
    useEffect(() => {
        counterMounted();
    }, [counterMounted]);
    // use effect for component at mount end 


    // callback for update component    
    let counterUpdated = useCallback(
    ()=>{
        console.log("counter updated");
        
    },[state]
    );


    // use effect for update conponent 
    useEffect(
        ()=>{
            counterUpdated();
        },[counterUpdated]
    );


    //callback for tracking component unmounted
    let componentUnmounted = useCallback(
        ()=>{
            console.log("component unmounted");
        },[]
    );

    // use effect for tracking component unmounted
    useEffect(
        ()=>{
            return componentUnmounted;
        },[componentUnmounted]
    )


    let callme = useCallback(
        ()=>{},[]
    );

    useEffect(
        ()=>{},[callme]
    );


    return (



        <div className=''>

            <div className='flex text-center justify-center content-center mb-5 border border-solid border-2 rounded-md text-2xl font-bold'>
                {state}
            </div>

            <div className='flex text-center justify-center content-center'>
                <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={increseState}>increseState</button>
                <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={decreaseState}>decreaseState</button>

            </div>


        </div>
    )
}

export default Test