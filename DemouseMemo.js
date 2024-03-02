import React, { useState } from 'react'

const DemouseMemo = () => {
    const [text, setText] = useState(null)
  return (
    <div className='m-6 p-2'>
        <input type='text' value={text} onChange={(e)=> setText(e.target.value)} ></input>
      
    </div>
  )
}

export default DemouseMemo
