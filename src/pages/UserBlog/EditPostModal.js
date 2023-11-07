import axiosInstance from '../../config/axios'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';

const EditPostModal = ({ posts, setPosts, postId, closeModal }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const currentPost = posts.find(post => post.id == postId);

    if (currentPost) {
      setTitle(currentPost.title);
      setDescription(currentPost.description);
    }
  }, [postId])

  const handleSubmit = e => {
    e.preventDefault();

    axiosInstance.put('posts/'+postId, {
      title,
      description
    })
    .then(res => {
      setPosts(posts.map(post => {
        if (post.id == postId) {
          post.title = title;
          post.description = description
        }
        return post
      }));

    })
    .catch(e => console.error(e))
  }

  return (
      <div>
        <Modal show={postId} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Edit the post</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={e => handleSubmit(e)}>
              <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  value={title}
                  type="text"
                  required
                  maxLength={"255"}
                  onChange={e => setTitle(e.target.value)}
                  placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  value={description}
                  type="text"
                  required
                  maxLength={"255"}
                  onChange={e => setDescription(e.target.value)}
                  placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
  )
}

export default EditPostModal