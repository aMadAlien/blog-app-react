import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import axiosInstance from '../../config/axios'
import moment from 'moment'
import DeletePostModal from './DeletePostModal';
import EditPostModal from './EditPostModal';
import CreatePostModal from './CreatePostModal';

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
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 mt-4 g-3">

        {
          posts?.map(post => (
            <div key={post.id} className="col">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h2 className="card-text fs-5 fw-bold text-uppercase">{post.title}</h2>
                  <p className="card-text">{post.description}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        onClick={() => setDeletePostId(post.id)}
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >Delete</button>
                      <button
                        onClick={() => setEditPostId(post.id)}
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >Edit</button>
                    </div>
                    <small className="text-body-secondary">
                      {moment.utc(post.created_at, "YYYY-MM-DDTHH:mm:ss.SSSSZ").fromNow()}
                    </small>
                  </div>
                </div>
              </div>
            </div>
          ))
        }

      </div>

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