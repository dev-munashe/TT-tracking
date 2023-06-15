import React from 'react';
//import PropTypes from 'prop-types'
import Button from "./Button";


const Header = (props) => {
  return (
    <header className='header'>
      <h1>{props.title}</h1>
      <Button color="green" text='Add' onClick={props.handleClick} />
    </header>
  )
}

Header.defaultProps ={
    title: "Task Tracker",
}


export default Header
