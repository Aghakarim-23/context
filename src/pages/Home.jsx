import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='h-screen flex flex-col gap-2 justify-center items-center text-2xl'>
        <p>Home</p>
        <Link to={'/login'} className='border px-2 py-2 rounded-md'>Login to site</Link>
    </div>
  )
}

export default Home