import React, { useState } from 'react'

const Input = () => {
    const [item, setItem] = useState('');

    function handleChange(e) {
        setItem(e.target.value)
    }

  return (
    <div style={{borderColor: 'black'}} className='mb-5 container'>
        <div>
        <label style={{fontWeight: '700'}} htmlFor="text" >Add Task</label>
        <input style={{marginTop:'0'}} value={item} onChange={handleChange} className='form-control' type="text" />
        </div>
        <div>
            <label style={{fontWeight: '700'}} htmlFor="text">Set Reminder</label>
            <input type="text" name="reminder" className='form-control' />
        </div>
    </div>
  )
}

export default Input