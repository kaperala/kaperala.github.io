import { IconButton } from '@material-tailwind/react';
import React from 'react';
import { AiOutlineLinkedin, AiOutlineMail } from 'react-icons/ai';
import { FiGithub } from 'react-icons/fi';

const Links = (): React.ReactElement => {
  return (
    <div className=' w-11/12 sm:w-3/4 lg:w-1/4 absolute pt-5 pb-5 rounded-lg bg-pGray drop-shadow-lg'>
      <a href='mailto:kalle@perala.dev'>
        <IconButton className=' mr-10' size='lg' variant='text' color='white'>
          <AiOutlineMail className=' text-5xl' />
        </IconButton>{' '}
      </a>
      <a href='https://www.linkedin.com/in/kalleperala/' rel='noreferrer' target='_blank'>
        <IconButton className='' size='lg' variant='text' color='blue'>
          <AiOutlineLinkedin className=' text-5xl' />
        </IconButton>{' '}
      </a>
      <a href='https://github.com/kaperala' rel='noreferrer' target='_blank'>
        <IconButton className='ml-10' size='lg' variant='text' color='white'>
          <FiGithub className=' text-5xl' />
        </IconButton>{' '}
      </a>
    </div>
  );
};

export default Links;
