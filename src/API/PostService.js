// import axios from 'axios';

// export default class PostService {
//    static async getAll() {
//          const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
//          return response.data 
//    }
// }

export default function PostService() {
   return fetch('https://jsonplaceholder.typicode.com/posts')
      // .then(res => {
      //    if (res.ok) {
      //       return res.json()
      //    } else {
      //       throw Error

      //    }
      // })
      .then(res => res.json())
      .then(data => {
         return data
      })
   // .catch((error) => {
   //    console.log(error)
   // })
}
