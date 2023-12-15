import { SkillCardProps } from '../lib/definitions';
import { skills } from '../lib/data/skills';

const Skills: React.FC = () => {
  return (
    <section className="mt-20" id="services">
      <div className="py-6">
        <h2 className="dark:text-white">Skills</h2>
      </div>

      <div className="grid grid-cols-1 pt-4 gap-10 md:grid-cols-2">
        {skills.map(e => (
          <SkillCard key={e.title} {...e} />
        ))}
      </div>
    </section>
  );
}

// NewServicesCard component with TypeScript
const SkillCard: React.FC<SkillCardProps> = ({ icon, title, description, logos, color }) => {
  return (
    <div className="flex flex-col h-full justify-between rounded-2xl bg-gray-200 p-6 dark:bg-gray-900 dark:text-white">
      <div className="h-full flex flex-col place-content-between">
        <div className='inline-flex items-center'>
          <span
            className={`text-white flex text-xl items-center justify-center h-8 w-8 rounded-full p-2 mr-2 ${color}`}
          >
            {icon}
          </span>
          <h3 className="my-2 dark:text-white">{title}</h3>
        </div>

        <div className="border-t-2 border-gray-400 mt-2"></div>

        <div className="mb-3 mt-6 text-gray-700 dark:text-gray-300">{description}</div>

        <div className="my-4">
          <div className="flex flex-wrap gap-3">
            {logos.map((logo, i) => (
              <div key={logo.toString() + i} className="text-3xl flex items-center text-gray-800 dark:text-gray-200">{logo}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
