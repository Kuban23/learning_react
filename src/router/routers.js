import About from "../Components/Pages/About";
import Login from "../Components/Pages/Login";
import PostIdPage from "../Components/Pages/PostIdPage";
import Posts from "../Components/Pages/Posts";



export const privatRouts = [
   { path: '/about', element: <About />, exact: true },
   { path: '/posts', element: <Posts />, exact: true },
   { path: '/posts/:id', element: <PostIdPage />, exact: true },
   
];

export const publicRouts = [
   { path: '/login', element: <Login />, exact: true },
]; 