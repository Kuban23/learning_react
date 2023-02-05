import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context';
import MyButton from '../Button/MyButton';

const Navbar = () => {

   const { isAuth, setIsAuth } = useContext(AuthContext);

   //Функция для выхода из приложения
   const logout = () => {
      setIsAuth(false)
      localStorage.removeItem('auth')
   }

   return (
      <div className='navbar'>
         <Link className='navbar__links' to='/about'>О проекте</Link>
         <Link className='navbar__links' to='/posts'>Посты</Link>
         <Link className='navbar__links navbar__btn' onClick={logout}>Выход</Link>
      </div>
   )
}

export default Navbar