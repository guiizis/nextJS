import './App.css';
import { PostComponent } from './components/Post';

function App() {
  return (
    <main>
      <PostComponent names={['teste', 'teste 2']}/>
      <PostComponent names={['let', 'const']}/>
    </main>
  );
}

export default App;
