import React from 'react'

const About = () => {
  return (
    <div style={{height:'100vh', color: '#fff'}}>
	 <h1 style={{ margin: '25px' }}>В рамках данного приложения изучаю React</h1>
   <ul>
    <li>Реализовал добавление постов.</li>
    <li>Реализовал удаление постов.</li>
    <li>Реализовал сортировку постов использовал Хук useState.</li>
    <li>Реализовал поиск постов, использовал Хук useMemo.</li>
    <li>Перенес логику поиска и сортировки постов в компонент PostFilter, теперь вместо двух состояний у меня одно и передаю туда объект  sort: '', query: ''</li>
    <li>Создал кастомный Хук usePosts и перенес туда логику сортировки и поиска постов.</li>
    <li>Создал pupap и перенес в него форму для добавления постов, добавил логику закрытия popup по клику и с помощью кнопки ESC.</li>
    <li>Добавил в Popup кнопку close.</li>
    <li>Реализовал анимацию по добавлению и удалению постов с помощью react transition group.</li>
    <li>Реализовал загрузку постов с 'https://jsonplaceholder.typicode.com/posts', применил HTTP клиент axios. Работал с промисами с помощью async/await.</li>
   <li>Добавил Preloader перед загрузкой постов.</li>
   <li>Пощупал метод fetch('https://jsonplaceholder.typicode.com/posts'), обработал промисы методом .then().</li>
   <li>Создал кастомный Хук useFetching, который обрабатывает прелоадер и ошибки.</li>
   <li>Реализавал пагинацию, сделал 10 страниц и при клике на кнопку подгружаются нужное кол-во постов.</li>
   <li>Применил библиотеку React Router, реализовал страницы: about, posts, none found page. </li>
   <li>Реализация динамического перехода - применил useNavigate().</li>
   <li>Загрузка поста по кнопке "Открыть", загрузка комментариев к посту- реализовал запрос на сервер.</li>
   <li>Реализация доступа к постам, пользователь авторизован / не авторизован.</li>
   <li>Применил Хук useContext для получения состояния авторизации.</li>
   <li>Сохраняю авторизованного пользователя в localStorage, удаляю при выходе.</li>
   <li>Изменил загрузку постов с помощью отслеживания элемента, воспользовался Intersection Observer API.</li>   
   </ul>
   </div>


   
  )
}

export default About