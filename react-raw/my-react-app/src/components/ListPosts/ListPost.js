import { useEffect, useState } from "react";
import { useOpenModalSharedState } from "../../context/OpenModalContext";
import { Modal } from "../ModalComponet/modal";
import NewPost from "../NewPost/NewPost";
import { PostComponent } from "../Post/Post";
import classes from './ListPost.module.css';

export function ListPostComponent() {
  const [posts, setPosts] = useState([])
  const [isLoadingPosts, setIsLoadingPosts] = useState(true)
  const { setSharedOpenModalValue } = useOpenModalSharedState()

  useEffect(() => {
      fetch('http://localhost:8080/posts').then(async(posts) => {
        const postsData = await posts.json()
        setIsLoadingPosts(false)
        setPosts(() => [...postsData.posts])
      })
  },[])

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
    }).then(async(response) => {
      return response.json()
    }).then((data) => {
      console.log(data)
    })
  }

  return (
    <>
      <Modal>
        <NewPost
          onCancel={closeModalHandler}
          addPost={onAddPostHandler}
        />
      </Modal>
      {isLoadingPosts && <h1 style={{textAlign: 'center', color:'white'}}>We are Loading your posts!</h1>}
      <ul className={classes.posts}>
        {!isLoadingPosts && posts.length > 0 && posts.map(post => (
          <PostComponent key={post.id} author={post.author} text={post.body} />
        ))}
      </ul>
      {!isLoadingPosts && posts.length === 0 && (
         <div style={{textAlign: 'center', color:'white'}}>
          <h2>No posts found!</h2>
          <h3>Make new Posts =)</h3>
        </div>
      )}
    </>
  )
}