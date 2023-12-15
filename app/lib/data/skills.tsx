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
import { Skill } from '../definitions';

export const skills: Skill[] = [
  {
    title: 'Frontend Development',
    description: 'I provide expert frontend development in React and modern frameworks for exceptional user experiences.',
    icon: <AiFillLayout />,
    logos: [<BiLogoAngular key="angular" />, <BiLogoReact key="react" />, <IoLogoPolymer key="polymer" />, <BiLogoTailwindCss key="tailwind" />, <SiMui key="mui" />, <BiLogoBootstrap key="boot" />],
    color: 'bg-rose-800'
  },
  {
    title: 'Backend Development',
    description: 'I have a deep proficiency in backend development using TypeScript and Python, creating robust, efficient, and maintainable server-side solutions.',
    icon: <AiOutlineCloudServer />,
    logos: [<BiLogoNodejs key="nodejs" />, <SiNestjs key="nestjs" />, <BiLogoDjango key="django" />, <BiLogoTypescript key="typescript" />],
    color: 'bg-sky-800'
  },
  {
    title: 'Architecture',
    description: 'I specialize in cloud-based software architecture, designing scalable and resilient solutions to optimize performance and reliability.',
    icon: <AiFillBuild />,
    logos: [<BiLogoAws key="aws" />, <BiLogoGoogleCloud key="gcp" />, <BiLogoFirebase key="fire" />, <BiLogoDigitalocean key="digi" />],
    color: 'bg-fuchsia-800'
  },
  {
    title: 'Data Integration',
    description: 'I offer data integration and pipeline services using Python, streamlining the flow of information and integrat it in databases.',
    icon: <AiFillFunnelPlot />,
    logos: [<BiLogoPython key="py" />, <SiPandas key="pan" />, <AiFillApi key="api" />, <BiLogoPostgresql key="sql" />, <SiNeo4J key="neo" />, <BiLogoMongodb key="mongo" />],
    color: 'bg-violet-800'
  },
]