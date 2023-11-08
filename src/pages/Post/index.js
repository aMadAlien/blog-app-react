import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import moment from 'moment'
import axiosInstance from '../../config/axios'
import CreateCommentForm from "./CreateCommentForm";

const Post = () => {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [openReplie, setOpenReplie] = useState(0);

  const { id } = useParams();

  const getPost = () => {
    axiosInstance.get('posts/'+id)
      .then(res => setPost(res.data.post))
      .catch(e => console.error(e))
  }

  const getComments = () => {
    axiosInstance.get('comments?postId='+id)
      .then(res => setComments(res.data.comments))
      .catch(e => console.error(e))
  }

  useEffect(() => {
    getPost()
    getComments()
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

      <h2>Comments</h2>

      <CreateCommentForm postId={post.id} />

      <div className="list-group my-3">
        {comments.map(comment => 
          <div key={comment.id} className="list-group-item list-group-item-action gap-3 py-3" aria-current="true">
            <div className="d-flex gap-2 w-100 justify-content-between">
              <div>
                <h6 className="mb-0">{comment.user.username}</h6>
                <p className="mb-0 opacity-75">{comment.comment}</p>
              </div>
              <div>
                <small className="opacity-50 text-nowrap me-2 d-block">
                  {moment.utc(comment.created_at, "YYYY-MM-DDTHH:mm:ss.SSSSZ").fromNow()}
                </small>
                <Button onClick={() => setOpenReplie(comment.id)} variant="link">replie</Button>
              </div>
            </div>
                {
                  comment.id === openReplie &&
                  <div>
                    <hr />
                    <CreateCommentForm postId={post.id} commentId={comment.id} />
                  </div>
                }
          </div>
        )}
      </div>
    </div>
  )
}

export default Post