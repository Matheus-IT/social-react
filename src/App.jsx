import { useState } from "react";
import "./App.css";
import NewPost from "./components/NewPost";
import PostList from "./components/PostList";
import Modal from "./components/Modal";
import MainHeader from "./components/MainHeader";

export default function App() {
  const [isNewPostModalVisible, setIsNewPostModalVisible] = useState(false);

  function hideNewPostModalHandler() {
    setIsNewPostModalVisible(false);
  }

  function showNewPostModalHandler() {
    setIsNewPostModalVisible(true);
  }

  return (
    <>
      <MainHeader onCreatePost={showNewPostModalHandler} />

      <Modal
        isVisible={isNewPostModalVisible}
        onHideNewPostModal={hideNewPostModalHandler}
      >
        <NewPost onCancel={hideNewPostModalHandler} />
      </Modal>

      <PostList
        posts={[
          { author: "matheus", body: "first post" },
          { author: "carol", body: "second post" },
        ]}
      />
    </>
  );
}
