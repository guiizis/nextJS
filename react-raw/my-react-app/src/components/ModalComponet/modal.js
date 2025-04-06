import classes from './modal.module.css';

export function Modal(props) {
  return (
    <>
      <div className={classes.backdrop}/>
      <dialog open className={classes.modal}>
        {props.children}
      </dialog>
    </>
  )
}