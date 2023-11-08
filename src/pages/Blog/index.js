import { useEffect, useState } from 'react'
import axiosInstance from '../../config/axios'
import Post from '../../components/Post';
import PaginationBlog from '../../components/Pagination'

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [paginationData, setPaginationData] = useState({});
  const [nextPage, setNextPage] = useState(1);

  const getPosts = () => {
    axiosInstance.get('posts?page='+nextPage)
    .then(res => {
      setPosts(res.data.data)
      setPaginationData({
        active: res.data.current_page,
        total: res.data.last_page,
      });
    })
    .catch(e => console.error(e))
  }

  useEffect(() => {
    getPosts();
  }, [nextPage])

  return (
  <div className="album py-5 bg-body-tertiary">
    <div className="container">
      <Post posts={posts} />
      <hr />
      <PaginationBlog active={paginationData.active} total={paginationData.total} setNextPage={setNextPage} />
    </div>
  </div>
  )
}

export default Blog