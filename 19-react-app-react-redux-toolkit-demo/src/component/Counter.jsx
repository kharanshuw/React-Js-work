import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux-store/slice/counter/index';

function Counter() {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">



      <div className="bg-white p-8 rounded-lg shadow-lg text-center">



            <h1 className="text-3xl font-bold mb-6">Count is {count}</h1>


            <div className="space-x-4">


                        <button
                            onClick={() => dispatch(increment())}
                            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
                        >
                            Increment
                        </button>




                        <button
                            onClick={() => dispatch(decrement())}
                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
                        >
                            Decrement
                        </button>



        </div>




      </div>




    </div>
  );
}

export default Counter;
