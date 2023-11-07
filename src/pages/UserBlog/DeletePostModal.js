import axiosInstance from '../../config/axios'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const DeletePostModal = ({ posts, setPosts, postId, closeModal }) => {
  const deletePost = () => {
    axiosInstance.delete('posts/'+postId)
    .then(res => {
      setPosts(posts.filter(post => post.id !== postId));
      closeModal()
    })
    .catch(e => console.error(e))
  }

  return (
    <Modal show={postId} onHide={closeModal}>
        <Modal.Header closeButton>
        <Modal.Title>Delete the post</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you certain you wish to delete the post?!</Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
            Close
        </Button>
        <Button variant="primary" onClick={deletePost}>
            Save Changes
        </Button>
        </Modal.Footer>
    </Modal>
  )
}

export default DeletePostModal