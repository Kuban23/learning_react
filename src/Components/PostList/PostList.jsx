import React from 'react'
import PostItem from '../PostItem/PostItem';

const PostList = ({ posts }) => {
   return (
      <div>
         <h1 style={{ textAlign: 'center' }}>Список постов</h1>
         {posts.map((post, index)=> <PostItem numderId={index + 1} key={post.id} post={post} />)}


      </div>
   )
}

export default PostList