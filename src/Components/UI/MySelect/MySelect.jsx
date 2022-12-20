import React from 'react'

const MySelect = ({defaultValue, options, value, onChange}) => {
  return (

	<select onChange={(event)=> onChange(event.target.value)} value={value} style={{marginTop: '20px'}}>

<option disabled>{defaultValue}</option>
	{options.map((option)=> 
	<option key ={option.value} value={option.value}>{option.name}</option>)}
</select>
  )
}

export default MySelect