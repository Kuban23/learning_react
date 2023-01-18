import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import About from '../../Components/Pages/About';
import NotFoundPage from '../../Components/Pages/NotFoundPage';
import Posts from '../../Components/Pages/Posts';
import { routers } from '../../hook/router/routers';
import PostIdPage from '../Pages/PostIdPage';

const AppRouter = () => {
   return (
      <>
         <Routes>

            {routers.map((rout) =>
               <Route
                  path={rout.path}
                  element={rout.element}
                  exact={rout.exact}
                  key={rout.path}
               />
            )
            }


            {/* <Route path='/about' element={<About />} />
            <Route exact path='/posts' element={<Posts />} />
            <Route exact path='/posts/:id' element={<PostIdPage />} /> */}
            {/* <Route path='*' element={<NotFoundPage />} /> */}
            <Route path='*' element={<Navigate to='/posts' replace />} />
         </Routes>

      </>
   )
}

export default AppRouter