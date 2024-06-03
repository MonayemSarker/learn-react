import classes from "./Post.module.css";

/* eslint-disable react/prop-types */
function Post(props) {
  return (
    <li className={classes.post}>
      <p className={classes.author}>{props.headline}</p>
      <p className={classes.text}>{props.details}</p>
    </li>
  );
}

export default Post;
