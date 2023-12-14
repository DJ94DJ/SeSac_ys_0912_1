// PostList 컴포넌트 입니다.
import { useEffect, useState } from "react";
import PostItem from "./PostItem";
import { PostListUp } from "./types/types";

// 인터페이스 제목을 본 파일의 있는 선언 함수와 이름을 다르게 해야 충돌 안남
// interface PostList { 오류
//   id: number;
//   title: string;
//   body: string;
// }

const PostList = () => {
  const [posts, setPosts] = useState<PostListUp[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const jsonData = await res.json();

      setPosts(jsonData.slice(0, 10));
    };

    setTimeout(() => {
      getPosts();
    }, 2000);
  }, []);

  return (
    <div className="PostList">
      <header>Post List</header>
      {posts.length > 0 ? (
        posts.map((post) => {
          return <PostItem key={post.id} post={post} />;
        })
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default PostList;
