import { Hero } from "../components/Hero/Hero";
import { Stack } from "../components/Stack/Stack";
import { Projects } from "../components/Projects/Projects";
import { Contact } from "../components/Contact/Contact";
import { About } from "../components/About/About";
import "./MainPage.scss";
function MainPage({ handleResumeClick }) {
  return (
    <div>
      <Hero handleResumeClick={handleResumeClick}/>
      <Stack />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export { MainPage };
