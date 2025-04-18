import { useEffect, useState } from "react";
import { PostComponent } from "../Post/Post";
import classes from './ListPost.module.css';
import { useLoaderData } from "react-router-dom";

export function ListPostComponent() {
  const [posts, setPosts] = useState([])
  const postsData = useLoaderData()

  useEffect(() => {
    setPosts(() => [...postsData])
  }, [])

  return (
    <>
      <ul className={classes.posts}>
        {posts.length > 0 && posts.map(post => (
          <PostComponent key={post.id} id={post.id} author={post.author} text={post.body} />
        ))}
      </ul>
      {posts.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>No posts found!</h2>
          <h3>Make new Posts =)</h3>
        </div>
      )}
    </>
  )
}