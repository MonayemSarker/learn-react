import classes from "./NewPost.module.css";

function NewPost(props) {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="text">Text</label>
        <textarea id="text" required rows={3} onChange={props.onTextChange} />
      </p>
      <p>
        <label htmlFor="headline">Your Headline</label>
        <input
          type="text"
          id="headline"
          required
          onChange={props.onHeadlineChange}
        />
      </p>
    </form>
  );
}

export default NewPost;
