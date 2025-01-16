import React from 'react'

function Test() {

    const fruits = ["Apple", "Mango", "Banana"];


    return (
        <div>
            {
                fruits.map((fruit) => (


                    <p key={fruit}>
                        {fruit}
                    </p>
                ))
            }





        </div>
    )
}

export default Test