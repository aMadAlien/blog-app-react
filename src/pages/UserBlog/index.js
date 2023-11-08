import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import axiosInstance from '../../config/axios'
import DeletePostModal from './DeletePostModal';
import EditPostModal from './EditPostModal';
import CreatePostModal from './CreatePostModal';
import Post from '../../components/Post';
import PaginationBlog from '../../components/Pagination'

const UserBlog = () => {
  const [posts, setPosts] = useState([]);
  const [deletePostId, setDeletePostId] = useState();
  const [editPostId, setEditPostId] = useState();
  const [openCreatePostModal, setOpenCreatePostModal] = useState(false);
  const [paginationData, setPaginationData] = useState({});
  const [nextPage, setNextPage] = useState(1);

  const getPosts = () => {
    axiosInstance.get('posts?user=true&page='+nextPage)
      .then(res => {
        setPosts(res.data.data)
        setPaginationData({
          active: res.data.current_page,
          total: res.data.last_page,
        });
      })
      .catch(e => console.error(e))
  }

  useEffect(() => {
    getPosts();
  }, [nextPage])

  return (
  <div className="album py-5 bg-body-tertiary">
    <div className="container">
    <Button onClick={() => setOpenCreatePostModal(true)} variant="dark">Create</Button>

      <Post
        posts={posts}
        isUser={true}
        setDeletePostId={setDeletePostId}
        setEditPostId={setEditPostId} />

      <hr />
      <PaginationBlog active={paginationData.active} total={paginationData.total} setNextPage={setNextPage} />

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