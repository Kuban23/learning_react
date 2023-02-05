import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetching } from '../../hook/useFetching';
import PostService from '../../API/PostService';
import PreloaderPosts from '../UI/PreloaderPosts/PreloaderPosts';

const PostIdPage = () => {

   const [post, setPost] = React.useState({});
   const [comments, setComments] = React.useState([]);

   // Беру id поста из url
   const params = useParams();
   // console.log(params)

   const [isLoading, fetchIdPost, error] = useFetching(async () => {
      const response = await PostService.getByIdPage(params.id)
      // console.log(response)
      setPost(response.data)
   })

   const [isCommLoading, fetchCommIdPost, errorComm] = useFetching(async () => {
      const response = await PostService.getCommenstByIdPage(params.id)
      setComments(response.data)
   })

   React.useEffect(() => {
      fetchIdPost(params.id)
      fetchCommIdPost(params.id)
   }, [])


   return (
      <div style={{color: '#fff', height:'100vh'}}>
         <h1>Вы перешли на страницу поста с ID = {params.id}</h1>
         {isLoading
            ? <PreloaderPosts />
            : <div>{post.title}</div>
         }

         <h2 style={{marginTop: '15px'}}>Комментарии</h2>
         {isCommLoading
            ? <PreloaderPosts />
            : <div>
               {comments.map(comm => 
                  <div style={{marginTop: '15px'}} key={comm.id}>
                     <h5>{comm.email}</h5>
                     <div>{comm.body}</div>
                  </div>
               )
               }
            </div>


         }





      </div >
   )
}

export default PostIdPage