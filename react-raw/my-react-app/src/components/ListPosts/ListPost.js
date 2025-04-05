import NewPost from "../NewPost/NewPost";
import { PostComponent } from "../Post/Post";
import classes from './ListPost.module.css';

export function ListPostComponent() {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <PostComponent author='teste' text='teste 2' />
        <PostComponent author='let' text='const' />
      </ul>
    </>
  )
}