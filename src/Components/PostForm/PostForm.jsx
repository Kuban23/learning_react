import React from 'react';
import MyButton from '../UI/Button/MyButton';
import MyInput from '../UI/Input/MyInput';



const PostForm = ({ create }) => {

   // Состоние инпутов для добавления постов
   const [title, setTitle] = React.useState('');
   const [body, setBody] = React.useState('');

   // Функция добавления постов
   const addNewPost = (event) => {
      event.preventDefault()
      const newPost = {
         id: Date.now(),
         title: title,
         body: body
      }
      //setPosts([...posts, newPost])
      create(newPost)
      setTitle('')
      setBody('')

   }


   return (
      <form>
         <MyInput
            type='text'
            placeholder='Название'
            value={title}
            onChange={(event) => setTitle(event.target.value)}
         />
         <MyInput type='text'
            placeholder='Описание поста'
            value={body}
            onChange={(event) => setBody(event.target.value)}
         />
         <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
   )
}

export default PostForm