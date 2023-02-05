// import axios from 'axios';
import React from 'react';
import PostService from '../../API/PostService';
import PostFilter from '../../Components/PostFilter/PostFilter';
import PostForm from '../../Components/PostForm/PostForm';
import PostList from '../../Components/PostList/PostList';
import MyButton from '../../Components/UI/Button/MyButton';
import MyPopup from '../../Components/UI/MyPopup/MyPopup';
import Pagination from '../../Components/UI/Pagination/Pagination';
import PreloaderPosts from '../../Components/UI/PreloaderPosts/PreloaderPosts';
import { useFetching } from '../../hook/useFetching';
import { usePosts } from '../../hook/usePosts';
import '../../styles/App.css';
import { getPages } from '../../utils/pages';
import { useObserver } from '../../hook/useObserver';

function Posts() {

   // Состояние, массив получаю от сервера.
   const [posts, setPosts] = React.useState([]);

   // Общее состояние поиска и сортировки постов
   const [filter, setFilter] = React.useState({ sort: '', query: '' });

   // Состояние Popup
   const [activePopup, setActivePopup] = React.useState(false);

   // Состояние в которое будем помещать общее кол-во страниц с постами 
   const [totalPages, setTotalPages] = React.useState(0);

   // Состояние лимита страниц
   const [limit, setLimit] = React.useState(10);

   // Состояние где будем хранить номер текущей страницы
   const [page, setPage] = React.useState(1);

   // Вызываю кастомный Хук usePosts
   const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

   // Хук для отслеживания изменения массива постов
   React.useEffect(() => {
      fetchPosts()
   }, [page]);

   
   // Состояние постов при загрузке
   // const [postsLoading, setPostsLoading] = React.useState(false);
   // Воспользуюсь своим Хуком для запуска прелоадера и отслеживания ошибок
   const [postsLoading, fetchPosts, errorPosts] = useFetching(async () => {
      // Получаю посты с сервера и загружаем их на страницу, передаем параметры, лимит и номер страницы
      // const response = await PostService.getAll(limit)
      // setPosts(response.data)
      // console.log(response.headers['x-total-count'])
      // const totalPages = response.headers['x-total-count']
      // setTotalPages(getPages(totalPages, limit))
      const response = await PostService.getAll(limit, page)
      setPosts([...posts, ...response.data]) // Беру не сам массив, а поле data у response
      const totalCount = (response.headers['x-total-count']) // Из header достаю общее кол-во постов
      // Прередаю общее кол-во постов и лимит в функцию 
      setTotalPages(getPages(totalCount, limit))
   });

   // const [postsLoading, fetchPosts, errorPosts] = useFetching( async() => {
   //   await Promise.all([PostService()])
   //       .then(([posts]) => {
   //          setPosts(posts)
   //       })                       
   // });

  // Инициализируем Observer
   // Получаем ссылку на ДОМ элемент который находится последним в списке и когда этот элемнет появляется в области видимости
   const lastElement = React.useRef();
   //console.log(lastElement)

 // Observer, используем наш Хук, первый параметр lastElement-остлеж.элемент, вторым условие-page < totalPages, третьим-preloaderPosts, 
 // четверты- передаем callback в котором просто изменяем номер страницы
useObserver(lastElement, page < totalPages, postsLoading, ()=>{ 
   setPage(page + 1)
})


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

         {errorPosts &&
            <h1>Произошла ошибка ${errorPosts}</h1>
         }

<PostList posts={sortedAndSearchedPosts} remove={removePost} title={'Список постов'} />
<div ref={lastElement} />
         
         {postsLoading &&
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 100 }}><PreloaderPosts /></div>
            
         }

         <Pagination
            page={page}
            totalPages={totalPages}
            setPage={setPage}
         />

      </div>
   );
}
export default Posts;
