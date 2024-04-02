import React from 'react'
export default function Item ({name,quantity,category, onSelect}) {
  return (
    <div >
    <ul className='border p-2 m-4 bg-purple-900 text-white' onClick={()=>onSelect(name)}>
      <li className='text-xl font-bold' onClick={()=>onSelect(name)} >{name}</li>
      <li className='text-sm ' onClick={()=>onSelect(quantity,category)}>Buy {quantity} in {category}</li>
    </ul>
    </div>
  )
}