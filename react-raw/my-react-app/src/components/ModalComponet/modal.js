import classes from './modal.module.css';
import { useOpenModalSharedState } from '../../context/OpenModalContext.js'

export function Modal(props) {
  const { sharedOpenModalValue, setSharedOpenModalValue } = useOpenModalSharedState()

  function modalShowHandler() {
    setSharedOpenModalValue((prev) => !prev);
  }

  return (
    <>
      <div className={sharedOpenModalValue ? classes.backdrop : ''} onClick={modalShowHandler} />
      <dialog open={sharedOpenModalValue} className={classes.modal}>
        {props.children}
      </dialog>
    </>
  )
}