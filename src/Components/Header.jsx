import React from 'react'

const Header = () => {
  return (
    <div className='p-10 space-y-10'>
      <h1 className='text-5xl font-extrabold'>Ethanus MERN - Internship</h1>

      <div className='flex space-x-2 items-center '>

        <a className='px-10 border-2 hover:bg-black hover:text-white py-8 border-black/10  rounded-xl font-bold text-xl' href='https://github.com/AayushYadav2002/Age-Calculator'> Github</a>
        <h2 className='text-xl py-8 hover:border-black/20 border-black/10 cursor-pointer px-10  border-2 rounded-xl'>Task - 5</h2>
        <div className='px-10 border-2  py-6 border-black/10 cursor-pointer hover:border-black/20  rounded-xl font-bold text-xl'>
          <h3 className='font-normal text-lg'>Aayush Yadav - 20BCE10401</h3>
          <p className='font-thin text-sm'>aayush.yadav2020@vitbhopal.ac.in</p>
        </div>
      </div>



    </div>
  )
}

export default Header
