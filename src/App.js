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

   // Состоние инпутов для добавления постов
   const [title, setTitle] = React.useState('');
   const [body, setBody] = React.useState('');

      const addNewPost = (event) => {
         event.preventDefault()
         const newPost = {
            id: Date.now(),
            title: title,
            body: body
         }
         setPosts([...posts, newPost])
         setTitle('')
         setBody('')

      }

   
    return (

        <div className='App'>

         <form>             
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
         </form>

         <PostList
         posts={posts}
         />
         

        </div>       

     
                    
         
   );
}
export default App;
