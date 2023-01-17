import axios from 'axios';

export default class PostService {
   static async getAll(limit = 10, page = 1) {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
         params: {
            _limit: limit,
            _page: page
         }
      })
      // return response.data 
      return response
   }

   static async getByIdPage(id) {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
      return response
   }

   static async getCommenstByIdPage(id) {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      return response
   }


}

// export default function PostService() {
//    return fetch('https://jsonplaceholder.typicode.com/posts')
      // .then(res => {
      //    if (res.ok) {
      //       return res.json()
      //    } else {
      //       throw Error

      //    }
      // })
      // .then(res => res.json())
      // .then(data => {
      //    return data
      // })
   // .catch((error) => {
   //    console.log(error)
   // })
//}
