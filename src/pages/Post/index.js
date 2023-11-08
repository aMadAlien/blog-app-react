import { useParams } from "react-router-dom";
import CreateCommentForm from "./CreateCommentForm";
import CommentsList from "./CommentsList";
import PostContent from "./PostContent";
import { createContext } from "react";
import { CommentsProvider } from './CommentsContext';

const Post = () => {
  const { id } = useParams();

  return (
    <div className="container">
      <PostContent postId={id} />

      <h2>Comments</h2>

      <CommentsProvider>
        <CreateCommentForm postId={id} />
        <CommentsList postId={id} />
      </CommentsProvider>
    </div>
  )
}

export default Post