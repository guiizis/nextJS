import { useOpenModalSharedState } from "../../context/OpenModalContext";
import { Modal } from "../ModalComponet/modal";
import NewPost from "../NewPost/NewPost";
import { PostComponent } from "../Post/Post";
import classes from './ListPost.module.css';

export function ListPostComponent() {

  const {setSharedOpenModalValue} = useOpenModalSharedState()

  function closeModalHandler() {
    setSharedOpenModalValue(false)
  }

  return (
    <>
      <Modal>
        <NewPost
          onCancel={closeModalHandler}
        />
      </Modal>
      <ul className={classes.posts}>
        <PostComponent author="test" text="test 2" />
      </ul>
    </>
  )
}