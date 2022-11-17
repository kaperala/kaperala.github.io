import React from 'react';
import { Button } from '@material-tailwind/react';

export default function AboutMe(): React.ReactElement {
  return (
    <div className=' lg:w-5/12 text-center lg:text-left lg:float-left sm:self-center'>
      <div className='pb-5'>
        <span className='text-4xl text-blue-400'>&lt;</span>
        <span className='text-5xl text-white'>about</span>
        <span className='text-4xl text-blue-400'>&gt;</span>
      </div>
      <div>
        <span className='text-white text-3xl'>
          I am a 22 years old software developer and student from Finland. On my free time I like to
          learn about new technologies and languages but also to stick to basics and enhance my
          skills on the languages I already know and love.
        </span>
      </div>
      <a href='/public/resume.pdf'>
        <Button className='mt-8' variant='filled'>
          Download Resume
        </Button>
      </a>
      <div className='pt-5'>
        <span className='text-4xl text-blue-400'>&lt;/</span>
        <span className='text-5xl text-white'>about</span>
        <span className='text-4xl text-blue-400'>&gt;</span>
      </div>
    </div>
  );
}
