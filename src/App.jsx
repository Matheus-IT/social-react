import "./App.css";
import PostList from "./components/PostList";

function App() {
  return (
    <>
      <PostList
        posts={[
          { author: "matheus", body: "first post" },
          { author: "carol", body: "second post" },
        ]}
      />
    </>
  );
}

export default App;
