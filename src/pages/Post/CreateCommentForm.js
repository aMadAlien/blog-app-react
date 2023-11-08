import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axiosInstance from '../../config/axios'
import { CommentsContext } from './CommentsContext';

const CreateCommentForm = ({ postId, commentId }) => {
  const [commentContent, setCommentContent] = useState('');
  const { setNewComment } = useContext(CommentsContext);

  const submitComment = e => {
    e.preventDefault();

    axiosInstance.post('comments', {
      postId: postId,
      commentId,
      comment: commentContent
    })
    .then(res => {
      setNewComment(res.data.newComment);
      setCommentContent('');
    })
    .catch(e => console.error(e))
  }

  return (
    <div>
      <Form onSubmit={e => submitComment(e)} className="d-flex align-items-center">
        <Form.Group className="mb-3 w-100 me-4">
          {
            !commentId && <Form.Label>Leave a comment</Form.Label>
          }
          <Form.Control
            id="comment"
            as="textarea"
            value={commentContent}
            onChange={e => setCommentContent(e.target.value)}
            required
            maxLength={"255"} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default CreateCommentForm