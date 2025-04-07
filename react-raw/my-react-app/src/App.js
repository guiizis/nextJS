import './App.css';
import MainHeader from './components/HeaderComponents/Header';
import { ListPostComponent } from './components/ListPosts/ListPost';

function App() {
  return (
    <main>
      <MainHeader/>
      <ListPostComponent/>
    </main>
  );
}

export default App;
