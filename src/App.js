import React from 'react';
// import Counter from './Components/Counter/Counter';

import PostList from './Components/PostList/PostList';
import Mybutton from './Components/UI/Button/Mybutton';
import MyInput from './Components/UI/Input/MyInput';

import './styles/App.css';




function App() {

   // Состояние, массив постов.
   const [posts, setPosts] = React.useState([
      {id: 1, title: 'JavaScript', body: 'Язык программирования'},
      {id: 2, title: 'React', body: 'Библиотека'},
      {id: 3, title: 'NodeJS', body: 'Бэк'},
   
   ]);

      const addNewPost = (event) => {
         event.preventDefault()
         const newPost = {
            id: Date.now(),
            title: 'title',
            body: 'body'
         }
         setPosts([...posts, newPost])

      }

   
    return (

        <div className='App'>

         <form>             
            <MyInput 
            type='text'
            placeholder='Название'              
            />
            <MyInput type='text' 
            placeholder='Описание поста'           
            /> 
            <Mybutton onClick={addNewPost}>Создать пост</Mybutton>
         </form>

         <PostList
         posts={posts}
         />
         

        </div>       

     
                    
         
   );
}
export default App;
