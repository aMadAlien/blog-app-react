import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import moment from 'moment'
import axiosInstance from '../../config/axios'
import CreateCommentForm from "./CreateCommentForm";

const Post = () => {
  const [post, setPost] = useState({});
  const { id } = useParams();

  const getPost = () => {
    axiosInstance.get('posts/'+id)
      .then(res => setPost(res.data.post))
      .catch(e => console.error(e))
  }

  useEffect(() => {
    getPost()
  }, [])

  return (
    <div className="container">
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

      <CreateCommentForm postId={post.id} />

    </div>
  )
}

export default Post