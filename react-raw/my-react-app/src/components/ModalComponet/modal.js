import classes from './modal.module.css';

export function Modal(props) {
  return (
    <>
      <div className={props.isModalVisible ? classes.backdrop: ''} onClick={props.showModal}/>
      <dialog open={props.isModalVisible} className={classes.modal}>
        {props.children}
      </dialog>
    </>
  )
}