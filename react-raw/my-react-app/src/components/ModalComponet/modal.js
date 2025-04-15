import classes from './modal.module.css';
import { useOpenModalSharedState } from '../../context/OpenModalContext.js'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function Modal(props) {
  const { sharedOpenModalValue, setSharedOpenModalValue } = useOpenModalSharedState()
  const navigate = useNavigate();

  useEffect(() => {
    setSharedOpenModalValue(true)
  },[])

  function onCloseHandler() {
    setSharedOpenModalValue(false)
    navigate('/')
  }

  return (
    <>
      <div className={sharedOpenModalValue ? classes.backdrop : ''} onClick={onCloseHandler} />
      <dialog open={sharedOpenModalValue} className={classes.modal}>
        {props.children}
      </dialog>
    </>
  )
}