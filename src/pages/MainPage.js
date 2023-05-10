import { Hero } from '../components/Hero/Hero';
import { Stack } from '../components/Stack/Stack';
import { Projects } from '../components/Projects/Projects';
import { Contact } from '../components/Contact/Contact';
import './MainPage.scss';
function MainPage(){
    return (
        <div>
            <Hero />
            <Stack />
            <Projects />
            <Contact />
        </div>
    )
}

export { MainPage }