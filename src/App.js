import { MainPage } from './pages/MainPage';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import './styles/partials/global.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
