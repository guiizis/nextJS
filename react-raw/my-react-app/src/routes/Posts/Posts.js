import './Posts.css';
import { ListPostComponent } from '../../components/ListPosts/ListPost';
import { Outlet } from 'react-router-dom';

function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <ListPostComponent />
      </main>
    </>
  );
}

export default Posts;
