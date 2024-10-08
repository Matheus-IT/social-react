import { useState } from "react";
import "./App.css";
import NewPost from "./components/NewPost";
import PostList from "./components/PostList";
import Modal from "./components/Modal";

export default function App() {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function changeBodyHandler(event) {
    setEnteredBody(event.target.value);
  }

  function changeAuthorHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  return (
    <>
      <Modal>
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
