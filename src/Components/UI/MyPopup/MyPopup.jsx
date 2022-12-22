import React from 'react';
import './MyPopup.css';

const MyPopup = ({ activePopup, setActivePopup, children }) => {

//Реализация закрытия popup по клавише Esc и клике по оверлей
React.useEffect(() => {
   function handleEscCloseModal(event) {
		if (event.key == 'Escape') {
         setActivePopup(false);
		}       
   }
    window.addEventListener('keydown', handleEscCloseModal);
      return () => {
      window.removeEventListener('keydown', handleEscCloseModal);      
   }
}, [])


   return (
      <div className={activePopup ? 'myPopup active' : 'myPopup'} onClick={() => setActivePopup(false)}>

         <div className={activePopup ? 'myPopupContent active' : 'myPopupContent'} onClick={(event)=> event.stopPropagation()}>
            {children}
         </div>
      </div>
   )
}

export default MyPopup