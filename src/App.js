import React from 'react';
import PostForm from './Components/PostForm/PostForm';
// import Counter from './Components/Counter/Counter';

import PostList from './Components/PostList/PostList';
import MyInput from './Components/UI/Input/MyInput';
import MySelect from './Components/UI/MySelect/MySelect';
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

   // Состояние селекта
   const [selectedSort, setSelectedSort] = React.useState('');

   // Состояние инпута поиска
   const [search, setSearch] = React.useState('');

   // Хук для отслеживания изменения постов и состояния сортировки, возвращаю массив отсортированных постов
   const sortedPosts = React.useMemo(() => {
      if (selectedSort) {
         return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
      }
      return posts
   }, [posts, selectedSort]);

   // Хук для отслеживания изменения инпута поиска и отсортированного массива постов
   const sortedAndSearchedPosts =React.useMemo(()=>{
    return sortedPosts.filter((post)=>post.title.toLowerCase().includes(search))
   },[sortedPosts, search]);

   // Функция добовления постов, ее прокидываю пропсами в PostForm
   const createPost = (Newpost) => {
      setPosts([...posts, Newpost])
   }

   // Функция для удаления постов, ее прокидываю пропсами в PostItem через PostList
   const removePost = (post) => {
      setPosts(posts.filter((p) => p.id !== post.id))
   }

   // Функция сортировки постов
   const sortedPost = (sortPost) => {
      // setPosts([...posts].sort((a, b) => a[sortPost].localeCompare(b[sortPost])));
      setSelectedSort(sortPost)
   }

   return (

      <div className='App'>

         <PostForm
            create={createPost}
         />

         <MyInput
            placeholder={'Поиск...'}
            value={search}
            onChange={(event) => setSearch(event.target.value)}
         />

         <MySelect
            defaultValue={'Сортировка по...'}
            options={[
               { value: 'title', name: 'По наименованию' },
               { value: 'body', name: 'По описанию' }
            ]}
            value={selectedSort}
            onChange={sortedPost}

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
