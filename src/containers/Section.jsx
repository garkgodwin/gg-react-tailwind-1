import React from 'react'

const Section = ({id="", children}) => {
  return (
    <section id={id} className="p-16 py-24 relative bg-cover bg-top min-h-[75vh] flex flex-col justify-center items-center text-black">
      {children}
    </section>
  )
}

export default Section