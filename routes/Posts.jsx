import PostList from "../src/components/PostList";

import { Outlet } from "react-router-dom";
import HttpClient from "../src/http";

export default function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostList />
      </main>
    </>
  );
}

export async function loader() {
  const responseData = await HttpClient.get("posts/");
  return responseData.posts;
}
