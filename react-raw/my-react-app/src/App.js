import './App.css';
import MainHeader from './components/HeaderComponents/Header';
import { ListPostComponent } from './components/ListPosts/ListPost';
import { OpenModalProvider } from './context/OpenModalContext';

function App() {
  return (
    <main>
      <OpenModalProvider>
        <MainHeader />
        <ListPostComponent />
      </OpenModalProvider>
    </main>
  );
}

export default App;
