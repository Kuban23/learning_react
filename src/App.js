import React from 'react';
import PostFilter from './Components/PostFilter/PostFilter';
import PostForm from './Components/PostForm/PostForm';
import PostList from './Components/PostList/PostList';
import { usePosts } from './hook/usePosts';
import './styles/App.css';




function App() {

   // Состояние, массив постов.
   const [posts, setPosts] = React.useState([
      { id: 1, title: 'JavaScript', body: 'Язык программирования' },
      { id: 2, title: 'React', body: 'Библиотека' },
      { id: 3, title: 'NodeJS', body: 'Бэк' },

   ]);

   // Общее состояние поиска и сортировки постов
   const [filter, setFilter] = React.useState({ sort: '', query: '' });

   // Вызываю Хук usePosts
   const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);



   // Хук для отслеживания изменения инпута поиска и отсортированного массива постов


   // Функция добовления постов, ее прокидываю пропсами в PostForm
   const createPost = (Newpost) => {
      setPosts([...posts, Newpost])
   }

   // Функция для удаления постов, ее прокидываю пропсами в PostItem через PostList
   const removePost = (post) => {
      setPosts(posts.filter((p) => p.id !== post.id))
   }

   return (

      <div className='App'>

         <PostForm
            create={createPost}
         />

         <PostFilter
            filter={filter}
            setFilter={setFilter}
         />

         {
            sortedAndSearchedPosts.length !== 0
               ? <PostList posts={sortedAndSearchedPosts} remove={removePost} />
               : <h1 style={{ textAlign: 'center' }}>Посты не найдены</h1>
         }

      </div>




   );
}
export default App;
