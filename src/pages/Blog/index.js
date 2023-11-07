import { useEffect, useState } from 'react'
import axiosInstance from '../../config/axios'
import Post from '../../components/Post';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    axiosInstance.get('posts?page=1')
    .then(res => setPosts(res.data.data))
    .catch(e => console.error(e))
  }

  useEffect(() => {
    getPosts();
  }, [])

  return (
  <div className="album py-5 bg-body-tertiary">
    <div className="container">
      <Post posts={posts} />
    </div>
  </div>
  )
}

export default Blog