import React from "react";

// Возвращаю массив отсортированных постов 
export const useSortedPosts = (posts, sort) => {
   // Отслеживаю изменения постов и состояние сортировки 
   const sortedPosts = React.useMemo(() => {
      if (sort) {
         return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
      }
      return posts;
   }, [posts, sort]);

   return sortedPosts
}


// Сортирую и ищу посты

export const usePosts = (posts, sort, query) => {
   const sortedPosts = useSortedPosts(posts, sort);

   const sortedAndSearchedPosts = React.useMemo(() => {
      return sortedPosts.filter((post) => post.title.toLowerCase().includes(query))
   }, [query, sortedPosts]);

   return sortedAndSearchedPosts;
}




