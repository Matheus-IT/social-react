import { useState } from "react";
import cls from "./NewPost.module.css";

export default function NewPost(props) {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function changeBodyHandler(event) {
    setEnteredBody(event.target.value);
  }

  function changeAuthorHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  return (
    <form className={cls.form}>
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
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
}
