// import axios from 'axios';

// export default class PostService {
//    static async getAll() {
//       try {
//          const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
//          return response.data
//       } catch (error) {
//          console.log(error)
//       }


//    }
// }

export default function PostService() {
 return  fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
         if (res.ok) {
            return res.json()
         } else {
            throw Error
         }
      })
      .then(data => {
         return data
      })
      .catch(() => console.log('Что-то пошло не так'))
}
