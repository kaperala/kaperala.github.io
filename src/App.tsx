import './App.css';
import LikeTo from './components/LikeTo';
import DrawPath from './components/DrawPath';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import { Button } from '@material-tailwind/react';
import { useRef } from 'react';
import Links from './components/Links';

function App(): React.ReactElement {
  const ref = useRef<null | HTMLDivElement>(null);

  const handleClick = (): void => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <div className='pt-64 h-screen'>
        <div className=' pb-72 h-screen'>
          <h1 className='text-white text-5xl'>Hi, I&apos;m Kalle Perälä</h1>
          <LikeTo />
          <Button onClick={handleClick} className='mt-60' color='blue' size='lg' variant='filled'>
            Find out more
          </Button>
          <div className=' flex justify-center '>
            <DrawPath />
          </div>
        </div>
      </div>
      <div className='flex flex-col lg:flex-row lg:justify-between mt-32 h-screen'>
        <AboutMe />
        <Projects githubProfileUrl='https://api.github.com/users/kaperala/repos' />
      </div>
      <div
        ref={ref}
        className='flex justify-center relative mt-128 sm:mt-48 md:mt-32 lg:-mt-20 3xl:-mt-52'
      >
        <Links />
      </div>
    </div>
  );
}

export default App;
