import React from 'react'
import PropTypes from 'prop-types';
import './Button.css'

export const Button = ({primary,size,backgroundColor,label, ...props}) => {
  const actionMode = primary ? 'btn--primary' : 'btn--secondary';
  return (
  <button 
   type='button'
   className={['btn ', `btn--${size} `,actionMode].join('')}
   style={{backgroundColor}}
   {...props}
   >
     {label}
  </button>
  )
}

Button.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
Button.defaultProps = {
  backgroundColor: null,
  primary: true,
  size: 'medium',
  onClick: undefined,
};