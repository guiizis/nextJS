import classes from './modal.module.css';
import { useOpenModalSharedState } from '../../context/OpenModalContext.js'
import { useEffect } from 'react';

export function Modal(props) {
  const { sharedOpenModalValue, setSharedOpenModalValue } = useOpenModalSharedState()

  useEffect(() => {
    setSharedOpenModalValue(true)

    return () => {
      setSharedOpenModalValue(false)
    }
  },[])

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