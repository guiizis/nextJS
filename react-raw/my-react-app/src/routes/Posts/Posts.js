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

export async function loader() {
  return await fetch('http://localhost:8080/posts').then(async (posts) => {
    const postsData = await posts.json()
    return postsData.posts
  })

}

export default Posts;
