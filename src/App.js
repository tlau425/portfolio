import { MainPage } from "./pages/MainPage";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { useState } from "react";
import "./styles/partials/global.scss";

function App() {
  const [toggleResume, setToggleResume] = useState(false);
  const handleResumeClick = () => setToggleResume(!toggleResume);

  return (
    <div className="App">
      <Header
        handleResumeClick={handleResumeClick}
        toggleResume={toggleResume}
      />
      <MainPage handleResumeClick={handleResumeClick} />
      <Footer />
    </div>
  );
}

export default App;
