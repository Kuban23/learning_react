import React from 'react';
import PostFilter from './Components/PostFilter/PostFilter';
import PostForm from './Components/PostForm/PostForm';
// import Counter from './Components/Counter/Counter';

import PostList from './Components/PostList/PostList';
// import MyInput from './Components/UI/Input/MyInput';
// import MySelect from './Components/UI/MySelect/MySelect';
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

   // Общее состояние поиска и сортировки постов
   const [filter, setFilter] = React.useState({ sort: '', query: '' });

   // Хук для отслеживания изменения постов и состояния сортировки, возвращаю массив отсортированных постов
   const sortedPosts = React.useMemo(() => {
      if (filter.sort) {
         return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
      }
      return posts
   }, [posts, filter.sort]);

   // Хук для отслеживания изменения инпута поиска и отсортированного массива постов
   const sortedAndSearchedPosts = React.useMemo(() => {
      return sortedPosts.filter((post) => post.title.toLowerCase().includes(filter.query))
   }, [sortedPosts, filter.query]);

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
