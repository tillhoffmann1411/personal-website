import projectsData from './projects.json';

export type ProjectAward = {
  title: string;
  logo: string;
};

export type Project = {
  name: string;
  description: string;
  url?: string;
  status?: 'active' | 'coming-soon';
  image?: string;
  awards?: ProjectAward[];
};

export const projects = projectsData as Project[];
