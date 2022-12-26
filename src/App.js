import axios from 'axios';
import React from 'react';
import PostService from './API/PostService';
import PostFilter from './Components/PostFilter/PostFilter';
import PostForm from './Components/PostForm/PostForm';
import PostList from './Components/PostList/PostList';
import MyButton from './Components/UI/Button/MyButton';
import MyPopup from './Components/UI/MyPopup/MyPopup';
import { usePosts } from './hook/usePosts';
import './styles/App.css';




function App() {

   // Состояние, массив получаю от сервера.
   const [posts, setPosts] = React.useState([]);

   // Общее состояние поиска и сортировки постов
   const [filter, setFilter] = React.useState({ sort: '', query: '' });

   // Вызываю кастомный Хук usePosts
   const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

   // Состояние Popup
   const [activePopup, setActivePopup] = React.useState(false)

   // Хук для отслеживания изменения массива прстов
   React.useEffect(() => {
      feachPosts()
   }, []);

   // Функция для запроса массива постов
   async function feachPosts() {
      const posts = await PostService.getAll()
      setPosts(posts)
   }

   // Функция добовления постов, ее прокидываю пропсами в PostForm
   const createPost = (Newpost) => {
      setPosts([...posts, Newpost])
      setActivePopup(false)
   }

   // Функция для удаления постов, ее прокидываю пропсами в PostItem через PostList
   const removePost = (post) => {
      setPosts(posts.filter((p) => p.id !== post.id))
   }

   return (

      <div className='App'>

         <MyButton style={{ margin: '15px' }}
            onClick={() => setActivePopup(true)}
         >Создать пост</MyButton>

         <MyPopup
            activePopup={activePopup}
            setActivePopup={setActivePopup}
         >
            <PostForm create={createPost} />
         </MyPopup>



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
