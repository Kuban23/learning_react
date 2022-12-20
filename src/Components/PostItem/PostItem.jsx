import React from 'react'
import MyButton from '../UI/Button/MyButton'

const PostItem = ({post, numderId, remove}) => {


  return (

	<div className='post'>
	<div className='post__content'>
	<strong> {numderId}. {post.title}</strong>
	<div>
	{post.body}
	</div>
	</div>              
	<div className='post__btns'>			
	<MyButton onClick={()=>remove(post)}>Удалить</MyButton>
	</div>
	</div> 
	
  )
}

export default PostItem