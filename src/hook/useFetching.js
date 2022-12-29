import React from "react"

export const useFetching = (callback) => {
   const [postsLoading, setPostsLoading] = React.useState(false);
   const [error, setError] = React.useState('');

   const fetching = async () => {
      try {
         setPostsLoading(true);
         await callback();
      }
      catch (error) {            
         setError(error.message)                
      } finally {
         setPostsLoading(false)
      }
   }

   return [postsLoading, fetching, error];
}