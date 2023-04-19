import { MainPage } from './pages/MainPage';
import { Header } from './components/Header/Header';
import './styles/partials/global.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <MainPage />
    </div>
  );
}

export default App;
