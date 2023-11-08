import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axiosInstance from '../../config/axios'

const CreateCommentForm = ({ postId, commentId }) => {

  const submitComment = e => {
    e.preventDefault();

    axiosInstance.post('comments', {
      postId: postId,
      commentId,
      comment: e.target.comment.value
    })
    .then(res => console.log(res.data))
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