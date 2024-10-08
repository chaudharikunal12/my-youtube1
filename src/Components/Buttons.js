import React from 'react'

const Buttons = ({name}) => {
  return (
    <div>
        <button className='px-5 py-2 m-2 bg-slate-200 rounded-lg'>{name}</button>
    </div>
  )
}

export default Buttons