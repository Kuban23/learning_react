
import React, { useEffect } from 'react';
import AppRouter from './Components/AppRouter/AppRouter';
import Navbar from './Components/UI/Navbar/Navbar';
import { AuthContext } from './Context';
import './styles/App.css';

function App() {

   // Состояние авторизации
   const [isAuth, setIsAuth] = React.useState(false);

   // Проверяем авторизован пользователь или нет
   useEffect(() => {
      if (localStorage.getItem('auth')) {
         setIsAuth(true)
      }
   }, [])

   return (
      <AuthContext.Provider value={{ isAuth, setIsAuth: setIsAuth }}>
         <Navbar />
         <AppRouter />
      </AuthContext.Provider>

   );
}
export default App;
