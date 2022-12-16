import React from 'react'

const Counter = () => {

	const [counter, setCounter] =React.useState(0);

   function increment () {
    setCounter(counter + 1)
   }

   function decrement () {
      setCounter(counter - 1)
     }
     
  return (
	 <div>
		 <h1>{counter}</h1>
         <button onClick={increment}>Плюс</button>
         <button onClick={decrement}>Минус</button>
	 </div>
  )
}

export default Counter