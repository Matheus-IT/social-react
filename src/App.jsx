import { useState } from "react";
import "./App.css";
import NewPost from "./components/NewPost";
import PostList from "./components/PostList";
import Modal from "./components/Modal";
import MainHeader from "./components/MainHeader";

export default function App() {
  const [isNewPostModalVisible, setIsNewPostModalVisible] = useState(false);
  const [posts, setPosts] = useState([
    { author: "matheus", body: "first post" },
    { author: "carol", body: "second post" },
  ]);

  function hideNewPostModalHandler() {
    setIsNewPostModalVisible(false);
  }

  function showNewPostModalHandler() {
    setIsNewPostModalVisible(true);
  }

  function addPostHandler(post) {
    setPosts((existingPosts) => [post, ...existingPosts]);
  }

  return (
    <>
      <MainHeader onCreatePost={showNewPostModalHandler} />

      <Modal
        isVisible={isNewPostModalVisible}
        onHideNewPostModal={hideNewPostModalHandler}
      >
        <NewPost
          onHideModal={hideNewPostModalHandler}
          onAddPost={addPostHandler}
        />
      </Modal>

      <PostList posts={posts} />
    </>
  );
}
