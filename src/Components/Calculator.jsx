import React from 'react'
import { useState } from 'react';

function Calculator() {

    const [DOB, setDOB] = useState("");
    const [age, setAge] = useState("");
    
    const calculateAge= () =>{
      const today = new Date();
      const selectedDate  = new Date(DOB);

      let calculatedAge = today.getFullYear() - selectedDate.getFullYear();
      const months = today.getMonth() - selectedDate.getMonth();

      if(months < 0 || (months === 0 && today.getDate() < selectedDate.getDate())){
        calculatedAge--;
      }


      setAge(calculatedAge);
    }
    
  
    return (

    <div className=' shadow-2xl animate-border rounded-xl inline-block  bg-white bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 bg-[length:400%_400%] p-[3px]'>
        <div className='space-y-8 flex flex-col items-center p-10 bg-white rounded-xl '>
        <h1 className='mx-auto w-fit text-4xl font-bold'>Age Calculator</h1>
        <h4 className='font-semibold text-sm'>Enter your date of birth</h4>

        <input onChange={(event) => setDOB( event.target.value)} name='dob' className='p-2 border-[1px] w-full text-sm rounded-lg font-thin focus:outline-none focus:border-black/30'  type="date" />
        <button onClick={calculateAge} className=' bg-white text-slate-500 border-2 px-3 py-2 rounded-lg text-sm hover:bg-slate-100'>Calculate Age</button>
        </div>
        {!age && <div className='rounded-b-xl p-5 py-5 flex justify-center items-center mt-1'>
                    <h3 className='text-2xl font-bold text-white' >Made By - Aayush Yadav</h3>
        </div>}
        {age && <div className='rounded-b-xl p-5 flex justify-center items-center mt-1'>
                    <h3 className='text-2xl font-bold text-white' >Your are {age} years old!</h3>
                </div>
        }


    </div>
  )
}

export default Calculator
