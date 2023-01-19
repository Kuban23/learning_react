import React, { useContext } from 'react'
import { AuthContext } from '../../Context';
import MyButton from '../UI/Button/MyButton'
import MyInput from '../UI/Input/MyInput'

const Login = () => {

   const { isAuth, setIsAuth } = useContext(AuthContext);

   // Функция для сабмита
   const login = (event) => {
      event.preventDefault();
      setIsAuth(true)
      localStorage.setItem('auth','true')
   }

   return (
      <div>
         <h1>Страница для логина</h1>
         <form onSubmit={login}>
            <MyInput type='text' placeholder='Введи логин'></MyInput>
            <MyInput type='password' placeholder='Введи пароль'></MyInput>
            <MyButton>Войти</MyButton>
         </form>

      </div>
   )
}

export default Login