export default function Item ({item, onSelect}) {
  return (
    <div >
    <ul className='border p-2 m-4 bg-purple-900 text-white' onClick={()=>onSelect(item)}>
      <li className='text-xl font-bold'  >{item.name}</li>
      <li className='text-sm ' >Buy {item.quantity} in {item.category}</li>
    </ul>
    </div>
  )
}