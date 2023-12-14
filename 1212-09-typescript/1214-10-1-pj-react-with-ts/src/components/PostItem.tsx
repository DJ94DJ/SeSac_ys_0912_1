// PostItem 컴포넌트입니다.
import { PostListUp } from "./types/types";

interface Props {
  post: PostListUp;
}
// interface PostList {
//   id: number;
//   title: string;
//   body: string;
// }

export default function PostItem({ post }: Props) {
  return (
    <div className="PostItem">
      <div>
        <span className="id">No. {post.id}</span>
        <span className="title">- {post.title}</span>
      </div>
      <p className="body">{post.body.slice(0, 120)}...</p>
    </div>
  );
}
