import cls from "./NewPost.module.css";
import PageModal from "../src/components/Modal";
import { Form, Link, redirect } from "react-router-dom";
import HttpClient from "../src/http";

export default function NewPost() {
  return (
    <PageModal isVisible>
      <Form method="post" className={cls.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea
            id="body"
            required
            rows={3}
            placeholder="Enter some text here..."
            name="body"
          />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            required
            placeholder="Enter your name here..."
            name="author"
          />
        </p>
        <p className={cls.actions}>
          <Link to=".." type="button">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </Form>
    </PageModal>
  );
}

export async function action(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  await HttpClient.post("posts/", postData);
  return redirect("/");
}
