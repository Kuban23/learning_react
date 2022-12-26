import React from 'react'
import './MySelect.css';

const MySelect = ({defaultValue, options, value, onChange}) => {
  return (

	<select className='select' onChange={(event)=> onChange(event.target.value)} value={value} style={{marginTop: '20px'}}>

<option disabled>{defaultValue}</option>
	{options.map((option)=> 
	<option className='option' key ={option.value} value={option.value}>{option.name}</option>)}
</select>
  )
}

export default MySelect