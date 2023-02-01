import React from 'react';

// Принимаю: референс того элемента за которым необходимо наблюдать, callback-который будет выполняться в том случае когда элемент 
// в зоне видимости.

export const useObserver = (ref, canLoad, postsLoading, callback,) => {
   // Создали observer
   const observer = React.useRef();
   
   React.useEffect(() => {
      // let options = {
      //    root: document.querySelector('#scrollArea'),
      //    rootMargin: '0px',
      //    threshold: 1.0
      // }
                       if(postsLoading) return;
                  if(observer.current) observer.current.disconnect();         
            let cb = function (entries, observer) {
            if (entries[0].isIntersecting && canLoad){ // canLoad будет ограничивать вызов функции
               callback() // вызываем callback полученный пропсами            
         }        
      };     
      observer.current = new IntersectionObserver(cb);
      observer.current.observe(ref.current)
   }, [postsLoading]) // передаем preloaderPosts чтобы убрать замыкание стрницы под №1

}