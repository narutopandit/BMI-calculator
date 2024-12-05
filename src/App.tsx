
import { useState } from 'react'
import './App.css'

function App() {

  const [weight,setWeight] = useState(80);
  const [height,setHeight] = useState(120);
  const output = weight/(height/100);
  return (
    <div className='flex h-screen w-screen justify-center items-center bg-slate-300'>
    <div className='bg-white rounded-md w-2/5 flex flex-col items-center h-1/2 border-0'>
      <div className='py-9 text-white bg-blue-600 w-full flex justify-center text-2xl font-semibold border-0 rounded-t-md'>
        <h1>BMI Calculator</h1>
      </div>
      <div className='w-full'>
        <div className='my-6 w-full flex flex-col items-center'>
          <p className='w-3/4 p-2 font-medium'>Weight {weight} kg</p>
          <input className='w-3/4' type="range" min={20} max={250} onChange={(e)=>setWeight(Number(e.target.value))}/>
        </div>
        <div className='my-6 w-full flex flex-col items-center'>
          <p className='w-3/4 p-2 font-medium'>Weight {height} cm</p>
          <input className='w-3/4' type="range" min={80} max={3000} onChange={(e)=>setHeight(Number(e.target.value))}/>
        </div>
      </div>
      <div className=' bg-blue-600 text-white p-2 rounded-md'>
        <p>Your BMI is {output.toFixed(2)}</p>
      </div>
    </div>
    </div>
  )
}

export default App
