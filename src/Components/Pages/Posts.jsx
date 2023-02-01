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
   // окна браузера будем подгружать новую порцию данных.
   // Для того чтобы получить элемнет, воспользуемся Хуком useRef и этот референс-ссылку передать в последний элемент
   const lastElement = React.useRef();
   //console.log(lastElement)

   // Для того чтобы был доступ к let observer, создадим еще один ref
   // const observer = React.useRef();


 // Observer, используем наш Хук, первый параметр lastElement-остлеж.элемент, вторым условие-page < totalPages, третьим-preloaderPosts, 
 // четверты- передаем callback в котором просто изменяем номер страницы
useObserver(lastElement, page < totalPages, postsLoading, ()=>{ 
   setPage(page + 1)
})

//   // Observer, вставляем код с сайта developer.mozilla- intersection  Observer API
//    React.useEffect(() => {
//       // let options = {
//       //    root: document.querySelector('#scrollArea'),
//       //    rootMargin: '0px',
//       //    threshold: 1.0
//       // }
//       let callback = function (entries, observer) {
//          // Условие чтобы корректно загружлись посты, а не замыкались на странице №1, во первых если preloaderPosts равняется true, то
//          // делаем return и до создания нового Observer-а даже не доходим. В вторых, если Observer уже создан и в поле current
//          // что-то находится то тогда мы должны отключить наблюдение за всеми элементами за которыми наблюдает Observer в текущий
//          // момент, для этого вызываем у него функцию disconnect
//                   if(postsLoading) return;
//                   if(observer.current) observer.current.disconnect();
//          // (чтобы колбэк срабатывал только когда div появляется в зоне видимости, а не исчезает из области видимости)
//          // Условие-получить по нулевому индексу наш наблюдаемый элемент и по полю isIntersecting проверить, в зоне видимости он
//          // или нет и только в таком случае выполнять какое-то действие.
//          // Делаем ограничение чтобы колбэк отрабатывал только тогда когда номер текущей страницы меньше чем общее кол-во страниц,
//          // иначе страницы будут увеличиваться до бесконечности, а нам этого не нужно.
//          if (entries[0].isIntersecting && page < totalPages) { 
//             // console.log('div в зоне видимости') // убеждаемся,когда div в зоне видимости срабатывает callback
//             console.log(page)
//             setPage(page + 1) // Изменяем номер страницы, тем самым подгружается новый десяток постов
//          }
//          // console.log(entries) // entries-это массив элементов за котор. мы наблюдаем, (isIntersecting-это условие которое говорит,
//          // элемент в зоне видимости или нет, target: div - элемнет за котор. мы наблюдаем)
//          // console.log('div в зоне видимости') // убеждаемся,когда div в зоне видимости срабатывает callback
//       }
//       // Для того чтобы был доступ к let observer, создадим еще один ref (см. выше), 
//       //  observer помещем в поле current
//       observer.current = new IntersectionObserver(callback);
//       // Указыаем за каким элементом будем наблюдать, для этого у observer.current вызываем функ-ю observe(lastElement.current)
//       // и предать туда ДОМ элемент, в нашем случае это lastElement.current поле current. После этого наш <div> становится наблюдаемым
//       observer.current.observe(lastElement.current)
//    }, [postsLoading]) // передаем preloaderPosts чтобы убрать замыкание стрницы под №1




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
<div ref={lastElement} style={{height:20, background: 'red'}}/>
         
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
