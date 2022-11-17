import React, { useEffect, useState } from 'react';
import Project from './Project';
import { ProjectsProps, Repository } from './types/types';

export default function Projects(props: ProjectsProps): React.ReactElement {
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
    <div className='pt-16 text-center lg:w-5/12 lg:pt-0 lg:text-left lg:float-right sm:self-center'>
      <div className='pb-5 float-left lg:float-none'>
        <span className='text-4xl text-blue-400'>&lt;</span>
        <span className='text-5xl text-white'>projects</span>
        <span className='text-4xl text-blue-400'>&gt;</span>
      </div>
      {getUserData.map((repo) => (
        <Project key={repo.id} {...repo} />
      ))}
      <div className='pt-5 float-right lg:float-none'>
        <span className='text-4xl text-blue-400'>&lt;/</span>
        <span className='text-5xl text-white'>projects</span>
        <span className='text-4xl text-blue-400'>&gt;</span>
      </div>
    </div>
  );
}
