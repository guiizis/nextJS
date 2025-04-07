import { useState } from "react";
import { useOpenModalSharedState } from "../../context/OpenModalContext";
import { Modal } from "../ModalComponet/modal";
import NewPost from "../NewPost/NewPost";
import { PostComponent } from "../Post/Post";
import classes from './ListPost.module.css';

export function ListPostComponent() {
  const [posts, setPosts] = useState([])
  const { setSharedOpenModalValue } = useOpenModalSharedState()

  function closeModalHandler() {
    setSharedOpenModalValue(false)
  }

  function onAddPostHandler(post) {
    setPosts((prev) => [...prev, post])
    console.log(posts)
  }

  return (
    <>
      <Modal>
        <NewPost
          onCancel={closeModalHandler}
          addPost={onAddPostHandler}
        />
      </Modal>
      <ul className={classes.posts}>
        {posts && posts.map(post => (
          <PostComponent key={post.id} author={post.author} text={post.body} />
        ))}
      </ul>
    </>
  )
}