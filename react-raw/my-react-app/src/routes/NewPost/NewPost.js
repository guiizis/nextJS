import classes from './NewPost.module.css';
import { Modal } from '../../components/ModalComponet/modal';
import { Link, Form, redirect } from 'react-router-dom'

function NewPost() {

  return (
    <Modal>
    <Form method="post" className={classes.form}>
      <p className={classes.inputContainer}>
        <label htmlFor="body">Text</label>
        <textarea id="body" name="body" required rows={3} />
      </p>
      <p className={classes.inputContainer}>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" name="author" required/>
      </p>
      <p className={classes.actions}>
        <button type="submit">Add Post</button>
        <Link to="/" type="button">Cancel</Link>
      </p>
    </Form>
    </Modal>
  );
}

export async function action({request}) {
  const formData = await request.formData()
  
  const newPostData = {
    body: formData.get('body'),
    author: formData.get('author')
  }

  fetch('http://localhost:8080/posts', {
    method: 'POST',
    body: JSON.stringify(newPostData),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(async (response) => {
    return response.json()
  }).then((data) => {
    console.log(data)
  })

  return redirect('/')

}

export default NewPost;