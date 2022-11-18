import React from 'react';
import { IconButton } from '@material-tailwind/react';
import { FaGithubSquare } from 'react-icons/fa';
import { openNewTab } from './utils/utils';
import { Repository } from './types/types';

export default function Project(props: Repository): React.ReactElement {
  return (
    <div className='mb-5'>
      <h3 className='text-2xl text-blue-400'>{props.name}</h3>
      <div className='flex'>
        <span className='text-1xl text-white'>{props.description}</span>
        <IconButton
          className=' -mt-2'
          onClick={() => openNewTab(props.html_url)}
          size='lg'
          variant='text'
          color='white'
        >
          <FaGithubSquare className=' text-6xl' />
        </IconButton>{' '}
      </div>
    </div>
  );
}
