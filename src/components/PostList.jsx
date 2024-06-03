import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./Post.module.css";
import { useState } from "react";

function PostList() {
  const [enterdDetails, setEnteredDetails] = useState("");
  const [enterdHeadLine, setEnteredHeadline] = useState("");

  function detailsChangeHandler(event) {
    setEnteredDetails(event.target.value);
  }

  function headLineChangeHandler(event) {
    setEnteredHeadline(event.target.value);
  }

  return (
    <>
      <NewPost
        onTextChange={detailsChangeHandler}
        onHeadlineChange={headLineChangeHandler}
      />
      <ul className={classes.posts}>
        <Post headline="React" details="React is a JS library" />
        <Post headline={enterdHeadLine} details={enterdDetails} />
        <Post headline="Learn" details="adsad is a JS library" />
        <Post headline="Burn" details="afasd is a adssa" />
      </ul>
    </>
  );
}

export default PostList;
