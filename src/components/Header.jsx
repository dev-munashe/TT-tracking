import React from 'react';
//import PropTypes from 'prop-types'
import Button from "./Button";


const Header = ({title, handleClick, showAdd}) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color={ showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={handleClick} />
    </header>
  )
}

Header.defaultProps ={
    title: "Task Tracker",
}


export default Header
