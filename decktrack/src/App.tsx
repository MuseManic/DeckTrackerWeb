import { useState } from 'react'

import './App.css'

function App() {


  return (
    <>
    
    <div>

    <h1 className=" flex-1 bg-orange-500">DeckBuilder</h1>

      <div className='flex justify-center p-8'>

        <div className='m-0 p-6 bg-blue-300'>
            <a className='font-bold rounded m-2 p-6 border-2 border-solid border-blue-700 bg-blue-500 hover:bg-emerald-400'>Home</a>
            <a className='font-bold rounded m-2 p-6 border-2 border-solid border-blue-700 bg-blue-500 hover:bg-emerald-400'>About</a>
            <a className='font-bold rounded m-2 p-6 border-2 border-solid border-blue-700 bg-blue-500 hover:bg-emerald-400'>Contact</a>
            <div>
            </div>
        </div>
      
      </div>

    </div>
    </>
  )
}

export default App
