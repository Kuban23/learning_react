import React from 'react';
import MyInput from '../UI/Input/MyInput';
import MySelect from '../UI/MySelect/MySelect';

const PostFilter = ({ filter, setFilter }) => {
   return (
      <div>
         <MyInput
            placeholder={'Поиск...'}
            value={filter.query}
            onChange={(event) => setFilter({...filter, query: event.target.value})}
         />

         <MySelect
            defaultValue={'Сортировка по...'}
            options={[
               { value: 'title', name: 'По наименованию' },
               { value: 'body', name: 'По описанию' }
            ]}
            value={filter.sort}
            onChange={(selectedSort)=>setFilter({...filter, sort: selectedSort})}
         />

      </div>
   )
}

export default PostFilter