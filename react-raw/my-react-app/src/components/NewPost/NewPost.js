import classes from './NewPost.module.css';

function NewPost(props) {
  return (
    <form className={classes.form}>
      <p className={classes.inputContainer}>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={props.onBodyChange} />
      </p>
      <p className={classes.inputContainer}>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" onChange={props.onAuthorChange} required />
      </p>
      <p className={classes.actions}>
        <button type="button">Add Post</button>
        <button type="button" onClick={props.onCancel}>Cancel</button>
      </p>
    </form>
  );
}

export default NewPost;