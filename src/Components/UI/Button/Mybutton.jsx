import React from 'react';
import classes from './MyButton.module.css';


const Mybutton = (props) => {
  return (
	 <div>
		<button className={classes.myBtn} {...props}>{props.children}</button>
	 </div>
  )
}

export default Mybutton