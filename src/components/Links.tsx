import { IconButton } from '@material-tailwind/react';
import React from 'react';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { FiGithub } from 'react-icons/fi';
import { TbBrandDocker } from 'react-icons/tb';
import { openNewTab } from './utils/NewTab';

export default function Links(): React.ReactElement {
  return (
    <div className=' w-1/4 absolute pt-5 pb-5 rounded-lg bg-pGray drop-shadow-lg'>
      <IconButton
        className=' mr-10'
        onClick={() => openNewTab('https://hub.docker.com/u/kvllu')}
        size='lg'
        variant='text'
        color='white'
      >
        <TbBrandDocker className=' text-5xl' />
      </IconButton>{' '}
      <IconButton
        className=''
        onClick={() => openNewTab('https://www.linkedin.com/in/kalleperala/')}
        size='lg'
        variant='text'
        color='text-blue-400'
      >
        <AiOutlineLinkedin className=' text-5xl' />
      </IconButton>{' '}
      <IconButton
        className='ml-10'
        onClick={() => openNewTab('https://github.com/kaperala')}
        size='lg'
        variant='text'
        color='white'
      >
        <FiGithub className=' text-5xl' />
      </IconButton>{' '}
    </div>
  );
}
