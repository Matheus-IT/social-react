import "./App.css";
import NewPost from "./components/NewPost";
import PostList from "./components/PostList";

export default function App() {
  return (
    <>
      <NewPost />

      <PostList
        posts={[
          { author: "matheus", body: "first post" },
          { author: "carol", body: "second post" },
        ]}
      />
    </>
  );
}
