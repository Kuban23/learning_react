import axios from 'axios';
import React from 'react';
import PostService from './API/PostService';
import PostFilter from './Components/PostFilter/PostFilter';
import PostForm from './Components/PostForm/PostForm';
import PostList from './Components/PostList/PostList';
import MyButton from './Components/UI/Button/MyButton';
import MyPopup from './Components/UI/MyPopup/MyPopup';
import PreloaderPosts from './Components/UI/PreloaderPosts/PreloaderPosts';
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

   // Состояние постов при загрузке
   const [postsLoading, setPostsLoading] = React.useState(false);

   // Функция для запроса массива постов
   // async function feachPosts() {
   //    setPostsLoading(true)
   //    setTimeout(async () => {
   //       const posts = await PostService.getAll()
   //       setPosts(posts)
   //       setPostsLoading(false)
   //    }, 1000)
   // }
   function feachPosts() {
      setPostsLoading(true)
      setTimeout(()=>{
         Promise.all([PostService()])
         .then(([posts]) => {
            setPosts(posts)
         })
         setPostsLoading(false)
      },1000)

      
      
         
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

         {postsLoading
            ?
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 100 }}><PreloaderPosts /></div>
            : <PostList posts={sortedAndSearchedPosts} remove={removePost} title={'Список постов'} />}




      </div>




   );
}
export default App;
