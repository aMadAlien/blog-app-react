import { useEffect, useState } from 'react'
import axiosInstance from '../../config/axios'
import moment from 'moment'

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
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

        {
          posts?.map(post => (
            <div key={post.id} className="col">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h2 className="card-text fs-5 fw-bold text-uppercase">{post.title}</h2>
                  <p className="card-text">{post.description}</p>
                  <small className="text-body-secondary">
                    {moment.utc(post.created_at, "YYYY-MM-DDTHH:mm:ss.SSSSZ").fromNow()}
                  </small>
                </div>
              </div>
            </div>
          ))
        }

      </div>
    </div>
  </div>
  )
}

export default Blog