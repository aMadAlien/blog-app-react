import { Link } from "react-router-dom";
import moment from 'moment'

const Post = ({ posts, isUser = false, setDeletePostId, setEditPostId }) => {
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 mt-4 g-3">
      {
        posts?.map(post => (
          <div key={post.id} className="col">
            <div className="card shadow-sm">
              <div className="card-body">
                <h2 className="card-text fs-5 fw-bold text-uppercase">
                  <Link to={'/posts/'+post.id}>{post.title}</Link>
                </h2>
                <p className="card-text">{post.description.slice(0, 100)}</p>
                <div className="d-flex justify-content-between align-items-center">
                  {isUser && 
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
                  }
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
  )
}

export default Post