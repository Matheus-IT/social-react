import cls from "./NewPost.module.css";

export default function NewPost(props) {
  return (
    <form className={cls.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea
          id="body"
          required
          rows={3}
          placeholder="Enter some text here..."
          onChange={props.onChangeBody}
        />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          required
          placeholder="Enter your name here..."
          onChange={props.onChangeAuthor}
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
