import { useEffect, useState } from "react";
import moment from 'moment'
import axiosInstance from '../../config/axios'

const PostContent = ({ postId }) => {
  const [post, setPost] = useState({});

  const getPost = () => {
    axiosInstance.get('posts/'+postId)
      .then(res => setPost(res.data.post))
      .catch(e => console.error(e))
  }

  useEffect(() => {
    getPost()
  }, [])

  return (
    <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
      {post && 
        <div className="col-lg-9 px-0">
          <small className="text-body-secondary">
            {moment.utc(post.created_at, "YYYY-MM-DDTHH:mm:ss.SSSSZ").fromNow()}
          </small>
          <h1 className="display-4 fst-italic fw-medium">{post.title}</h1>
          <p className="lead my-3">{post.description}</p>
          <p className="lead mb-0 fst-italic">{post.authorName}</p>
        </div>
      }
    </div>
  )
}

export default PostContent