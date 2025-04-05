import classes from './Post.module.css';

export function PostComponent({ author, text }) {
  return (
    <div>
      <div className={classes.post}>
        <h1 className={classes.author}>{author}</h1>
        <p className={classes.text}>{text}</p>
      </div>
    </div>
  )
}