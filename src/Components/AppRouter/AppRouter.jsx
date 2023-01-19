import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../../Context';
import { privatRouts, publicRouts } from '../../router/routers';


const AppRouter = () => {

   const { isAuth, setIsAuth } = useContext(AuthContext);

   return (
      <>
         {isAuth
            ?
            <Routes>
               {privatRouts.map((rout) =>
                  <Route
                     path={rout.path}
                     element={rout.element}
                     exact={rout.exact}
                     key={rout.path}
                  />)
               }
               <Route path='*' element={<Navigate to='/posts' replace />} />
            </Routes>
            :
            <Routes>
               {publicRouts.map((rout) =>
                  <Route
                     path={rout.path}
                     element={rout.element}
                     exact={rout.exact}
                     key={rout.path}
                  />)
               }
               <Route path='*' element={<Navigate to='/login' replace />} />
            </Routes>
         }

         {/* <Routes>
            {routers.map((rout) =>
               <Route
                  path={rout.path}
                  element={rout.element}
                  exact={rout.exact}
                  key={rout.path}
               />)
            }
            <Route path='*' element={<Navigate to='/posts' replace />} />
         </Routes> */}

      </>
   )
}

export default AppRouter