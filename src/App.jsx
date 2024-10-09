import { useState } from "react";
import "./App.css";
import NewPost from "./components/NewPost";
import PostList from "./components/PostList";
import Modal from "./components/Modal";
import MainHeader from "./components/MainHeader";

export default function App() {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");
  const [isNewPostModalVisible, setIsNewPostModalVisible] = useState(false);

  function changeBodyHandler(event) {
    setEnteredBody(event.target.value);
  }

  function changeAuthorHandler(event) {
    setEnteredAuthor(event.target.value);
  }

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
        <NewPost
          onChangeBody={changeBodyHandler}
          onChangeAuthor={changeAuthorHandler}
        />
      </Modal>

      <PostList
        posts={[
          { author: enteredAuthor, body: enteredBody },
          { author: "matheus", body: "first post" },
          { author: "carol", body: "second post" },
        ]}
      />
    </>
  );
}
