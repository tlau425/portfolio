import { Hero } from '../components/Hero/Hero';
import { Stack } from '../components/Stack/Stack';
import { Projects } from '../components/Projects/Projects';

function MainPage(){
    return (
        <div>
            <Hero />
            <Stack />
            <Projects />
        </div>
    )
}

export { MainPage }