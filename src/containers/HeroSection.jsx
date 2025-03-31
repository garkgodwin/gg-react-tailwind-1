import React from 'react'
import heroBg  from '../assets/hero-bg-1.png';

const HeroSection = ({children}) => {
  return (
    <section style={{backgroundImage: `url(${heroBg})`}} className={`p-16 py-24 relative bg-cover bg-top min-h-[75vh] flex flex-col justify-center items-center text-black`}>
      {children}
      <div className="absolute inset-0 bg-gradient-to-t from-white"></div>
    </section>
  )
}

export default HeroSection