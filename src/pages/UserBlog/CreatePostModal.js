import { useEffect, useState } from 'react';
import axiosInstance from '../../config/axios'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const CreatePostModal = ({ isOpen, posts, setPosts, closeModal }) => {

  const handleSubmit = e => {
    e.preventDefault();

    axiosInstance.post('posts', {
      title: e.target.title.value,
      description: e.target.description.value
    })
    .then(res => {
      setPosts([ ...posts, res.data.post ]);
      closeModal();
    })
    .catch(e => console.error(e))
  }

  return (
    <Modal show={isOpen} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Create news post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={e => handleSubmit(e)}>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              required
              id="title"
              maxLength={"255"}
              placeholder="Enter title" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              required
              id="description"
              maxLength={"255"}
              placeholder="Enter description" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default CreatePostModal