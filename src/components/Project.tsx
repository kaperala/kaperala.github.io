import React from 'react';
import { Chip } from '@material-tailwind/react';
import { VscGithub } from 'react-icons/vsc';
import { BsCodeSlash } from 'react-icons/bs';
import { GoLaw } from 'react-icons/go';
import { Repository } from './types/types';

const Project = (props: Repository): React.ReactElement => {
  return (
    <div className='mb-5 w-5/6'>
      <a href={props.html_url} rel='noreferrer' target='_blank'>
        <h3 className='text-2xl text-blue-400'>{props.name}</h3>
      </a>
      <div className='flex'>
        <span className='text-1xl text-white'>{props.description}</span>
      </div>
      <div className='flex gap-3 justify-center lg:justify-start'>
        <a href={props.html_url} rel='noreferrer' target='_blank'>
          <Chip
            icon={<VscGithub className=' text-xl' />}
            className='mt-3'
            color='blue'
            value='GitHub'
          />
        </a>
        <Chip
          icon={<BsCodeSlash className=' text-xl' />}
          className='mt-3'
          color='blue-gray'
          value={props.language}
        />
        <Chip
          icon={<GoLaw className=' text-xl' />}
          className='mt-3'
          color='gray'
          value={props.license.spdx_id}
        />
      </div>
    </div>
  );
};

export default Project;
