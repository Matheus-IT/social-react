import PostList from "../src/components/PostList";

import { Outlet } from "react-router-dom";

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
