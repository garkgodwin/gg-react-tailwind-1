import React from 'react'

const Card = ({ shadow=true, children}) => {
  const shadowName= shadow ? 'shadow-md': '';
  return (
    <div className={`${shadowName} primary-text-color flex flex-col items-center justify-center text-center p-4 h-full`}>{children}</div>
  )
}

export default Card