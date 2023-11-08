import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import cn from 'classname';
import moment from 'moment'
import axiosInstance from '../../config/axios'
import CreateCommentForm from "./CreateCommentForm";

const CommentsList = ({ postId }) => {
  const [openReplie, setOpenReplie] = useState(0);
  const [focusedComment, setfocusedComment] = useState(0);
  const [comments, setComments] = useState([]);

  const getComments = () => {
    axiosInstance.get('comments?postId='+postId)
      .then(res => setComments(res.data.comments))
      .catch(e => console.error(e))
  }

  useEffect(() => {
    getComments()
  }, [])

  return (
    <div className="list-group my-3">
      {comments?.map(comment => 
        <div
          key={comment.id}
          id={`comment-${comment.id}`}
          className={cn("list-group-item list-group-item-action gap-3 py-3", {"list-group-item-primary": focusedComment === comment.id})}
          aria-current="true">
          <div className="d-flex gap-2 w-100 justify-content-between">
            <div>
              <h6 className="d-inline fs-5 me-3">{comment.user.username}</h6>

              {/* replie anchor */}
              {comment.comment_id &&
                  <a
                    href={`#comment-${comment.comment_id}`}
                    onClick={() => setfocusedComment(comment.comment_id)}
                  >replie to </a>}

              <p className="mb-0 opacity-75">{comment.comment}</p>
            </div>
            <div>
              <small className="opacity-50 text-nowrap me-2 d-block">
                {moment.utc(comment.created_at, "YYYY-MM-DDTHH:mm:ss.SSSSZ").fromNow()}
              </small>
              <Button
                onClick={() => setOpenReplie(comment.id)}
                variant="link"
              >replie</Button>
            </div>
          </div>

            {/* replie form */}
            {comment.id === openReplie &&
              <div>
                <hr />
                <CreateCommentForm postId={postId} commentId={comment.id} />
              </div>}
        </div>
      )}
    </div>
  )
}

export default CommentsList