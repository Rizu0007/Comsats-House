import React from 'react'

function Header() {
  return (
    <header className='bg-slate-300 shadow-md'>
  <div className='flex justify-between items-center max-w-6xl mx-auto p-3 '>
        <h1 className='font-bold text-sm sm:text-xl flex-wrap'>
         <span className='text-slate-700'> Comsats Hub</span>
          <span className='text-slate-500'></span>

        </h1>
        <form>
        <input
            type='text'
            placeholder='Search...'
            className='bg-transparent focus:outline-none w-24 sm:w-64'
          />
        </form>
        </div>
    </header>
  )
}

export default Header
