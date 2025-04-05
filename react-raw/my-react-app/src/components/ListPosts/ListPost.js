import { PostComponent } from "../Post/Post";
import './ListPost.module.css'

export function ListPostComponent() {
  return (
    <ul>
      <li>
        <PostComponent author='teste' text='teste 2' />
      </li>
      <li>
        <PostComponent author='let' text='const' />
      </li>
    </ul>
  )
}