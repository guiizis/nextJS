import { useEffect, useState } from "react";
import { useOpenModalSharedState } from "../../context/OpenModalContext";
import { PostComponent } from "../Post/Post";
import classes from './ListPost.module.css';
import { useLoaderData } from "react-router-dom";

export function ListPostComponent() {
  const [posts, setPosts] = useState([])
  const { setSharedOpenModalValue } = useOpenModalSharedState()
  const postsData = useLoaderData()

  useEffect(() => {
    setPosts(() => [...postsData])
  }, [])

  function closeModalHandler() {
    setSharedOpenModalValue(false)
  }

  function onAddPostHandler(post) {
    postData(post)
    setPosts((prev) => [...prev, post])
  }

  function postData(newPost) {
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      body: JSON.stringify(newPost),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(async (response) => {
      return response.json()
    }).then((data) => {
      console.log(data)
    })
  }

  return (
    <>
      <ul className={classes.posts}>
        {posts.length > 0 && posts.map(post => (
          <PostComponent key={post.id} author={post.author} text={post.body} />
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