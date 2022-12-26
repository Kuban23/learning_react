import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PostItem from '../PostItem/PostItem';

const PostList = ({ posts, remove, title }) => {

   if (!posts.length) {
     return <h1 style={{ textAlign: 'center' }}>Посты не найдены</h1>
   }

   return (
      <div>
         <h1 style={{ textAlign: 'center' }}>{title}</h1>
         <TransitionGroup>
            {posts.map((post, index) =>
               <CSSTransition
                  key={post.id} // Ключ переносим в корневой элемент списка
                  timeout={500}
                  classNames="post" // Указываем классовое имя, оно нам понадобится для написания стилей
               >
                  <PostItem numderId={index + 1} post={post} remove={remove} />
               </CSSTransition>
            )}
         </TransitionGroup>
         {/* {posts.map((post, index)=> <PostItem numderId={index + 1} key={post.id} post={post} remove={remove}/>)} */}


      </div>
   )
}

export default PostList