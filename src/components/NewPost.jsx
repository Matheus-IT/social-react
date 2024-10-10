import { useState } from "react";
import cls from "./NewPost.module.css";
import HttpClient from "../http";

export default function NewPost(props) {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function changeBodyHandler(event) {
    setEnteredBody(event.target.value);
  }

  function changeAuthorHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();

    const payload = {
      body: enteredBody,
      author: enteredAuthor,
    };

    console.log(`${payload.body}, ${payload.author}`);

    HttpClient.post(payload);

    props.onHideModal();
    props.onAddPost(payload);
  }

  return (
    <form className={cls.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea
          id="body"
          required
          rows={3}
          placeholder="Enter some text here..."
          onChange={changeBodyHandler}
          defaultValue={enteredBody}
        />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          required
          placeholder="Enter your name here..."
          onChange={changeAuthorHandler}
          defaultValue={enteredAuthor}
        />
      </p>
      <p className={cls.actions}>
        <button type="button" onClick={props.onHideModal}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
}
