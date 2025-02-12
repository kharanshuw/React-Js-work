import './App.css'
import React from 'react';
import { useForm } from 'react-hook-form';


function App() {
  const { register, handleSubmit, watch, formState: { errors ,isSubmitting}, } = useForm();
  let onSubmit = data => console.log(data);

   onSubmit = async (data) => {
    
    await new Promise((resolve) => setTimeout(resolve, 5000));
    
    console.log("printing submited data" , data);



  }

  return (


    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">

        <h1 className="text-2xl font-bold mb-8 text-center text-gray-800">Register</h1>



        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">



          <div className="flex flex-col">
            <label htmlFor="firstname" className="mb-2 text-gray-600">First Name</label>
            <input
              type="text"
              {...register('firstname',
                {
                  required : true,
                  maxLength:{value:6,message:"maxLength of firstname is 6"},
                  minLength:{value:2,message:"minLength of lastname is 2"},

                }

              )}
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />



            {
              errors.firstname && <p className='text-red-600'>{errors.firstname.message}</p>
            }



          </div>




          <div className="flex flex-col">
            <label htmlFor="middlename" className="mb-2 text-gray-600">Middle Name</label>
            <input
              type="text"
              {...register('middlename',
                {
                  pattern:{
                    value:/^[a-zA-Z]+(['-]?[a-zA-Z]+)*$/,
                    message:"middlename is not as per rules",
                  }
                }

              )}
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />


            {
              errors.middlename && <p className='text-red-600'>
                {errors.middlename.message}
              </p>
            }
          </div>




          <div className="flex flex-col">
            <label htmlFor="lastname" className="mb-2 text-gray-600">Last Name</label>
            <input
              type="text"
              {...register('lastname')}
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>




          <button type="submit" className="w-full bg-purple-600 text-white py-3 rounded hover:bg-purple-700 transition duration-300"  
          disabled={isSubmitting}
          >
            {isSubmitting ? "submitting": "submit"}
          </button>
        </form>
      </div>
    </div>

  )
}

export default App;
