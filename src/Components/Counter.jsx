import React, { useState } from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';

function Counter() {
    // State creation
    const [counter,setCounter]=useState(0); // Apply 0 as initial state value

    // Function define
    function incrementCounter(){
        // increment by 1
        setCounter(counter+1)
    }

    function decrementCounter(){
        setCounter(counter-1)
    }

    function resetCounter(){
        setCounter(0)
    }

    return (
        <div>
            <div className='container text-center py-5 border border-3 rounded shadow my-5 w-50'>
                <h1>Counter App</h1>
                <h1>{counter}</h1>
                <div>
                    <MDBBtn className='m-2' onClick={incrementCounter}>INCREMENT</MDBBtn>
                    <MDBBtn className='m-2' onClick={decrementCounter}>DECREMENT</MDBBtn>
                    <MDBBtn className='m-2' onClick={resetCounter}>Reset</MDBBtn>
                </div>
            </div>
        </div>
    )
}

export default Counter