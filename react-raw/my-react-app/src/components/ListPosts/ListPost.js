import { useOpenModalSharedState } from "../../context/OpenModalContext";
import { Modal } from "../ModalComponet/modal";
import NewPost from "../NewPost/NewPost";
import { PostComponent } from "../Post/Post";
import classes from './ListPost.module.css';
import { useState } from "react";

export function ListPostComponent() {
  const [enteredText, setEnteredText] = useState('test 1');
  const [enteredAuthor, setEnteredAuthor] = useState('test 2');
  const {setSharedOpenModalValue} = useOpenModalSharedState()

  function changeBodyHandler(event) {
    setEnteredText(event.target.value);
  }

  function changeAuthorHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  function closeModalHandler() {
    setSharedOpenModalValue(false);
  }

  return (
    <>
      <Modal>
        <NewPost
          onBodyChange={changeBodyHandler}
          onAuthorChange={changeAuthorHandler}
          onCancel={closeModalHandler}
        />
      </Modal>
      <ul className={classes.posts}>
        <PostComponent author={enteredAuthor} text={enteredText} />
        <PostComponent author="test" text="test 2" />
      </ul>
    </>
  )
}