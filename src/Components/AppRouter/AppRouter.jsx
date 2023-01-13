import React from 'react'
import { Route, Routes } from 'react-router-dom';
import About from '../../Components/Pages/About';
import NotFoundPage from '../../Components/Pages/NotFoundPage';
import Posts from '../../Components/Pages/Posts';

const AppRouter = () => {
   return (
      <>
         <Routes>
            <Route path='/about' element={<About />} />
            <Route path='/posts' element={<Posts />} />
            <Route path='*' element={<NotFoundPage />} />
         </Routes>

      </>
   )
}

export default AppRouter