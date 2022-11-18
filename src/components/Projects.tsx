import React, { useEffect, useState } from 'react';
import Project from './Project';
import { ProjectsProps, Repository } from './types/types';

const Projects = (props: ProjectsProps): React.ReactElement => {
  const [getUserData, setUserData] = useState<Repository[]>([]);

  useEffect(() => {
    const parseRepoData = async (repos: Repository[]): Promise<Repository[]> => {
      const notArchived: Repository[] = [];
      repos.forEach((repo) => {
        console.log(repo);
        if (!repo.archived) notArchived.push(repo);
      });
      return notArchived;
    };
    const fetchUserData = (githubUrl: string): void => {
      fetch(githubUrl)
        .then(async (response) => await response.json())
        .then((data) => {
          console.log(data);
          parseRepoData(data)
            .then((parsedRepos) => {
              setUserData(parsedRepos);
            })
            .catch(console.error);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchUserData(props.githubProfileUrl);
  }, []);

  return (
    <div className='lg:w-5/12 text-center lg:text-left lg:float-left sm:self-center'>
      <div className='pb-5 mt-14 lg:mt-0'>
        <span className='text-4xl text-blue-400'>&lt;</span>
        <span className='text-5xl text-white'>projects</span>
        <span className='text-4xl text-blue-400'>&gt;</span>
      </div>
      <div className='flex flex-col items-center lg:items-start'>
        {getUserData.map((repo) => (
          <Project key={repo.id} {...repo} />
        ))}
      </div>
      <div className='pt-5'>
        <span className='text-4xl text-blue-400'>&lt;/</span>
        <span className='text-5xl text-white'>projects</span>
        <span className='text-4xl text-blue-400'>&gt;</span>
      </div>
    </div>
  );
};

export default Projects;
