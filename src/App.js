import React from 'react';
import PostForm from './Components/PostForm/PostForm';
// import Counter from './Components/Counter/Counter';

import PostList from './Components/PostList/PostList';
// import Mybutton from './Components/UI/Button/Mybutton';
// import MyInput from './Components/UI/Input/MyInput';

import './styles/App.css';




function App() {

   // Состояние, массив постов.
   const [posts, setPosts] = React.useState([
      { id: 1, title: 'JavaScript', body: 'Язык программирования' },
      { id: 2, title: 'React', body: 'Библиотека' },
      { id: 3, title: 'NodeJS', body: 'Бэк' },

   ]);

   // Функция добовления постов, ее мы прокидываем пропсами в PostForm
   const createPost = (Newpost) => {
      setPosts([...posts, Newpost])
   }


   return (

      <div className='App'>

         <PostForm
            create={createPost}
         />

         {/* <form>             
            <MyInput 
            type='text'
            placeholder='Название' 
            value={title} 
            onChange={(event)=> setTitle(event.target.value)}            
            />
            <MyInput type='text' 
            placeholder='Описание поста' 
            value={body}    
            onChange={(event)=> setBody(event.target.value)}       
            /> 
            <Mybutton onClick={addNewPost}>Создать пост</Mybutton>
         </form> */}

         <PostList
            posts={posts}
         />


      </div>




   );
}
export default App;
