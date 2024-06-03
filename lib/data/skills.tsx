import { AiFillLayout, AiFillBuild, AiOutlineCloudServer, AiFillFunnelPlot, AiFillApi } from "react-icons/ai";
import { SiMui, SiNeo4J, SiPandas, SiNestjs } from "react-icons/si";
import { IoLogoPolymer } from "react-icons/io";
import {
  BiLogoFirebase,
  BiLogoAws,
  BiLogoGoogleCloud,
  BiLogoDigitalocean,
  BiLogoAngular,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoBootstrap,
  BiLogoNodejs,
  BiLogoDjango,
  BiLogoTypescript,
  BiLogoPython,
  BiLogoPostgresql,
  BiLogoMongodb,
} from "react-icons/bi";
import { Skill } from '../../types/definitions';

export const skills: Skill[] = [
  {
    title: 'Frontend Development',
    description: 'I have 5+ years of experience in frontend development using Angular, React, Polymer, and Tailwind CSS, creating responsive and accessible web applications.',
    icon: <AiFillLayout />,
    logos: [<BiLogoAngular key="angular" />, <BiLogoReact key="react" />, <IoLogoPolymer key="polymer" />, <BiLogoTailwindCss key="tailwind" />, <SiMui key="mui" />, <BiLogoBootstrap key="boot" />],
    color: 'bg-rose-800'
  },
  {
    title: 'Backend Development',
    description: 'I have 5+ years of experience in backend development using Next.js, Node.js, Nest.js, and Django, creating scalable and secure APIs.',
    icon: <AiOutlineCloudServer />,
    logos: [<BiLogoNodejs key="nodejs" />, <SiNestjs key="nestjs" />, <BiLogoDjango key="django" />, <BiLogoTypescript key="typescript" />],
    color: 'bg-sky-800'
  },
  {
    title: 'Architecture',
    description: 'I setup and maintain cloud infrastructure using AWS, GCP, Firebase, and DigitalOcean, creating scalable and secure APIs.',
    icon: <AiFillBuild />,
    logos: [<BiLogoAws key="aws" />, <BiLogoGoogleCloud key="gcp" />, <BiLogoFirebase key="fire" />, <BiLogoDigitalocean key="digi" />],
    color: 'bg-fuchsia-800'
  },
  {
    title: 'Data Integration',
    description: 'I implemented data integration pipelines using Python, Pandas, SQL, and NoSQL databases.',
    icon: <AiFillFunnelPlot />,
    logos: [<BiLogoPython key="py" />, <SiPandas key="pan" />, <AiFillApi key="api" />, <BiLogoPostgresql key="sql" />, <SiNeo4J key="neo" />, <BiLogoMongodb key="mongo" />],
    color: 'bg-violet-800'
  },
]