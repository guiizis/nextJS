import { MdPostAdd, MdMessage } from 'react-icons/md';

import classes from './Header.module.css';
import { useOpenModalSharedState } from '../../context/OpenModalContext';

function MainHeader() {

  const { setSharedOpenModalValue } = useOpenModalSharedState();

  function createNewPost() {
    setSharedOpenModalValue(true);
  }

  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        React Poster
      </h1>
      <p>
        <button className={classes.button} onClick={createNewPost}>
          <MdPostAdd size={18} />
          New Post
        </button>
      </p>
    </header>
  );
}

export default MainHeader;