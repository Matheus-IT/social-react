import Post from "./Post";
import classes from "./PostList.module.css";

export default function PostList(props) {
  return (
    <ul className={classes.posts}>
      {props.posts.map((p) => (
        <Post key={p.author} author={p.author} body={p.body} />
      ))}
    </ul>
  );
}
