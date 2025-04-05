import './App.css';
import { PostComponent } from './components/Post';

function App() {
  return (
    <main>
      <PostComponent author='teste' text='teste 2'/>
      <PostComponent author='let' text='const'/>
    </main>
  );
}

export default App;
