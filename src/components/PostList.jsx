import Post from "./Post";
import classes from "./PostList.module.css";

export default function PostList({ isLoadingList, posts }) {
  return (
    <>
      {!isLoadingList && posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((p) => (
            <Post key={p.author} author={p.author} body={p.body} />
          ))}
        </ul>
      )}

      {!isLoadingList && posts.length == 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}

      {isLoadingList && (
        <div style={{ textAlign: "center", color: "white" }}>
          <p>Loading...</p>
        </div>
      )}
    </>
  );
}
