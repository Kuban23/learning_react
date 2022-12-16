import React from 'react';
// import Counter from './Components/Counter/Counter';
import PostItem from './Components/PostItem/PostItem';

import './styles/App.css';




function App() {

   // Состояние, массив постов.
   const [posts, setPosts] = React.useState([
      {id: 1, title: 'JavaScript', body: 'Язык программирования'},
      {id: 2, title: 'React', body: 'Библиотека'},
      {id: 3, title: 'NodeJS', body: 'Бэк'},
   
   ]);
   
    return (

        <div className='App'>

         {posts.map((post)=> <PostItem key={post.id} post={post}/>)}
         

        </div>       

     
                    
         
   );
}
export default App;
