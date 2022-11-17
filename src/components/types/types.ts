export interface ProjectsProps {
  githubProfileUrl: string;
}

export interface Repository {
  id: number;
  name: string;
  html_url: string;
  description: string;
  language: string;
  archived: boolean;
}
