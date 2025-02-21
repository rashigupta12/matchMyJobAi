import React from 'react'
import Footer from '~/components/footer'
import Navbar from '~/components/navbar'

const AboutUs: React.FC  = () => {
  return (
  <div>
    <div className="min-h-screen w-full bg-gray-50  overflow-hidden">
      <Navbar/>
      <div className=' max-w-lg mx-auto mt-32 mb-32 bg-white p-6 rounded-lg shadow-md  '> AboutUs</div>
      
    </div>
    <Footer/>
    </div>
  )
}

export default AboutUs