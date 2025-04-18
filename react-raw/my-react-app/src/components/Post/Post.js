import classes from './Post.module.css';
import { Link } from 'react-router-dom';

export function PostComponent({id, author, text }) {
  console.log(id)
  return (
    <div>
      <div className={classes.post}>
        <Link to={id}>
          <h1 className={classes.author}>{author}</h1>
          <p className={classes.text}>{text}</p>
        </Link>
      </div>
    </div>
  )
}