import React from 'react'
import Navbar from '@/components/Navbar'

function IntechPage() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="z-[-1] w-[100vw] h-[100vh] flex items-center justify-center absolute top-0 left-0">
        <h1 className="text-[5vw]">Coming soon!</h1>
      </div>
    </div>
  )
}

export default IntechPage