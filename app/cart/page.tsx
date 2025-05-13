import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Trendinds from '../components/Trendinds'

const cartPage = () => {
  return (
    <div>

      <NavBar/>
      <h1 className="text-2xl font-bold text-center mt-8">Carts Page</h1>
      <Trendinds/>
      <Footer/>
      
    </div>
  )
}

export default cartPage
