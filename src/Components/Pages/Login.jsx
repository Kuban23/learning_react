import React, { useContext } from 'react'
import { AuthContext } from '../../Context';
import MyButton from '../UI/Button/MyButton';
import MyInput from '../UI/Input/MyInput';
import bxUser from '../../assets/img/bx-user.ico';
import bxLock from '../../assets/img/bx-lock.ico';
import '../../styles/components/login.css';

const Login = () => {

   const { isAuth, setIsAuth } = useContext(AuthContext);

   // Функция для сабмита
   const login = (event) => {
      event.preventDefault();
      setIsAuth(true)
      localStorage.setItem('auth','true')
   }

   return (
      // <div>
      //    <h1>Страница для логина</h1>
      //    <form onSubmit={login}>
      //       <MyInput type='text' placeholder='Введи логин'></MyInput>
      //       <MyInput type='password' placeholder='Введи пароль'></MyInput>
      //       <MyButton>Войти</MyButton>
      //    </form>
      // </div>
      
      <div className='box'>
         <form onSubmit={login} className='container'>
            <div className='top-header'>             
               <header>Рады видеть!</header>               
            </div>
            <div className='input-field'>
               <input className='input' type='text' placeholder='Введите логин' required/>
               <img className='bx bx-user' src={bxUser} alt="Иконка пользователя"/>
            </div>
            <div className='input-field'>
               <input className='input' type='text' placeholder='Введите пароль' required/>
               <img className='bx bx-lock' src={bxLock} alt="Иконка замка"/>
            </div>            
            <button className='submit'>Войти</button>
            <div className='bottom'>
               <div className='left'>
                  <input type="checkbox" id='check' />
                  <label className='check' htmlFor='check'>Запомнить меня</label>
               </div>
               <div className='right'>
               <label htmlFor='check'><a href="#">Забыл пароль?</a></label>
               </div>
            </div>

         </form>

      </div>

      
   )
}

export default Login