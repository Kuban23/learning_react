import About from "../../Components/Pages/About";
import PostIdPage from "../../Components/Pages/PostIdPage";
import Posts from "../../Components/Pages/Posts";

export const routers = [
   { path: '/about', element: <About />, exact: true },
   { path: '/posts', element: <Posts />, exact: true },
   { path: '/posts/:id', element: <PostIdPage />, exact: true },
]; 
