import { useParams } from "react-router-dom";
import CreateCommentForm from "./CreateCommentForm";
import CommentsList from "./CommentsList";
import PostContent from "./PostContent";

const Post = () => {
  const { id } = useParams();

  return (
    <div className="container">
      <PostContent postId={id} />

      <h2>Comments</h2>

      <CreateCommentForm postId={id} />

      <CommentsList postId={id} />
    </div>
  )
}

export default Post