import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axiosInstance from '../../config/axios'

const CreateCommentForm = ({ postId }) => {

  const submitComment = e => {
    e.preventDefault();

    axiosInstance.post('comments', {
      postId: postId,
      comment: e.target.comment.value
    })
    .then(res => console.log(res.data))
    .catch(e => console.error(e))
  }

  return (
    <div>
      <h2>Comments</h2>
      <Form onSubmit={e => submitComment(e)} className="d-flex align-items-center">
        <Form.Group className="mb-3 w-100 me-4">
          <Form.Label>Leave a comment</Form.Label>
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