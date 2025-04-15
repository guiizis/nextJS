import { useState } from 'react';
import classes from './NewPost.module.css';
import { useOpenModalSharedState } from '../../context/OpenModalContext';
import { Modal } from '../../components/ModalComponet/modal';

function NewPost({addPost, onCancel}) {
  const [enteredText, setEnteredText] = useState('test 1');
  const [enteredAuthor, setEnteredAuthor] = useState('test 2');
  const { setSharedOpenModalValue } = useOpenModalSharedState()

  function changeBodyHandler(event) {
    setEnteredText(event.target.value);
  }

  function changeAuthorHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const newPostData = {
      id: Math.random().toString(),
      body: enteredText,
      author: enteredAuthor
    }
    
    setEnteredText('')
    setEnteredAuthor('')
    setSharedOpenModalValue(false)
    addPost(newPostData)
  }

  return (
    <Modal>
    <form className={classes.form} onSubmit={submitHandler}>
      <p className={classes.inputContainer}>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler} value={enteredText} />
      </p>
      <p className={classes.inputContainer}>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" onChange={changeAuthorHandler} required value={enteredAuthor} />
      </p>
      <p className={classes.actions}>
        <button type="submit">Add Post</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </p>
    </form>
    </Modal>
  );
}

export default NewPost;