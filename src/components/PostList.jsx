import { useEffect, useState } from "react";
import Post from "./Post";
import classes from "./PostList.module.css";
import HttpClient from "../http";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    HttpClient.get("posts/").then((responseData) => {
      setPosts(responseData.posts);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {!isLoading && posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((p) => (
            <Post key={p.author} author={p.author} body={p.body} />
          ))}
        </ul>
      )}

      {!isLoading && posts.length == 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}

      {isLoading && (
        <div style={{ textAlign: "center", color: "white" }}>
          <p>Loading...</p>
        </div>
      )}
    </>
  );
}
