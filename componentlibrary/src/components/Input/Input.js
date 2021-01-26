import React from 'react'
import PropTypes from 'prop-types'
import './InputField.css'

export const Input = ({type,value,...props})=> {
  return (
  <input 
  type={type}
  value={value}
  className= ''
  />
  )
}

Input.PropTypes = {
  type : PropTypes.string.isRequired,
  value :PropTypes.string,
  onChange : PropTypes.func
}

Input.defaultProps = {
  type: null,
  value: 'search',
  onChange: undefined,
};