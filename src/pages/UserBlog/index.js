import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import axiosInstance from '../../config/axios'
import moment from 'moment'
import DeletePostModal from './DeletePostModal';
import EditPostModal from './EditPostModal';
import CreatePostModal from './CreatePostModal';
import Post from '../../components/Post';

const UserBlog = () => {
  const [posts, setPosts] = useState([]);
  const [deletePostId, setDeletePostId] = useState();
  const [editPostId, setEditPostId] = useState();
  const [openCreatePostModal, setOpenCreatePostModal] = useState(false);

  const getPosts = () => {
    axiosInstance.get('posts?user=true&page=1')
      .then(res => setPosts(res.data.data))
      .catch(e => console.error(e))
  }

  useEffect(() => {
    getPosts();
  }, [])

  return (
  <div className="album py-5 bg-body-tertiary">
    <div className="container">
    <Button onClick={() => setOpenCreatePostModal(true)} variant="dark">Create</Button>

      <Post
        posts={posts}
        isUser={true}
        setDeletePostId={setDeletePostId}
        setEditPostId={setEditPostId} />

      <DeletePostModal
        posts={posts}
        setPosts={setPosts}
        postId={deletePostId}
        closeModal={() => setDeletePostId(0)} />

      <EditPostModal
        posts={posts}
        setPosts={setPosts}
        postId={editPostId}
        closeModal={() => setEditPostId(0)} />

      <CreatePostModal
        isOpen={openCreatePostModal}
        posts={posts}
        setPosts={setPosts}
        closeModal={() => setOpenCreatePostModal(false)} />

    </div>
  </div>
  )
}

export default UserBlog