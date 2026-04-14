import React from 'react'
import Header from '../../components/landing//Header'
import Hero from '../../components/landing/Hero'
import Features from '../../components/landing/Features'
import Testimonials from '../../components/landing/Testimonials'
import FAQ from '../../components/landing/FAQ'
import Footer from '../../components/landing/Footer'
function LandingPage() {
  return (
    <div>
      <Header/>
      <main className='mb-[100vh]'>
        <Hero/>
        <Features/>
        <Testimonials/>
        <FAQ/>
        <Footer/>
      </main>
    </div>
  )
}

export default LandingPage
