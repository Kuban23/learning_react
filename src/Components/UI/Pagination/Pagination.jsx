import React from 'react';
import {getPagesArray} from '../../../utils/pages';

const Pagination = ({page, setPage, totalPages}) => {
   
   let pagesArray = getPagesArray(totalPages);
   //console.log(pagesArray)

   // Функция для пагинации запроса страницы с 10 постами
   const changePages = (page) => {
      setPage(page)
   }

  return (
   <div className='page__wrapper'>
   {pagesArray.map((p) =>
      <span className={page === p ? 'page page__current' : 'page'} key={p} onClick={() => changePages(p)}>{p}</span>)

   }
</div>
  )
}

export default Pagination