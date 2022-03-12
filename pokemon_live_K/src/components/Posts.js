import { useState } from 'react'


export default function Posts() {
  const [newPost, addNewPost] = useState([]);
  
  const getPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    console.log(data)
    // getPost(data);
    // getPost(data.title)
  }

  return (
    <section>
      <h1>Liste med posts</h1>
      <ul>
    
      {newPost ? data.map(
        ({ getPosts }) => (
        <li key={id}>
          <h1>{id}</h1>
          <p title={title}>{title}</p>
        </li>)
        )      : null
      }

      <button onClick={() => getPosts()} type="button">
         Show Posts
      </button>
      </ul>
    </section>
  )
}
;


  

  // return (
  //   <section>
  //     <h3 id={post.id}>{post.id}</h3>
  //     <ul>
      
  //     {post ? <p>Post: {post.title}</p> : null}
  //     <button onClick={() => getPost(post.title)}type="button"></button>
  //     </ul>
  //   </section>
  // )
}
