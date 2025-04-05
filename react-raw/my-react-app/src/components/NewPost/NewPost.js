import classes from './NewPost.module.css';

function NewPost() {
  return (
    <form className={classes.form}>
      <p className={classes.inputContainer}>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} />
      </p>
      <p className={classes.inputContainer}>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required />
      </p>
    </form>
  );
}

export default NewPost;