import React from 'react'

const Section = ({children}) => {
  return (
    <section className="p-16 py-24 relative bg-cover bg-top min-h-[75vh] flex flex-col justify-center items-center text-black">
      {children}
    </section>
  )
}

export default Section