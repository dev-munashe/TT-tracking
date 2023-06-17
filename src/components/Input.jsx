import React, { useState } from 'react'

const Input = ({handleSubmit}) => {
    const [text, setItem] = useState('');
    const [day, setTime] = useState('');
    const [reminder, setReminder] = useState(false);

    function handleChange(e) {
        setItem(e.target.value)
    } 

    function handleTime(e) {
        setTime(e.target.value)
    }

    function onAdd(e) {
        e.preventDefault();
        
        handleSubmit({text, day, reminder});

        if(!text) {
            alert('Please add task');
            return
        }

        setItem('');
        setTime('');
        setReminder(false);
    }

  return (
    <form className='add-form' onSubmit={onAdd} >
        <div className='form-control'>
        <label>Task</label>
        <input placeholder='Add Task' value={text} onChange={handleChange} type="text" />
        </div>

        <div className='form-control'>
            <label>Day & Time</label>
            <input placeholder='Add Day & Time' type="text" name="time" value={day} onChange={handleTime} />
        </div>

        <div className='form-control form-control-check'>
            <label>Set Reminder</label>
            <input value={reminder} checked={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}  type="checkbox" />
        </div>
        <input className='btn btn-block' type='submit' value='Save Task' />
    </form>
  )
}

export default Input